import express from 'express'
const router = express.Router()
import { getUserTrips, insertBus } from '../controllers/busController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/insertBus').post(protect, insertBus)
router.post('/userTrips', getUserTrips)

export default router
