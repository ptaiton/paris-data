import { Router } from 'express'
import { fetchDatasets, fetchDataset, fetchRecords } from '../controllers/odsController'

export const datasetRoutes = Router()
  .get('/search/', fetchDatasets)
  .get('/:datasetid/', fetchDataset)

export const recordsRoutes = Router()
  .get('/search//', fetchRecords)