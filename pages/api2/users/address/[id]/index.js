import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import dbConnect from '../../../../../config/dbConnect';
import { isAuthenticatedUser } from '../../../../../middleware/auth';
import User from '../../../../../models/User';


const handler = nextConnect();

dbConnect()

handler
    .use(isAuthenticatedUser)
    .get(async (req, res) => {
       
        const user = await User.findById(req.user._id);
        const address = user.addresses.find((x) => x._id == req.query.id);
        if (address) {
            
            res.send(address);
        } else {
            
            res.status(404).send({ message: 'Address Not Found.' });
        }
    })
    .use(isAuthenticatedUser).put(async (req, res) => {
       
        const user = await User.findById(req.user._id);
        if (user) {
            const address = {
                _id: mongoose.Types.ObjectId(req.query.id),
                country: req.body.country,
                fullName: req.body.fullName,
                addressType: req.body.addressType,
                streetAddress: req.body.streetAddress,
                city: req.body.city,
                isDefault: req.body.isDefault,
                states: req.body.states,
                postalCode: req.body.postalCode,
                phoneNumber: req.body.phoneNumber,
                deliverInstructions: req.body.deliverInstructions,
                securityCode: req.body.securityCode,
            };
            user.addresses = user.addresses.map((x) =>
                x._id == req.query.id ? address : x
            );
            await user.save();
           
            res.status(200).send({
                message: 'Address Updated.',
                address,
            });
        } else {
            
            res.status(401).send({ message: 'User does not exist.' });
        }

    })
    .use(isAuthenticatedUser).delete(async (req, res) => {
        try {
           
            const user = await User.findById(req.user._id);
            user.addresses = user.addresses.filter((x) => x._id != req.query.id);
            await user.save();
           
            res.send({
                success: true,
                message: 'Successfully deleted the address',
            });
        } catch (err) {
           
            res.status(500).send({
                success: false,
                message: err.message,
            });
        }
    })

export default handler;