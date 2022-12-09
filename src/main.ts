import express from 'express'

import { CONFIGS } from '../configs'
import { Application } from './Application'

const expressApp = express()
const router = express.Router()

const application = new Application(expressApp, router)

application.applyMiddlewares()
application.init(CONFIGS.PORT as number)
