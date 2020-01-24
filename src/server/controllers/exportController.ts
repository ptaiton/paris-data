import { Request, Response } from 'express'
import { getCsvEvents } from '../services/exportService'
import { ContentType } from '../../types/ContentType'

export const handleExport = async (req: Request, res: Response) => {
  const contentTypeAllowed = Object.values(ContentType) as string[]
  if(contentTypeAllowed.includes(req.headers["content-type"] || '')) {
    const csvEvents = await getCsvEvents(req.headers["content-type"] as ContentType)
    res.send(csvEvents)
  } else {
    res.status(400).send(`Please specify a valid content-type. Content-types allowed are: ${contentTypeAllowed}`)
  }
}

