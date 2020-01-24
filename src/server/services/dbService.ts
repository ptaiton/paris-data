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

export const query = <T>(sqlQuery: string) => {
  return new Promise<T>((resolve, reject) => {
    connection.query(sqlQuery, (error, results) => {
      if(error) {
        console.log(error)
        reject(error)
      }

      resolve(results)
    })
  })
}