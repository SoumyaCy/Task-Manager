const mongoose= require("mongoose");

const TasksSchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    }
    ,completed:{
        type:Boolean,
        default:false,
    }
});

module.exports=mongoose.model(
    "Tasks", TasksSchema
)