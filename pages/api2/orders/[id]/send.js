import nextConnect from "next-connect";
import { onError } from "../../../../middleware/errors";
import Order from '../../../../models/Order';
import { mailgun  } from '../../../../utils/auth';
import emailTemplates from '../../../../utils/emailTemplates';
import dbConnect from "../../../../config/dbConnect";
import { authorizeRoles, isAuthenticatedUser } from "../../../../middleware/auth";

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(authorizeRoles, isAuthenticatedUser);

handler.put(async (req, res) => {
   
    const order = await Order.findById(req.query.id);
    if (order) {

        order.isSent= true;
        order.sentAt = Date.now();
        order.transactions.push({
          user: req.user._id,
          userName: req.user.name,
          transactionType: 'SENT',
        });
  
        const updatedOrder = await order.save();
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
        
        res.send({ message: 'Order Sent', order: updatedOrder });
        res.send(order);
    } else {
        
        res.status(404).send({ message: 'Order Not Found' });
    }
})

export default handler;