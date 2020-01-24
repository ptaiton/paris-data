import express from 'express'

let app = require('./server/index').default

if (module.hot) {
  module.hot.accept('./server/index', () => {
    console.log('🔁  HMR Reloading `./server`...')
    try {
      app = require('./server/index').default
    } catch (error) {
      console.error(error)
    }
  })
  console.info('✅  Server-side HMR Enabled!')
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, (err: Error) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`> Started on port ${port}`)
  })