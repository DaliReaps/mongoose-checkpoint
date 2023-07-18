const mongoose=require("mongoose")
const personSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
      } ,
    age:Number,
    favoriteFoods:[String]

})

const Person=mongoose.model("person",personSchema)

module.exports =Person



