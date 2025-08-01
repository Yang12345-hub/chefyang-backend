// server.js
// This is the main file that starts your backend app

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import apiRoutes from './api/route.js'

dotenv.config() // Load .env variables

const app = express()

connectDB() // Connect to MongoDB

app.use(cors()) // Let frontend access the backend
app.use(express.json()) // Allow backend to read JSON body

app.use('/api', apiRoutes) // All API endpoints go through /api

app.get('/', (req, res) => {
  res.send('Chef Yang Bistro backend is working')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
