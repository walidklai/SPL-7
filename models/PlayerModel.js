const mongoose=require('mongoose')

const PlayerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    champ:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    game:{
        type:String,
        default:'League Of Legends'
    }
})

module.exports=Player=mongoose.model('player',PlayerSchema)