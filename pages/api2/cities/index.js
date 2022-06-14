import nextConnect from 'next-connect';
import { onError } from '../../../middleware/errors';
import City from '../../../models/City';
import dbConnect from '../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth';

const handler = nextConnect({
  onError,
});
dbConnect()
handler
  .use(authorizeRoles, isAuthenticatedUser)
  .get(async (req, res) => {
    
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
    const cities = await City.find({ ...searchFilter });
    
    res.send(cities);
  })
  .use(authorizeRoles, isAuthenticatedUsern)
  .post(async (req, res) => {
   
    const city = new City({
      name: 'Sample City',
    });
    const createdCity = await city.save();
    if (createdCity) {
     
      res.status(201).send({
        city: createdCity,
        message: 'City created successfuly',
      });
    } else {
      
      res.status(500).send({ message: 'Error in creating City' });
    }
  });

export default handler;
