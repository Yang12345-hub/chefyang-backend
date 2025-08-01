// route.js
// This file connects all the controller routes

import express from 'express'
import storeController from './store.controller.js'
import menuController from './menu.controller.js'
import commentsController from './comments.controller.js'
import coreController from './cart.controller.js'

const router = express.Router()

// Route setup for each module
router.use('/stores', storeController)
router.use('/menu', menuController)
router.use('/comments', commentsController)
router.use('/core', coreController)

export default router
