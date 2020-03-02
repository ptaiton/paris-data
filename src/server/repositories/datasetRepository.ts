import { query } from '../services/dbService'
import { mkErr } from '../utils/fp'
import { RawDataset } from '../../types/Dataset'

type DatasetRecord = {[key: string]: string | number}

const datasetColumns = `
  dataset.datasetid,
  dataset.publisher,
  dataset.domain,
  dataset.modified_updates_on_metadata_change,
  dataset.license,
  dataset.title,
  dataset.staged,
  dataset.federated,
  dataset.visibility,
  dataset.modified,
  dataset.language,
  dataset.modified_updates_on_data_change,
  dataset.metadata_processed,
  dataset.data_processed,
  dataset.license_url,
  dataset.description,
  dataset.has_records,
  dataset.data_visible,
  dataset.issued,
  dataset.creator,
  dataset.accrualperiodicity,
  dataset.created
`

const fieldColumns = `
  field.name,
  field.type,
  field.label
`

const fieldsArrayToString = (fields: string[]) => 
  fields
    .reduce((s, field) => `${s + field},`,'')
    .slice(-1)

const getRecordsFromFields = (datasetId: string, fields: string[]) =>
  query<DatasetRecord[]>(`
    SELECT ${fieldsArrayToString(fields)}
    FROM dataset_${datasetId}
  `)

export const getDatasets = () =>
  query<RawDataset[]>(`
    SELECT 
      ${datasetColumns},
      ${fieldColumns}
    FROM dataset
    LEFT JOIN field ON field.datasetid = dataset.datasetid
  `)

export const getDataset = (datasetId: string) =>
  query<RawDataset[]>(`
    SELECT
      ${datasetColumns},
      ${fieldColumns}
    FROM dataset
    WHERE datasetid = '${datasetId}'
  `)

export const getRecords = (datasetId: string): Promise<DatasetRecord[]> =>
  query<string[]>(`SELECT name FROM field WHERE datasetid = ${datasetId}`)
    .then(fields => getRecordsFromFields(datasetId, fields))
    .catch(error => { throw mkErr(`Error while fetching fields from ${datasetId}: ${error}`) })
