import { Request, Response } from 'express'
import { searchDataset, getDatasetRecords, searchDatasets } from '../services/datasetService'

export const fetchDatasets = async (req: Request, res: Response) => {
  const response = await searchDatasets()
  res.send(response)
}

export const fetchDataset = async (req: Request, res: Response) => {
  const response = await searchDataset(req.params.datasetid)
  res.send(response)
}

export const fetchRecords = async (req: Request, res: Response) => {
  const response = await getDatasetRecords(req.params.datasetid)
  res.send(response)
}
