// menu.controller.js
// Handles menu-related APIs like listing dishes and showing dish details

import DishDAO from '../dao/dishDAO.js';

export default class MenuController {
  static async apiGetDishes(req, res, next) {
    let response = {
    };
    res.json(response);
  }

  static async apiGetDishById(req, res, next) {
    try {
      let id = req.params.id || {};
      let dish = {};
      if (!dish) {
        res.status(404).json({ error: 'not found' });
        return;
      }
      res.json(dish);
    } catch (e) {
      console.log(`API error: ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
