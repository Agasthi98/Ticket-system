import express from "express";
const router = express.Router()
import { insertBus } from '../controllers/busController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/insertBus').post(protect,insertBus)

export default router
