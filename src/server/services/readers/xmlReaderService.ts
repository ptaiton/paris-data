import { parseStringPromise as parseString } from 'xml2js'
import { query } from '../dbService'

interface Ixml {
  import: {
    [key: string]: {
      uniqueID: string[]
      name: string[]
      value: string[]
    }[]
  }
}

export default async (file: Buffer) => {
  try {
    const xml: Ixml = await parseString(file.toString())
    const events = Object.values(xml.import).map((event: any) => ({
      id: event[0].uniqueID[0],
      name: event[0].name[0],
      value: event[0].value[0],
    }))

    const insertQuery = events.reduce(
      (query, event) => `${query} ('${event.id}', '${event.name}', '${event.value}'), `, 
      'INSERT INTO event (id, name, value) VALUES '
    ).slice(0, -2).concat(';')

    query(insertQuery)
  } catch (err) {
    console.log(err)
  }
}