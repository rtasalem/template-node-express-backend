const { app, port } = require('./server')

const init = async () => {
  app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`)
  })
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
