const mongoose =require('mongoose')
const MyorderSchema=new mongoose.Schema({
   Brand:{
    type:String,
    required:true
   },
   Size:{
    type:String,
    required:true
   }, 
   color:{
    type:String,
    required:true
   },
   discountPercentage:{
    type:Number,
    required:true
   },
   discountPrice:{
    type:Number,
    required:true
   },
   id:{
    type:Number,
    required:true
   }, img:{
    type:String,
    required:true
   }, isFreeShipping:{
    type:Boolean,
    required:true
   }, isHot:{
    type:Boolean,
    required:true
   }, isNew:{
    type:Boolean,
    required:true
   },
   link:{
    type:String,
    required:true
   }
   ,
   name:
   {
    type:String,
    required:true
   },
   originprice:{
    type:Number,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   star:{
    type:Number,
    required:true
   }


})
module.exports=mongoose.model('Myorder',MyorderSchema)