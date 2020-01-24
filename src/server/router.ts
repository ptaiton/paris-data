import { Application } from 'express'
import { serve as swaggerServe, setup as setupSwagger } from 'swagger-ui-express'
import { handleRenderingRequest } from './ssr/ssrController'
import { handleFileUpload } from './controllers/uploadController'
import { handleExport } from './controllers/exportController'
import swaggerJSON from './swagger'

export const configureRouter = (app: Application) => {
  app.route('/upload').post(handleFileUpload)
  app.route('/export').get(handleExport)
  app.use('/api-docs', swaggerServe, setupSwagger(swaggerJSON));
  app.use('/*', handleRenderingRequest)
}