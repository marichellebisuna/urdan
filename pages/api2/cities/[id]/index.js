import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors';
import City from '../../../../models/City';
import dbConnect from '../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
  onError,
});
dbConnect()
handler
  .use(authorizeRoles, isAuthenticatedUser)
  .get(async (req, res) => {
    
    const city = await City.findById(req.query.id);
  
    res.send(city);
  })
  .use(authorizeRoles, isAuthenticatedUser)
  .put(async (req, res) => {
   
    const city = await City.findById(req.query.id);
    if (city) {
      city.name = req.body.name;
      const updatedCity = await city.save();
      
      res.send({
        message: 'City Updated By Admin',
        city: updatedCity,
      });
    } else {
     
      res.status(500).send('City does not exist.');
    }
  })
  .use(authorizeRoles, isAuthenticatedUser)
  .delete(async (req, res) => {
   
    const city = await City.findById(req.query.id);
    if (city) {
      const deletedCity = await city.remove();
     
      res.send(deletedCity);
    } else {
     
      res.status(404).send('City Not Found.');
    }
  });

export default handler;
