import mongoose from 'mongoose'

const dbConnect = () => {
if(mongoose.connection.readyState>=1){
return
}
mongoose.connect(process.env.MONGO_URL,{
  useNewURLParser:true,
  useUnifiedTopology:true
}).then(con=>console.log('MondoDb connected.'))
}
export default dbConnect
