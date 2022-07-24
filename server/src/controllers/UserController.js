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

  // doPut UpdateFollow
  async updateFollow(req, res) {
    try {
      // uid dc lưu trên session
      const tmp1 = 2;
      const userFollowing = await User.findOne({ _id: tmp1 });
      // uid dc của người được uid session follow
      const tmp2 = parseInt(req.params.uid);
      const userFollowers = await User.findOne({ _id: tmp2 });
      // console.log(typeof tmp);
      var ok1 = false;
      for (let i = 0; i < userFollowing.following.length; i++) {
        if (userFollowing.following[i] === tmp2) {
          ok1 = true;
          break;
        }
      }
      if (ok1 === true) {
        const newFollowing = userFollowing.following.filter(
          (item) => item !== tmp2
        );
        userFollowing.following = newFollowing;
        userFollowing.save();
      } else {
        userFollowing.following.push(tmp2);
        // console.log(user.following);
        userFollowing.save();
      }
      var ok2 = false;
      for (let i = 0; i < userFollowers.followers.length; i++) {
        if (userFollowers.followers[i] === tmp1) {
          ok2 = true;
          break;
        }
      }
      if (ok2 === true) {
        const newFollowers = userFollowers.followers.filters(
          (item) => item !== tmp1
        );
        userFollowers.followers = newFollowers;
        userFollowers.save();
      } else {
        userFollowers.followers.push(tmp1);
        // console.log(user.following);
        userFollowers.save();
      }
      res.send(`${userFollowers} ${userFollowing}`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
