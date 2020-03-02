import { Router } from 'express'
import { handleImport, handleExport, handleFormatsList } from '../controllers/eventController'

export const eventRoutes = Router()
  .post('/import', handleImport)
  .get('/export', handleExport)
  .get('/formats', handleFormatsList)