// route.js
// This file connects all the controller routes

import express from 'express'
import StoreController from './store.controller.js'
import MenuController from './menu.controller.js'

const router = express.Router()

// Route setup for each module
router.route('/stores').get(StoreController.apiGetStores)
router.route('/menu').get(MenuController.apiGetDishes)
router.route('/menu/:id').get(MenuController.apiGetDishById)


export default router
