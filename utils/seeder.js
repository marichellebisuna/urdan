const mongoose = require('mongoose')
const data = require('../data/data.json')
const Product = require('../backend/models/productsModel')

mongoose.connect('mongodb+srv://mich:mich@urdan.ytiof.mongodb.net/urdan', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
  
})
const seedProducts = async()=>{
  try {
    await Product.deleteMany()
    console.log("Products deleted.")
    await Product.insertMany(data)
    console.log("Products inserted.")
    process.exit()
  } catch (error) {
    console.log(error.message)
    process.exit()
  }


}

seedProducts()