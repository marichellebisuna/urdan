import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors';
import Coupon from '../../../../models/Coupon';
import dbConnect from '../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
    onError,
});
dbConnect()
handler
    .use(authorizeRoles, isAuthenticatedUser)
    .get(async (req, res) => {
       
        const coupon = await Coupon.findById(req.query.id);
       
        res.send(coupon);
    })
handler
    .use(authorizeRoles, isAuthenticatedUser)
    .put(async (req, res) => {
       
        const coupon = await Coupon.findById(req.query.id);
        if (coupon) {
            coupon.name = req.body.name;
            coupon.expiry = req.body.expiry;
            coupon.discount = req.body.discount;
            const updatedCoupon = await coupon.save();
           
            res.send({
                message: 'Coupon Updated By Admin',
                coupon: updatedCoupon,
            });
        } else {
           
            res.status(404).send({ message: 'Coupon Not Found' });
        }
    })
    .use(authorizeRoles, isAuthenticatedUser)
    .delete(async (req, res) => {
      
        const coupon = await Coupon.findById(req.query.id);
        if (coupon) {
            const deletedCoupon = await coupon.remove();
           
            res.send({ message: 'Coupon Deleted', coupon: deletedCoupon });
        } else {
            
            res.status(404).send({ message: 'Coupon Not Found' });
        }
    })

export default handler;
