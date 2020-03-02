export interface Metas {
  publisher: string,
  domain: string,
  modified_updates_on_metadata_change: boolean,
  license: string,
  records_count: number,
  title: string,
  staged: boolean,
  federated: boolean,
  visibility: string,
  modified: string,
  language: string,
  theme: string[],
  modified_updates_on_data_change: boolean,
  metadata_processed: string,
  keyword: string[],
  data_processed: string,
  license_url: string,
  description: string,
}

export interface Field {
  type: string,
  name: string,
  label: string
}

export interface InteropMetasDcat {
  issued: string,
  creator: string,
  accrualperiodicity: string,
  created: string
}

export interface InteropMetas {
  dcat: InteropMetasDcat
}

export interface RawDataset {
  datasetid: string,
  publisher: string,
  domain: string,
  modified_updates_on_metadata_change: boolean,
  license: string,
  title: string,
  staged: boolean,
  federated: boolean,
  visibility: string,
  modified: string,
  language: string,
  modified_updates_on_data_change: boolean,
  metadata_processed: string,
  data_processed: string,
  license_url: string,
  description: string,
  data_visible: boolean,
  issued: string,
  creator: string,
  accrualperiodicity: string,
  created: string
}

export interface Dataset {
  datasetid: string,
  metas: Metas,
  has_records: boolean,
  data_visible: boolean,
  features: string[],
  fields: Field[],
  interop_metas: InteropMetas
}

export interface ParisEvents {
  id: string,
  name: string,
  value: string
}

export interface Record {
  datasetid: string,
  recordid: number,
  fields: { [index: string]: string | number },
  record_timestamp: string
}

export interface Records {
  nhits: number,
  parameters: {
    dataset: string,
    timezone: string,
    rows: number,
    format: string
  },
  records: Record[]
}