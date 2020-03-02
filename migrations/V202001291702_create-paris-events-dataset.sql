CREATE TABLE dataset_paris_events (
  id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  value varchar(255) NOT NULL,

  PRIMARY KEY(id)
);

INSERT INTO dataset (
  datasetid, 
  publisher, 
  domain,
  modified_updates_on_metadata_change, 
  license, 
  title, 
  staged, 
  federated, 
  visibility, 
  modified, 
  language, 
  modified_updates_on_data_change, 
  metadata_processed, 
  data_processed, 
  license_url, 
  description, 
  data_visible, 
  issued, 
  creator, 
  accrualperiodicity, 
  created
) VALUES (
  'paris-events',
  'EPSI',
  'paris-events',
  0,
  'Open Database License (ODbL)',
  'Evenements paris',
  0,
  0,
  'domain',
  NOW(),
  'fr',
  1,
  NOW(),
  NOW(),
  'http://opendatacommons.org/licenses/odbl/',
  '<p>Evenements paris</p>',
  1,
  NOW(),
  'EPSI',
  'Annuelle',
  NOW()
);

INSERT INTO field (
  datasetid,
  type,
  name,
  label
) VALUES (
  'paris-events',
  'text',
  'id',
  'id'
);

INSERT INTO field (
  datasetid,
  type,
  name,
  label
) VALUES (
  'paris-events',
  'text',
  'name',
  'name'
);

INSERT INTO field (
  datasetid,
  type,
  name,
  label
) VALUES (
  'paris-events',
  'text',
  'value',
  'value'
);

