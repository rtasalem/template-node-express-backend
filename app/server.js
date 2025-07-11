import express from 'express'
import config from './config/index.js'
import { health } from './routes/index.js'

const server = async () => {
  const app = express()
  const port = config.get('server.port')

  app.use(health)

  app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
  })
}

export default server
