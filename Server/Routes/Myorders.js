const express =require('express')
const app=express()
const Myorder=require('../Models/Myorders.js')
const router=express.Router()
router.get('/',async(req,res)=>{
    try {
        const myorder=await Myorder.find()
        res.json(myorder)
    } catch (error) {
        console.log(error)
        res.status(404).send('there is an error')
        
    }
})

module.exports=router