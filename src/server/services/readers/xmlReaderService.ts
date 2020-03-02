import { parseStringPromise as parseString } from 'xml2js'
import { query } from '../dbService'
import { pipe } from 'ramda'

interface Ixml {
  import: {
    [key: string]: {
      uniqueID: string[]
      name: string[]
      value: string[]
    }[]
  }
}

const stringToXML = (file: Buffer): Promise<Ixml> => parseString(file.toString())

const generateInsertQuery = (xml: Ixml): string =>
  Object.values(xml.import)
    .map((event: any) => ({
      id: event[0].uniqueID[0],
      name: event[0].name[0],
      value: event[0].value[0],
    }))
    .reduce(
      (query, event) => `${query} ('${event.id}', '${event.name}', '${event.value}'), `, 
      'INSERT INTO event (id, name, value) VALUES '
    ).slice(0, -2).concat(';')

const reader = async (file: Buffer): Promise<Boolean> =>  {
  const xml = await stringToXML(file)
  const sqlQuery = generateInsertQuery(xml)
  try {
    await query(sqlQuery)
    return true
  } catch (err) {
    return false
  }
}

export default reader