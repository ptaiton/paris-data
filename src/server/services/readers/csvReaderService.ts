import { query } from '../dbService'

const reader = async (file: Buffer): Promise<boolean> => {
    const csv = file.toString()
    const rawEvents = csv.split('\n').slice(1)
  
    const events = rawEvents.map((rawEvent) => {
      const [ id, name, value ] = rawEvent.split(';')
      return { id, name, value }
    })
  
    const insertQuery = events.reduce(
      (query, event) => `${query} ('${event.id}', '${event.name}', '${event.value}'), `, 
      'INSERT INTO event (id, name, value) VALUES '
    ).slice(0, -2).concat(';')

    try {
      await query(insertQuery)
      return true
    } catch (err) {
      return false
    }
}

export default reader