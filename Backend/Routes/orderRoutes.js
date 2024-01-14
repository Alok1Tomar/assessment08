
const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');
const authenticateToken = require('../middleware/authenticateToken'); 


router.get('/order-history', authenticateToken, orderController.getOrderHistory);

router.post('/create-order', authenticateToken, orderController.createOrder);


module.exports = router;
