const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    "name":String,
    "description":String,
    "price":Number,
    "image":String
})
module.exports=mongoose.model('data',userSchema);