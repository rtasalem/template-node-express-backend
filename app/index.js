import { app, port } from './server.js'

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`)
})

process.on('unhandledRejection', error => {
  console.error(error)
  process.exit(1)
})
