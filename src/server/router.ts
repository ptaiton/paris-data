import { Application } from 'express'
import { serve as swaggerServe, setup as setupSwagger } from 'swagger-ui-express'
import { handleRenderingRequest } from './ssr/ssrController'
import swaggerJSON from './swagger'
import { eventRoutes } from './routes/eventRoutes'
import { recordsRoutes, datasetRoutes } from './routes/odsRoutes'

export const configureRouter = (app: Application) => {
  app.use('/api/datasets/1.0', datasetRoutes)
  app.use('/api/records/1.0', recordsRoutes)
  app.use('/event', eventRoutes)
  app.use('/api-docs', swaggerServe, setupSwagger(swaggerJSON));
  app.use('/*', handleRenderingRequest)
}