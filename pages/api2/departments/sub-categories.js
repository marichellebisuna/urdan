import nextConnect from 'next-connect';
import { onError } from '../../../middleware/errors';
import Department from '../../../models/Department';
import dbConnect from '../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth';

const handler = nextConnect({
  onError,
});
dbConnect()
handler
  .use(authorizeRoles, isAuthenticatedUser)
  .get(async (req, res) => {
   
    const subcategories = await Department.aggregate([
      {
        $unwind: {
          path: '$categories',
        },
      },
      {
        $unwind: {
          path: '$categories.subcategories',
        },
      },
      { $match: { isDeleted:false } },
      {
        $project: {
          name: 1,
          category: '$categories.name',
          subcategory: '$categories.subcategories.name',
           
        },
      },
    ]);
    
    res.send(subcategories);


  })

  export default handler;