
const Order = require('../Models/Order');


const getOrderHistory = async (req, res) => {
  const userId = req.user.userId; 

  try {
   
    const orderHistory = await Order.find({ userId }).populate('planId', 'name price');

    res.json(orderHistory);
  } catch (error) {
    console.error('Error fetching order history:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const createOrder = async (req, res) => {
  const userId = req.user.userId;
  const { planId, totalAmount } = req.body;

  try {
    // Create a new order
    const newOrder = new Order({
      userId,
      planId,
      totalAmount,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getOrderHistory,
  createOrder,

};
