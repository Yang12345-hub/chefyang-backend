// store.controller.js
// Handles store-related APIs like getting and adding stores

import express from 'express'
const router = express.Router()

// Mock data for stores
const stores = [
  { id: 1, name: 'San Jose Store' },
  { id: 2, name: 'Sunnyvale Store' }
]

// GET all stores
router.get('/', (req, res) => {
  res.json(stores)
})

// POST a new store
router.post('/', (req, res) => {
  const newStore = req.body
  stores.push(newStore)
  res.status(201).json({ message: 'Store added!', store: newStore })
})

export default router
