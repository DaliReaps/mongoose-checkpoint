const express= require("express")
const router=express.Router()
const Person=require("../model/personschema")
router.get("/",async(req,res)=>{
    try {
        const listPerson=await Person.find()
        const x= await Person.findOne({name:"1"})
    res.status(200).json({msg:"get all persons",listPerson:listPerson,x:x})
    } catch (err) {
        res.status(500).json({msg:err})
    }
    
})
router.post("/post",async(req,res)=>{
    try {
        const newPerson= new Person(req.body)
        await newPerson.save()
    res.status(201).json({msg:"new person",newPerson:newPerson})
    } catch (err) {
        res.status(500).json({msg:err})
    }
    
})
router.delete("/delete/:id",async(req,res)=>{
    try {
        const PersonDeleted= await Person.findByIdAndDelete({_id:req.params.id})
        
    res.status(200).json({msg:"Person Deleted",PersonDeleted:PersonDeleted})
    } catch (err) {
        res.status(500).json({msg:err})
    }
    
})
router.put("/update/:id",async(req,res)=>{
    try {const y=await Person.findOne({_id:req.params.id})
    y.favoriteFoods.push("Burrito")
    
        
        const PersonUpdated= await Person.findByIdAndUpdate({_id:req.params.id},{favoriteFoods:y.favoriteFoods})
        
    res.status(200).json({msg:"Person updated",PersonUpdated:PersonUpdated,z:y.favoriteFoods})
    } catch (err) {
        res.status(500).json({msg:err})
    }
    
})
// Person.create([{name:"1",age:1},{name:"2",age:2},{name:"3",age:3}])
// Person.findByIdAndUpdate({_id:req.params.id},favoriteFoods.push("Hamburger"))
// router.delete("/delete",async(req,res)=>{
//     try {
//         const PersonDeleted= await Person.findByIdAndRemove("64b5969b736343ebeb2b8ca3")
        
//     res.status(200).json({msg:"Person Deleted",PersonDeleted:PersonDeleted})
//     } catch (err) {
//         res.status(500).json({msg:err})
    // }

// Person.findByIdAndRemove("64b596aca4dfd1c1b8f87196")
// Person.deleteMany({name:"1"}, function (err,result) {
//     if (err){
//         console.log(err)
//     }else{
//         console.log("Result :",result) 
//     }})

router.get("/burrito",async(req,res)=>{
    try {
        const listPerson=await Person.find({favoriteFoods :  "Burrito" } ).sort({name:'asc'})
        .limit(2).select( {age:false}).then()
    
        
    res.status(200).json({msg:"get all burritos",listPerson:listPerson})
    } catch (err) {
        res.status(500).json({msg:err})
    }
    
})


module.exports=router