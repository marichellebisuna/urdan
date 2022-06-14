import nextConnect from 'next-connect';
import { onError } from '../../../middleware/errors';
//import data from '../../../utils/data';
import Product from '../../../models/Product';
import City from '../../../models/City';
import { PAGE_SIZE } from '../../../utils/config';
import slugify from 'slugify';
import dbConnect from '../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth';

const handler = nextConnect({
    onError,
});

dbConnect()

handler
    .get(async (req, res) => {
       
        const pageSize = req.query.pageSize || PAGE_SIZE;
        const page = req.query.page || 1;
        const cities = await City.find();
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

        const productDocs = await Product.find({
            ...searchFilter,

        })
            .skip(pageSize * (page - 1))
            .limit(pageSize)
            .lean();

        const countProducts = await Product.countDocuments({
            ...searchFilter,

        });
        

        const products = productDocs.map(db.convertDocToObj);
        // const products = JSON.parse(JSON.stringify(productDocs))

        res.send({
            products,
            cities,
            page,
            pages: Math.ceil(countProducts / pageSize),
        });
    })
    .use(authorizeRoles, isAuthenticatedUser)
    .post(async (req, res) => {
       
        const product = new Product({
            name: 'sample name ',
            slug: slugify('sample name', { lower: true }),
            image:
                'https://res.cloudinary.com/da5nme1vl/image/upload/v1612158742/shirt2_yukdej.jpg',
            price: 0,
            buyPrice: 0,
            oldPrice: 0,
            department: 'Sample Department',
            category: 'sample Category',
            subcategory: 'sample Category',
            brand: 'sample brand',
            countInStock: 0,
            rating: 0,
            cities: [],
            numReviews: 0,
            description: 'sample description',
            discount: 0,
            featured: false,
            seller: req.user._id,
        });
        const createdProduct = await product.save();
       
        res.send({ message: 'Product created.', product: createdProduct });
    });

export default handler;
