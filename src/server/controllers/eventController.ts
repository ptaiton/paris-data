import { Request, Response } from 'express'
import { exportEvents } from '../services/exportService'
import { importFile } from '../services/importService'
import { ContentType, getContentTypes } from '../../types/ContentType'

export const handleExport = (req: Request, res: Response) => {
  const contentTypeAllowed = getContentTypes()
  if(contentTypeAllowed.includes(req.headers["content-type"] || '')) {
    exportEvents(req.headers["content-type"] as ContentType)
      .then((events: any) => res.send(events.value))
      .catch(res.send)
  } else {
    res.status(400).send(`Please specify a valid content-type. Content-types allowed are: ${contentTypeAllowed}`)
  }
}

export const handleImport = (req: Request, res: Response) => {
  req.pipe(req.busboy)
  req.busboy.on('file', (_, file, filename) => {
    importFile(_, file, filename)
  })
}

export const handleFormatsList = (req: Request, res: Response) => {
  res.send(getContentTypes())
}