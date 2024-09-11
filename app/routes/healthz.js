import express from 'express'

const healthzRouter = express.Router()

healthzRouter.get('/healthz', (req, res) => {
  res.status(200).send('ok')
})

export default healthzRouter
