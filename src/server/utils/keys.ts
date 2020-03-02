const mock = {
  metas: ['publisher', 'domain', 'modified_updates_on_metadata_change', 'license', 'records_count', 'title', 'staged', 'federated', 'visibility', 'modified', 'language', 'theme', 'modified_updates_on_data_change', 'metadata_processed', 'keyword', 'data_processed', 'license_url', 'description'],
  fields: ['type', 'name', 'label'],
  interopMetasDcat: ['issued', 'creator', 'accrualperiodicity', 'created'],
  interopMetas: ['dcat'],
  dataset: ['datasetid', 'metas', 'has_records', 'data_visible', 'features', 'fields', 'interop_metas'],
}

export const keys = <T>(objKey: 'metas' | 'fields' | 'interopMetasDcat' | 'interopMetas' | 'dataset') => {
  return mock[objKey]
}