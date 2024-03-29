import catchAsyncErrors from '../../middleware/catchAsyncErrors'
import Product from '../models/productsModel'
import ErrorHandler from '../../utils/errorHandler'
import APIFeatures from '../../utils/apiFeatures'

// Create all products   =>   /api/products
const allProducts = catchAsyncErrors(async (req, res) => {
  const resPerPage =10;

 const productsCount = await Product.countDocuments();



  const apiFeatures = new APIFeatures(Product.find(), req.query)
      .search()
      .filter()
     

  let products = await apiFeatures.query;
  let filteredProductsCount = products.length;

  apiFeatures.pagination(resPerPage)
  products = await apiFeatures.query.clone();


  res.status(200).json({
      success: true,
      productsCount,
      resPerPage,
      filteredProductsCount,
      products,
    
  })

})



//create new product /api/products/ POST
const newProduct=catchAsyncErrors(async(req, res)=>{  
    const product = await Product.create(req.body)
    res.status(200).json({success:true, product})
})

// get single product by id /api/products/:id GET
const getProduct = catchAsyncErrors(async (req, res, next) => {

  const product = await Product.findById(req.query.id);

  if (!product) {
      return next(new ErrorHandler('Product not found with this ID', 404))
  }

  res.status(200).json({
      success: true,
      product
  })
})

  // update a product by id /api/products/:id PUT
const updateProduct=catchAsyncErrors(async(req, res, next)=>{

  let product = await Product.findById(req.query.id)

  if(!product){
    return next(new ErrorHandler("Product not found with this id.",404))
  }
  const updatedProduct = await Product.findByIdAndUpdate(req.query.id, req.body)

  res.status(200).json({
    success:true,
    updatedProduct
  })
  })

  // delete a product by id /api/products/:id PUT
const deleteProduct=catchAsyncErrors(async(req, res, next)=>{

  let product = await Product.findById(req.query.id)

  if(!product){
    return next(new ErrorHandler("Product not found with this id.",404))
  }
  await product.remove(req.query.id)

  res.status(200).json({
    success:true,
    message:"Product deleted."
  })
  })

export {
  allProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  
}
