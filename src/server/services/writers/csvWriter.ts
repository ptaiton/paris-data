import { Event } from '../../../types/Event'

export const eventsToCsv = (events: Event[]) =>
  events
    .reduce((csv, event) => `${csv}\n${event.id};${event.name};${event.value}`, 'id;name;value')
    .slice(1)