import Order from '../models/orderModel';
import User from '../models/userModel';
import catchAsyncErrors from '../../middleware/catchAsyncErrors'

const myOrder = catchAsyncErrors(async (req, res) => {
   const orders = await Order.find({ user: req.user._id });
   res.send(orders);
})

const summaryOrder = catchAsyncErrors(async (req, res) => {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const dailyOrders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          orders: { $sum: 1 },
          sales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const productCategories = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({ users, orders, dailyOrders, productCategories });
  })

  const historyOrder = catchAsyncErrors(async (req, res) => {
    const searchQuery = req.query.query || 'all';
    const searchFilter =
        searchQuery !== 'all'
            ? {
                _id: {
                    $regex: searchQuery,
                    $options: 'i',
                },
            }
            : {};
            
    const orderDocs = await Order.find({ ...searchFilter }).populate('user','name');   
    const orders = orderDocs.map(db.convertDocToObj);
    res.send(orders);
})

const mineOrder = catchAsyncErrors(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })


orderRouter.get(
  '/:id',
  isAuthenticatedUser,
  catchAsyncErrors(async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id }).populate(
      'user',
      'name email'
    );
    if (order) {
      res.send(order);
    } else {
      res.status(404).send('Order Not Found.');
    }
  })
);

orderRouter.delete(
  '/:id',
  isAuthenticatedUser,
  authorizeRoles,
  catchAsyncErrors(async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
      const deletedOrder = await order.remove();
      res.send(deletedOrder);
    } else {
      res.status(404).send('Order Not Found.');
    }
  })
);

const createOrder = catchAsyncErrors(async (req, res) => {
  await db.connect();
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    totalBuyPrice: req.body.totalBuyPrice,
    deliverScheduledAt: req.body.deliverScheduledAt,
    deliverScheduledTo: req.body.deliverScheduledTo,
    deliverScheduledTime: req.body.deliverScheduledTime,
    user: req.user._id,
  });

  // Check count in stock
  for (const index in newOrder.orderItems) {
    const item = newOrder.orderItems[index];
    const productP = await Product.findOne(item.product);
    const product = await Product.findById(productP);
    if (product.countInStock < item.quantity) {
      res.status(400).send({
        message: `Error: There are only ${product.countInStock} instance of ${product.name}`,
      });
      return;
    }
  }

  newOrder.transactions.push({
    user: req.user._id,
    userName: req.user.name,
    transactionType: 'CREATED',
  });

  const newOrderCreated = await newOrder.save();
  await db.disconnect();

  res
    .status(201)
    .send({ message: 'New Order Created', order: newOrderCreated });
})


orderRouter.put(
  '/:id/pay',
  isAuthenticatedUser,
  catchAsyncErrors(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      };
      const updatedOrder = await order.save();
      res.send({ message: 'Order Paid.', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order not found.' });
    }
  })
);

orderRouter.put(
  '/:id/deliver',
  isAuthenticatedUser,
  catchAsyncErrors(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.send({ message: 'Order Delivered.', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order not found.' });
    }
  })
);

export {
  summaryOrder,
  getOrder,
  createOrder,
  mineOrder, 
  myOrder,
  historyOrder
  
}
