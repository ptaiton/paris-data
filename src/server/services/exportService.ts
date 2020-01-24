import { query } from './dbService'
import { ContentType } from '../../types/ContentType'
import { eventsToCsv } from './writers/csvWriter'
import { eventsToXML } from './writers/xmlWriter'
import { eventsToJSON } from './writers/jsonWriter'
import { Event } from '../../types/Event'

export const writers = {
  [ContentType.CSV]: eventsToCsv,
  [ContentType.XML]: eventsToXML,
  [ContentType.JSON]: eventsToJSON
}

export const getCsvEvents = async (contentType: ContentType) => {
  const events = await fetchAllEvents()
  return writers[contentType](events)
}

const fetchAllEvents = () => {
  const sqlQuery = 'SELECT id, name, value FROM event'
  return query<Event[]>(sqlQuery)
}

