const express=require("express");
const app=express();
const connectDB=require('./Config/Database')
const cors=require('cors');
connectDB()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 7001
app.listen(PORT,()=>console.log("server started on port ",PORT))
//  apis


app.use('/api/customers',require('./Routes/CustomerRoute'))
