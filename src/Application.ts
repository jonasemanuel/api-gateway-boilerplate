import express, { Express, Router } from 'express'
import helmet from 'helmet'
import axios from 'axios/index'

import { CONFIGS } from '../configs'
import { registry } from '../registry'

export class Application {
  app: Express
  appName: string = CONFIGS.APP_NAME

  constructor (application: Express, router: Router) {
    this.app = application

    router.all('/:apiName/:path', async (req, res) => {
      const resources = registry.resources
      const resource = resources[req.params.apiName]

      const { data } = await axios({
        url: `${resource.url}/${req.params.path}`,
        method: req.method,
        headers: req.headers,
        data: req.body
      })

      res.send(data)
    })
  }

  applyMiddlewares () {
    this.app.use(helmet())
    this.app.use(express.json())
  }

  init (port: number) {
    this.app.listen(port, () => {
      console.log(`${this.appName} listening on ${port}`)
    })
  }
}
