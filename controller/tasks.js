const { customError } = require("../errors/error-class");
const asyncWrapper = require("../middleware/async");
const Tasks = require("../model/tasks");

const getAllTasks= asyncWrapper( async (req,res)=>{
    
        const task=await Tasks.find();
        res.status(200).send({task});
    

})

const createTask=asyncWrapper(async (req,res)=>{
    
        const task= await Tasks.create(req.body)
        res.status(201).json({ task });

    
    
})
const getSingleTask=asyncWrapper(async (req,res,next)=>{
    
        const {id:taskID}=req.params;
        const task = await Tasks.findOne({_id:taskID})
        if(!task){
           return next (customError("task not found with this id",404)) 
        //     return res.status(404).json({message:"task not found"})
        }
        return res.status(200).json(task);
    
    
    
})
const editTask=asyncWrapper(async(req,res,next)=>{
    
        const {id:taskID}=req.params;
        const task = await Tasks.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return next (customError("task not found with this id",404))
            // res.status(404).json({message:"task not found"})
        }
        return res.status(200).json(task);
    
    
})
const deleteTask=asyncWrapper(async (req,res,next)=>{
    
        const {id:taskID}=req.params;
        const task = await Tasks.findOneAndDelete({_id:taskID})
        if(!task){
            return next (customError("task not found with this id",404))
            // res.status(404).json({message:"task not found"})
        }
        return res.status(200).json(task);

    
})

module.exports={
    getAllTasks,
    createTask,
    getSingleTask,
    editTask,
    deleteTask
};