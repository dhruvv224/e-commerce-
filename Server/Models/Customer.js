const  mongoose=require('mongoose')
// const { required } = require('../../Client/src/Components/Helpers/Validation')
const CustomerSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true

    },
    LastName:{
        type:String,
        required:true

    },
    MobileNo:{
        type:String,
        required:true
    },
    Password:
    {
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Customer',CustomerSchema)