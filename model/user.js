const mongoose = require("mongoose");

const User = mongoose.model("users", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    //match: /.+\@.+\..+/
  },
  sports: [
    new mongoose.Schema({
      name: String,
      coach: String,
    }),
  ],
});

module.exports = User;
