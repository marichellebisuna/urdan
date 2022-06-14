import nextConnect from 'next-connect';
import { onError } from '../../../middleware/errors';
import Coupon from '../../../models/Coupon';
import { authorizeRoles, isAuthenticatedUser } from '../../../utils/auth';
import { PAGE_SIZE } from '../../../utils/config';
import dbConnect from '../../../config/dbConnect';


const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(authorizeRoles, isAuthenticatedUser)
    .get(async (req, res) => {
        
        const page = Number(req.query.page) || 1;
        const searchQuery = req.query.query || 'all';
        const searchFilter =
            searchQuery !== 'all'
                ? {
                    name: {
                        $regex: searchQuery,
                        $options: 'i',
                    },
                }
                : {};
        const coupons = await Coupon.find({ ...searchFilter })
            .skip((page - 1) * PAGE_SIZE)
            .limit(PAGE_SIZE)
            .sort({ createdAt: -1 });
        const records = await Coupon.count({ ...searchFilter });
       
        res.send({ coupons, pages: Math.ceil(records / PAGE_SIZE) })
    })
    .use(authorizeRoles, isAuthenticatedUser)
    .post(async (req, res) => {
       
        const coupon = new Coupon({
            name: Math.random().toString(36).replace('0.', ''),
            expiry: Date.now(),
            discount: 10,
        });
        const createdCoupon = await coupon.save();
       
        res.send({ message: 'Coupon created successfully', coupon: createdCoupon });
    })

export default handler;
