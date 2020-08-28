import express from 'express'
import healthcheckRoutes from './routes/healthcheck'
const router = express.Router()
import cors from 'cors'
import AWS from 'aws-sdk'

const API_PREFIX = '/v1'

AWS.config.credentials = new AWS.Credentials({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
AWS.config.update({ region: process.env.AWS_REGION })

const app = express()

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)

router.use('/healthcheck', healthcheckRoutes)

app.use(API_PREFIX, router)

app.use((req, res, next) => {
  if (!req.route) {
    return res.status(404).json({
      status: 404,
      category: 'Not Found',
      message: 'API response resource not found.',
      resource: 'not found',
      uri: `${req.url}`
    })
  }
  next()
})

export default app