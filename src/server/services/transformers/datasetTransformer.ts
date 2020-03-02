import { pickAll, pick, head } from 'ramda'
import { keys } from '../../utils/keys'
import { RawDataset, Dataset, Metas, InteropMetasDcat, Field } from '../../../types/Dataset'

export const rawDatasetsToFields = (rawDatasets: RawDataset[]) =>
  rawDatasets.reduce<Field[]>((fields, rawDataset) => [
    ...fields, 
    pickAll(keys<Field>('fields'), rawDataset)
  ], [])

export const rawDatasetToDataset = (rawDataset: RawDataset, fields: Field[]): Dataset => ({
  ...pickAll(keys<Dataset>('dataset'), rawDataset),
  datasetid: rawDataset.datasetid,
  metas: {
    ...pickAll(keys<Metas>('metas'), rawDataset),
    records_count: 1,
    keyword: [],
    theme: []
  },
  fields,
  features: [],
  interop_metas: {
    dcat: pick(keys<InteropMetasDcat>('interopMetasDcat'), rawDataset)
  }  
})

export const rawDatasetsToDataset = (rawDatasets: RawDataset[]): Dataset | null => {
  const rawDataset = head(rawDatasets)
  return rawDataset ? rawDatasetToDataset(rawDataset, rawDatasetsToFields(rawDatasets)) : null
}