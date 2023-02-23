var http=require("http");
var express=require("express");
var app=express()
var server=http.createServer(app)
var userRoutes=require("./user/controller")
var mongoConfig=require("./config/mongoConfig.json")



// Middlewares
app.use(express.json());


var mongoose=require("mongoose")
app.use("/user",userRoutes)
mongoose.connect(mongoConfig.uri,{ 
    
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected")
}).catch(err=>{console.log(err)})


server.listen(3000,()=>{
console.log("server started")
})
