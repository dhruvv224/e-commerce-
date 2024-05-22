const mongoose =require('mongoose')
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect('mongodb://localhost:27017/wow-commerce1')
        console.log(`mongoDb connected to :${conn.connection.host}`)

        
    } catch (error) {
        console.log(`error while connecting to database ${error}`)

        
    }
}
module.exports=connectDB