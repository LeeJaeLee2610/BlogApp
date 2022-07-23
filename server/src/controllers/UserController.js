const User = require("../model/User");

class UserController {
  // doGet
  getAllUser(req, res) {
    try {
      User.find({})
        .lean()
        .then((data) => {
          res.send(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  
  // doPost
  async addUser(req, res) {
    try {
      var user = new User(req.body);
      await user.save();
      res.send(req.body);
      //   console.log(req.body);
    } catch (error) {
      console.log(error);
    }
  }

  // doPut (password)
  async updatePass(req, res) {
    try {
      const u = await User.findOne({ _id: req.params._id });
      u.password = req.body.password;
      await u.save();
      res.send(u);
    } catch (error) {
      console.log(error);
    }
  }

  // doDelete
  async deleteUser(req, res) {
    try {
      await User.deleteOne({ _id: req.params._id });
      res.send(req.params._id);
    } catch (error) {
      console.log(error);
    }
  }

  // doGet (getUserById)
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params._id });
      res.send(user);
    } catch (error) {
      console.log(error);
    }
  }
  // doPut (updateFollowing)
  async updateFollowingToUser(req, res) {
    try {
      const user = await User.findOne({ _id: 3 });
      user.following.map((item) => {
        console.log(item);
      });
      res.send(req.params.uid);
    } catch (error) {}
  }
  // doPut (UpdateFollowers)
}

module.exports = new UserController();
