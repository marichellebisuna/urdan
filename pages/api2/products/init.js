import nextConnect from 'next-connect';
import { onError } from '../../../middleware/errors';
import db from '../../../utils/db';
import City from '../../../models/City';
import Product from '../../../models/Product';
import Department from '../../../models/Department';
import Setting from '../../../models/Setting';
import dbConnect from '../../../config/dbConnect';

const handler = nextConnect({
  onError,
});
dbConnect()
handler.get(async (req, res) => {
  
  const departments = await Department.find({ isDeleted: false });
  const categories = await Product.find().distinct('category');
  const subcategories = await Product.find().distinct('subcategory');
  const brands = await Product.find().distinct('brand');
  const cities = await City.find();
  const setting = await Setting.findOne({ isActive: true });
 
  res.send({
    cities,
    departments,
    categories,
    subcategories,
    brands,
    setting: setting || {
      siteName: 'amazona',
      siteLogo: '/images/logo.png',
      theme: 'light',
    },
  });
});

export default handler;
