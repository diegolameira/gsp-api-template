import express from 'express'
import { getHealthCheck } from'../../controllers/healthcheck'

const router = express.Router()

router.get('/', async (req, res) => getHealthCheck(req, res))

export default router