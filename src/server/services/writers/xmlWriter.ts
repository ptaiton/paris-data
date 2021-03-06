import { Event } from '../../../types/Event'

export const eventsToXML = (events: Event[]) => 
  events
    .reduce((csv, event, index) => `${csv}
        <data${index}>
          <uniqueID>${event.id}</uniqueID>
          <name>${event.name}</name>
          <value>${event.value}</value>
        </data${index}>`
    , '<import>\n')
    .slice(0, -1)