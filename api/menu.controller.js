// menu.controller.js
// Handles menu-related APIs like listing dishes and showing dish details

import DishDAO from '../dao/dishDAO.js';
import OrderDAO from '../dao/orderDAO.js';

export default class MenuController {
  static async apiGetDishes(req, res, next) {
    const { dishesList } = await DishDAO.getDishes();
    let response = {
      dishes: dishesList,
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

  static async apiGetCartByUserId(req, res, next) {
    try {
      let id = req.params.userId || {};
      let cart = await OrderDAO.apiGetCartByUserId(id);
      if (!cart) {
        res.status(404).json({ error: 'not found' });
        return;
      }
      res.json(cart);
    } catch (e) {
      console.log(`API error: ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiUpsertCart(req, res, next) {
    try {
      const userId = req.body.userId;
      const itemIds = req.body.itemIds;

      const cartResponse = await OrderDAO.upsertCart(
        userId,
        {itemIds},
      );

      var { error } = cartResponse;

      if (error) {
        res.status(500).json({ error: "Unable to update cart." });
      } else {
        res.json({
          status: "success",
          response: cartResponse
        });
      }
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
