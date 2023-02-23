var mongoose=require("mongoose")

var Schema=mongoose.Schema
var User=new Schema({
    name:String,
    pwd:Number
})
module.exports=mongoose.model("user",User)