import { createConnection as createMysqlConnection, Connection } from 'mysql'

let connection: Connection

export default (() => {
  connection = createMysqlConnection({
    host     : 'localhost',
    user     : 'paris_data',
    password : 'paris_data',
    database : 'paris_data'
  });
 
  connection.connect()
  return connection
})()

export const query = <T = any>(sqlQuery: string): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    connection.query(sqlQuery, (error, results) => {
      console.log(sqlQuery)
      if(error) {
        reject(error)
      }
      
      resolve(results)
    })
  })