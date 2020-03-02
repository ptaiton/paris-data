
import xmlReaderService from './readers/xmlReaderService'
import csvReaderService from './readers/csvReaderService'
import { checkForFileType } from '../utils/file'
import { ContentType, getFileTypes } from '../../types/ContentType'
import { splitAndGetLast } from '../utils/array'

export const readers = {
  [ContentType.XML]: xmlReaderService,
  [ContentType.CSV]: csvReaderService,
}

export const importFile = async (_: string, fileStream: NodeJS.ReadableStream, filename: string): Promise<boolean> => {
  const fileType = splitAndGetLast(filename, '.')
  if(checkForFileType(fileType, getFileTypes())) {
    const file = await handleFileStream(fileStream)
    return readers[fileType](file)
  }

  return false
}

const handleFileStream = (file: NodeJS.ReadableStream) =>
  new Promise<Buffer>((resolve, reject) => {
    let data: Buffer
    file.on('data', (chunk) => data += chunk)
    file.on('error', reject)
    file.on('end', () => resolve(data))
  })
