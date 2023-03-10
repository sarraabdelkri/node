const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user" },
});

module.exports = mongoose.model("user", UserSchema);
