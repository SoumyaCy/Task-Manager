const express= require("express");
const { getAllTasks, createTask, getSingleTask, editTask, deleteTask } = require("../controller/tasks");
const router=express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(editTask).delete(deleteTask);

module.exports=router;