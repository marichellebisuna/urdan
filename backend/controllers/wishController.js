import Wish from '../models/wishModel';
import {} from '../../middleware/auth'
import catchAsyncErrors from '../../middleware/catchAsyncErrors'

const getWishlist = catchAsyncErrors(async (req, res) => {    
    const wishItems = await Wish.find({})
    res.status(200).json({wishItems});
  })

  const deleteWishlist = catchAsyncErrors(async (req, res) => {
    const wish = await Wish.findOne({ _id: req.params.id });
    if (wish) {
      const deletedWish = await wish.remove();
      res.send(deletedWish);
    } else {
      res.status(404).send('Wish Not Found.');
    }
  })


  const addWishlist = catchAsyncErrors(async (req, res) => {
    if (!req.body.wishItems.length) {
      res.status(400).send({ message: 'Wish is empty' });
    }
   
    const newWish = new Wish({
      wishItems: req.body.wishItems,
      user: req.user._id,     
      itemsPrice: req.body.itemsPrice,      
    });
    const newWishCreated = await newWish.save();
    res
      .status(201)
      .send({ message: 'New Wish Created', data: newWishCreated });
  })

export {
  getWishlist,
  deleteWishlist,
  addWishlist
}


