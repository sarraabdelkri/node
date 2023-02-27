var express = require("express");
var userRouter = require("./users/controller");
var mongoose = require("mongoose");
var path = require("path");
const http = require("http");
// const views = require("views");

//var mongoConfig = require("./config/mongoConfig.json")
var app = express();
app.use(express.urlencoded({ extended: true} ));
app.use(express.json())
app.use("/api", userRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("message", "Welcome to the chat");

});
server.listen(3000, () => {console.log("server start");});

// mongoose.connect(
//     mongoConfig.mongo.uri,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// ).then(()=>{
//     console.log("DB Connected");
// }).catch(
//     err=>{
//         console.log(err);
//     }
// )
mongoose
  .connect(
   
   "mongodb+srv://sarra:sarra123@cluster0.oeaygqs.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("CONNECTED TO DB"))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", true);
// var server = http.createServer(app);
// server.listen(3000, () => {
//   console.log("server start");
// });
