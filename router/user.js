const router = require("express").Router();
const User = require("../model/user");

router.post("/add", async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add-one", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body.userId },
      { $push: { sports: req.body } },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    console.log(user);
  }
});

router.post("/remove", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body.userId },
      { $pull: { sports: { _id: req.body.id } } },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", async (req, res) => {
  try {
    const user = await User.find({ age: { $lte: 20 } })
      .sort({
        name: 1,
      })
      .select("name age email"); //1 ascending,-1 descending,lte-less than equal
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
