import mongoose from 'mongoose';

const wishSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
    wishItems: [
      {
        name: { type: String, required: true },       
        image: { type: String, required: true },
        price: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],
   
  },
  {
    timestamps: true,
  }
);

const Wish = mongoose.model('Wish', wishSchema);
export default Wish;
