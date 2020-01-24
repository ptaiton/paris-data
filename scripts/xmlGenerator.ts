import { v4 as generateUuid } from 'uuid'
import { writeFile } from 'fs'

export default (() => {
  let xml = '<import>\n'
  for(let i = 0; i < 10e4; i++) {
    xml += `<data${i}>
      <uniqueID>${generateUuid()}</uniqueID>
      <name>xml generator ${i}</name>
      <value>${i}</value>
      </data${i}>\n`
  }
  xml += '</import>\n'
  const data = new Uint8Array(Buffer.from(xml))
  writeFile('mock.xml', data, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  });
})()