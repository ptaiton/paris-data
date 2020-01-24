import express from 'express'
import cors from 'cors'
import busboy from 'connect-busboy'
import { configureRouter } from './router'

const startServer = () => {
  const app = express()
    
  app.disable('x-powered-by')
  app.use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  app.use(busboy())
  app.use(cors())
  
  configureRouter(app)

  return app
}

export default startServer()
