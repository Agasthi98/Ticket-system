import express from "express";
import dotenv from 'dotenv'
import colours from 'colors'
import connectDB from './config/db.js';
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API IS Running.......')
})

//import routes
import userRoutes from './routes/userRoutes.js'
import rechargeRoutes from './routes/rechargeRoutes.js'


//calling routes
app.use('/api/users', userRoutes)
app.use('/api/recharge', rechargeRoutes)
import uploadRoutes from './routes/uploadRoutes.js'
import busRoute from './routes/busRoute.js'

//calling routes
app.use('/api/users', userRoutes)
app.use('/api/uploads', uploadRoutes)
app.use('/api/bus', busRoute)

const __dirname = path.resolve()
app.use('/images', express.static(path.join(__dirname, '/images')))


const PORT = process.env.PORT || 3600

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))