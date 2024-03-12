const { Order } = require('../models/Order');
exports.fetchOrderByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const order = await Order.find({ user: user })
    // .populate('product');
    console.log(order)
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const doc = await order.save();
    console.log(order)
    // const result = await doc.populate('product');
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};


exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByIdAndDelete(id);
      console.log(order)
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.UpdateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // const result = await cart.populate('product');
    console.log(order)
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};