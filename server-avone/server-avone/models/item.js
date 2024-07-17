const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:Number,
    number:Number,
    gender:String
})

const itemModel=mongoose.model("Item",itemSchema)
module.exports=itemModel