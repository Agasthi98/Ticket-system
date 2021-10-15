import express from 'express'

const router = express.Router()

import { addRecharge, getUserRecharges } from '../controllers/rechargeController.js'



router.post('/addrecharge', addRecharge)
router.post('/userRecharges', getUserRecharges)

export default router
