import nextConnect from 'next-connect';
import dbConnect from '../../../../config/dbConnect';
import { isAuthenticatedUser } from '../../../../middleware/auth';
import User from '../../../../models/User';
import data from '../../../../utils/data';

const handler = nextConnect();

dbConnect()

handler.use(isAuthenticatedUser).get(async (req, res) => {
  

  const user = await User.findById(req.user._id);
  if (user) {
    const addresses = user.addresses.filter((x) => x.isValid);
    addresses.unshift({ streetAddress: 'New Address' });
    
    res.status(201).send({
      message: 'Valid Addresses',
      addresses: addresses,
      countries: [{ name: '' }, ...data.countries],
    });
  } else {
   
    res.status(401).send({ message: 'User does not exist.' });
  }
});

export default handler;
