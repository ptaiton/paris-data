import { v4 as generateUuid } from 'uuid'
import { writeFile } from 'fs'

export default (() => {
  let csv = 'id;name;value\n'
  for(let i = 0; i < 10e4; i++) {
    csv += `${generateUuid()};csv generator ${i};${i}\n`
  }
  const data = new Uint8Array(Buffer.from(csv.slice(0, -1)))
  writeFile('mock.csv', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!')
  })
})()