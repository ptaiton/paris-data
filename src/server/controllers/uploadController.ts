import { Request, Response } from 'express'
import { createWriteStream } from 'fs'
import { v4 as generateUuid } from 'uuid'
import { uploadFile } from '../services/uploadService'
import xmlReaderService from '../services/readers/xmlReaderService'
import csvReaderService from '../services/readers/csvReaderService'

const fileTypeHandler = {
  xml: xmlReaderService,
  csv: csvReaderService,
}

const fileTypes = Object.keys(fileTypeHandler)

export const handleFileUpload = (req: Request, res: Response) => {
  let fstream;
  req.pipe(req.busboy)
  req.busboy.on('file', (_, file, filename) => {
    const generatedFilename = `${new Date().getTime()}_${generateUuid()}_${filename}`
    const fileType = generatedFilename.split('.').slice(-1)[0].toLowerCase()
    if(fileTypes.includes(fileType)) {
      fstream = createWriteStream('upload/' + generatedFilename)
      file.pipe(fstream);
      fstream.on('close', async () => {
        await uploadFile(generatedFilename)
        res.sendStatus(200)
      })
    } else {
      const allowedFileTypes = fileTypes
        .reduce((acc, fileType) => `${acc} ${fileType},`)
        .slice(0, -1)
      res.status(400).send(`Format of file is invalid. Valid format types are:${allowedFileTypes}`)
    }
  })
}