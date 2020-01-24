import { readFileSync, unlink as removeFile } from 'fs'
import xmlReaderService from './readers/xmlReaderService'
import csvReaderService from './readers/csvReaderService'

export const fileTypeHandler = {
  xml: xmlReaderService,
  csv: csvReaderService,
}

export const fileTypes = Object.keys(fileTypeHandler)

export const uploadFile = (filename: string) => {
  console.log(filename)
  const fileType = filename.split('.').slice(-1)[0].toLowerCase()
  const file = readFileSync('upload/' + filename)
  fileTypeHandler[fileType](file)
  removeFile('upload/' + filename, () => {})
  
}