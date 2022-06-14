import nextConnect from "next-connect";
import { onError } from "../../../middleware/errors";
import Order from '../../../models/Order';
import dbConnect from "../../../config/dbConnect";
import { isAuthenticatedUser } from "../../../middleware/auth";

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(isAuthenticatedUser).get(async (req, res) => {
   
    const orders = await Order.find({ user: req.user._id });
   
    res.send(orders);


})

export default handler;