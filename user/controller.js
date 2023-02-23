const express = require("express");
const router = express.Router();
const userSchema = require("../Validation/userValidation")
const validation = require("../Middleware/Middleware")
var userService=require('./userService')
router.get("/add/:name/:pwd",userService.add)
router.get("/list",userService.list)
router.post("/",validation(userSchema),userService.addUser)
router.delete("/:id",userService.deleteUser)
router.put("/update/:id",userService.update)
router.get("/",(req,res,next)=>{
    res.json("helllo")
})

module.exports=router