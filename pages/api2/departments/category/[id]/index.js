import nextConnect from 'next-connect';
import { onError } from '../../../../../middleware/errors';
import Department from '../../../../../models/Department';
import mongoose from 'mongoose';
import dbConnect from '../../../../../config/dbConnect';


const handler = nextConnect({
  onError,
});
dbConnect()
handler
  .get(async (req, res) => {
   
    const categories = await Department.aggregate([
      {
        $match: { 'categories._id': mongoose.Types.ObjectId(req.query.id) },
      },
      {
        $project: {
          name: 1,
          category: '$categories',
          subcategory: '$categories.subcategories',
        },
      },
    ]);
    
    res.send(categories);

  })


  export default handler;