import { groupBy } from 'ramda'
import { rawDatasetsToDataset } from './transformers/datasetTransformer'
import { getDatasets, getDataset, getRecords } from '../repositories/datasetRepository'
import { Dataset, RawDataset, Records } from '../../types/Dataset'

export const searchDatasets = async (): Promise<Dataset[]> => {
  const rawDatasets = await getDatasets()
  const groupedRawDatasets = groupBy<RawDataset>(rawDataset => rawDataset.datasetid, rawDatasets)
  return Object.values(groupedRawDatasets).reduce<Dataset[]>((datasets, rawDatasets) => {
    const dataset = rawDatasetsToDataset(rawDatasets)
    return dataset ? [...datasets, dataset] : datasets
  }, [])
}

export const searchDataset =  async (datasetId: string): Promise<Dataset> => {
  const rawDatasets = await getDataset(datasetId)
  const dataset = rawDatasetsToDataset(rawDatasets)
  if(dataset) {
    return dataset
  }

  return Promise.reject(`Unable to find dataset ${datasetId}`)
}

export const getDatasetRecords = async (datasetId: string): Promise<Records> => {
  const records = await getRecords(datasetId)

  return ({
    nhits: 1,
    parameters: {
      dataset: datasetId,
      timezone: 'UTC',
      rows: records.length,
      format: 'json'
    },
    records: records.map((record, index) => ({
      datasetid: datasetId,
      recordid: index,
      record_timestamp: new Date().toISOString(),
      fields: record
    }))
  })
}