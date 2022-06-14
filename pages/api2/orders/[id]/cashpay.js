import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors';
import Order from '../../../../models/Order';
import Product from '../../../../models/Product';
import {mailgun } from '../../../../utils/auth';
import emailTemplates from '../../../../utils/emailTemplates';
import dbConnect from '../../../../config/dbConnect';
import { isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
  onError,
});
dbConnect()
handler.get(async (req, res) => {
 
  const order = await Order.findById(req.query.id);
  if (order) {
    for (const index in order.orderItems) {
      const item = order.orderItems[index];
      const product = await Product.findById(item.product);
    }
    res.send(order);
    return;
  }
});
handler.use(isAuthenticatedUser).put(async (req, res) => {
 

  const order = await Order.findById(req.query.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentMethod = 'cash';
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };
    order.transactions.push({
      user: req.user._id,
      userName: req.user.name,
      transactionType: 'PAYED',
    });

    const updatedOrder = await order.save();
    // Update count in stock
    for (const index in updatedOrder.orderItems) {
      const item = updatedOrder.orderItems[index];
      const productP = await Product.findOne(item.product);
      const product = await Product.findById(productP);
      product.countInStock -= item.quantity;
      product.sold += item.quantity;
      product.transactions.push({
        user: req.user._id,
        qty: -item.quantity,
        transactionType: 'SOLD',
        description: `sold to ${req.user.name} on order ${updatedOrder._id}`,
      });
      await product.save();
    }

    mailgun.messages().send(
      {
        from: 'Tuginternet <me@mg.tuginternet.co>',
        to: `${order.user.name} <${order.user.email}>`,
        subject: `New order [${order._id}] is now complete.`,
        html: emailTemplates.payOrder(order),
      },
      (error, body) => {
        console.log(error);
      }
    );
    
    res.send({ message: 'Order Paid', order: updatedOrder });
  } else {
    
    res.status(404).send({ message: 'Order Not Found' });
  }
});

export default handler;
