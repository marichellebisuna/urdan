const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
title:{
  type:String,
  required:[true,'Please enter name of the product.'],
  trim:true
},
category:{
  type:String,
  required:[true,'Please choose category of the product.'],
  enum:{
    values:['bedroom', 'kitchen', 'garden']
  },
},
color:{
  type:String,
  required:[true,'Please choose color of the product.'],
  enum:{
    values:['red', 'blue', 'green']
  },
},
size:{
  type:String,
  required:[true,'Please choose size of the product.'],
  enum:{
    values:['small', 'medium', 'large']
  },
},
rating:{
  type:Number,
  default:0 
},
inStock:{
  type:Number,
  default:0 
},
sold:{
  type:Number,
  default:0 
},
checked:{
  type:Boolean,
  default:false 
},
tags:[{
  type:String,
  required:[true,'Please enter tags of the product.'],
  enum:{
    values:['furniture', 'accessories', 'equipment']
  },
 }],
sku:{
  type:String,
  required:[true,'Please enter sku of the product.'], 
},
description:{
  type:String,
  required:[true,'Please enter description of the product.'],
 },
content:{
  type:String,
  required:[true,'Please enter description of the product.'],
 },
numOfReviews:{
  type:Number,
  default:0
 }, 
price:{
  type:Number,
  required:[true,'Please enter price of the product.'], 
 },
images:[{
   public_id:{
    type:String,
    // required:true
   },
   url:{
    type:String,
    // required:true
   }
 }],
 reviews:[{
        user:{
          type:mongoose.Schema.ObjectId,
          ref:'User',
          required:false
        },
        name:{
          type:String,
          required:false
        },
        ratings:{
          type:Number,
          default:0,
          required:[true, "Please enter your rating."]
        },
        comments:{
          type:String,
          required:[true, "Please enter your comment."]
        },
}],
 user:{
   type:mongoose.Schema.ObjectId,
   ref: 'User',
   required:false
 }
}, {timestamps:true})

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema)