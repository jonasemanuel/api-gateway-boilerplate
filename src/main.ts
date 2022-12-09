import express from 'express'
import axios from 'axios'
import helmet from 'helmet'

import { registry } from '../registry'
import { CONFIGS } from '../configs'

const app = express()
const router = express.Router()

app.use(helmet())
app.use(express.json())

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

app.listen(CONFIGS.PORT, () => {
  console.log(`${CONFIGS.APP_NAME} listening on ${CONFIGS.PORT}`)
})
