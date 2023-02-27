var express = require("express");
var router = express.Router();
var userService = require("./userService");

const { auth } = require("./middleware");
router.delete("/users/delete/:_id",auth, userService.deleteUser);
router.get("/add/:name/:pwd", userService.add);
router.get("/find", userService.list);
router.put("/users/update/:_id",auth, userService.updateUser);
router.post("/signup", userService.signup);
router.post("/login", userService.login);
router.get('/chat', function (req, res ,next) {
    res.render('chat',{title:"express"});
});

module.exports = router;

