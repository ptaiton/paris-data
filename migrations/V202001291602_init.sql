CREATE TABLE dataset (
  datasetid varchar(255),
  publisher varchar(255),
  domain varchar(255),
  modified_updates_on_metadata_change boolean,
  license varchar(255),
  title varchar(255),
  staged boolean,
  federated boolean,
  visibility varchar(255),
  modified Datetime,
  language varchar(255),
  modified_updates_on_data_change boolean,
  metadata_processed Datetime,
  data_processed Datetime,
  license_url varchar(255),
  description varchar(255),
  has_records boolean,
  data_visible boolean,
  issued Datetime,
  creator varchar(255),
  accrualperiodicity varchar(255),
  created Datetime,

  PRIMARY KEY(datasetid)
);

CREATE TABLE feature (
  featureid varchar(255),
  name varchar(255),

  PRIMARY KEY(featureid)
);

CREATE TABLE dataset_feature (
  datasetid varchar(255),
  featureid varchar(255),

  PRIMARY KEY(datasetid, featureid),
  FOREIGN KEY (datasetid) REFERENCES dataset(datasetid),
  FOREIGN KEY (featureid) REFERENCES feature(featureid)
);

CREATE TABLE keyword (
  keywordid varchar(255),
  name varchar(255),

  PRIMARY KEY(keywordid)
);

CREATE TABLE dataset_keyword (
  datasetid varchar(255),
  keywordid varchar(255),

  PRIMARY KEY(datasetid, keywordid),
  FOREIGN KEY (datasetid) REFERENCES dataset(datasetid),
  FOREIGN KEY (keywordid) REFERENCES keyword(keywordid)
);

CREATE TABLE theme (
  themeid varchar(255),
  name varchar(255),
  PRIMARY KEY(themeid)
);

CREATE TABLE dataset_theme (
  datasetid varchar(255),
  themeid varchar(255),

  PRIMARY KEY(datasetid, themeid),
  FOREIGN KEY (datasetid) REFERENCES dataset(datasetid),
  FOREIGN KEY (themeid) REFERENCES theme(themeid)
);

CREATE TABLE field (
  fieldid int NOT NULL AUTO_INCREMENT,
  datasetid varchar(255),
  type varchar(255),
  name varchar(255),
  label varchar(255),

  PRIMARY KEY(fieldid),
  FOREIGN KEY (datasetid) REFERENCES dataset(datasetid)
)