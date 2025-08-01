// comments.controller.js
// Handles user comments: listing and adding comments

import express from 'express'
const router = express.Router()

// Mock comment data
const comments = [
  { dishId: 1, content: 'Very tasty!' },
  { dishId: 2, content: 'Fresh and delicious!' }
]

// GET all comments
router.get('/', (req, res) => {
  res.json(comments)
})

// POST a new comment
router.post('/', (req, res) => {
  const newComment = req.body
  comments.push(newComment)
  res.status(201).json({ message: 'Comment added!', comment: newComment })
})

export default router
