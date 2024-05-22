const express=require('express')
const app=express()
const Customer=require('../Models/Customer.js')
const router=express.Router()
router.get('/',async(req,res)=>{
    try {
        const customer=await Customer.find()
        res.json(customer)
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send('server')
    }
})
router.post('/',async(req,res)=>{
    try {
        const{FirstName,LastName,Password,MobileNo}=req.body
        const exisitinCustomer=await Customer.findOne({MobileNo})
        if(exisitinCustomer)
        
            {
                res.status(404).json({message:'Email id already exists'})
            }
    
        
            const newCustomer=new Customer({FirstName,LastName,Password,MobileNo})

            await newCustomer.save()
            res.status(201).json({newCustomer:newCustomer})
        
            
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'there is an error'})
        
    }

})
module.exports=router