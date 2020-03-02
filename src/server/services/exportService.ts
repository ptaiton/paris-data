import { query } from './dbService'
import { eventsToCsv } from './writers/csvWriter'
import { eventsToXML } from './writers/xmlWriter'
import { eventsToJSON } from './writers/jsonWriter'
import { ContentType } from '../../types/ContentType'
import { Event } from '../../types/Event'

const writers = {
  [ContentType.CSV]: eventsToCsv,
  [ContentType.XML]: eventsToXML,
  [ContentType.JSON]: eventsToJSON,
}

const fetchAllEvents = () => {
  const sqlQuery = 'SELECT id, name, value FROM event'
  return query<Event[]>(sqlQuery)
}

export const exportEvents = async (contentType: string) => {
  const events = await fetchAllEvents()

  events.map(writers[contentType]())
}
