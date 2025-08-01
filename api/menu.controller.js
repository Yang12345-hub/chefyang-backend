// menu.controller.js
// Handles menu-related APIs like listing dishes and showing dish details

import express from 'express'
const router = express.Router()

// Mock menu data
const menu = [
  { id: 1, name: 'Beef Pho', price: 12.99 },
  { id: 2, name: 'Spring Rolls', price: 6.99 }
]

// GET all menu items
router.get('/', (req, res) => {
  res.json(menu)
})

// GET menu item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const dish = menu.find(item => item.id === id)
  if (dish) {
    res.json(dish)
  } else {
    res.status(404).json({ message: 'Dish not found' })
  }
})

export default router
