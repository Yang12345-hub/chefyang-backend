// cart.controller.js
// Handles shopping cart APIs

import express from 'express'
import CartDAO from '../dao/cartDAO.js'

const router = express.Router()

// Get cart by userId
router.get('/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId)
  const cart = await CartDAO.getCartByUser(userId)
  res.json(cart)
})

// Add item to cart
router.post('/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId)
  const { dishId, quantity } = req.body
  const updatedCart = await CartDAO.addItemToCart(userId, dishId, quantity)
  res.status(201).json(updatedCart)
})

// Remove item from cart
router.delete('/:userId/:dishId', async (req, res) => {
  const userId = parseInt(req.params.userId)
  const dishId = parseInt(req.params.dishId)
  const updatedCart = await CartDAO.removeItemFromCart(userId, dishId)
  res.json(updatedCart)
})

// Clear entire cart
router.delete('/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId)
  await CartDAO.clearCart(userId)
  res.json({ message: 'Cart cleared.' })
})

export default router
