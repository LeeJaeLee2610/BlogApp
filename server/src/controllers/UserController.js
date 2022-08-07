const User = require("../model/User");
const InfoUser = require("../model/InfoUser");

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
      var user = new User();
      var info = new InfoUser();
      user.username = req.body.username;
      user.password = req.body.password;
      //   console.log(req.body);
      await user.save();
      info.image_path =
        "1659172774952-282273672_1676657146045001_5848990282228639430_n.jpg";
      info.uid = user._id;
      info.blogID = user.username;
      info.like = user.likes.length;
      info.follower = user.followers.length;
      info.following = user.following.length;
      await info.save();
      res.send(req.body);
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
  async getUserByUid(req, res) {
    try {
      const user = await User.findOne({ _id: req.params._id });
      res.send(user);
    } catch (error) {
      console.log(error);
    }
  }

  // doGet (getUserByUsername)
  async getUserByUserName(req, res) {
    try {
      const user = await User.findOne({ username: req.params.username });
      res.send(user);
    } catch (error) {
      console.log(error);
    }
  }

  // doPut UpdateFollow
  async updateFollow(req, res) {
    try {
      // uid dc lưu trên session
      const tmp1 = parseInt(req.params._id);
      const userFollowing = await User.findOne({ _id: tmp1 });
      const infoFollowing = await InfoUser.findOne({ uid: tmp1 });
      // uid dc của người được uid session follow
      const tmp2 = parseInt(req.params.uid);
      const userFollowers = await User.findOne({ _id: tmp2 });
      const infoFollowers = await InfoUser.findOne({ uid: tmp2 });
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
        userFollowing.following = await newFollowing;
        infoFollowing.following = userFollowing.following.length;
        await userFollowing.save();
        infoFollowing.save();
      } else {
        await userFollowing.following.push(tmp2);
        infoFollowing.following = userFollowing.following.length;
        await userFollowing.save();
        infoFollowing.save();
      }
      var ok2 = false;
      for (let i = 0; i < userFollowers.followers.length; i++) {
        if (userFollowers.followers[i] === tmp1) {
          ok2 = true;
          break;
        }
      }
      if (ok2 === true) {
        const newFollowers = userFollowers.followers.filter(
          (item) => item !== tmp1
        );
        userFollowers.followers = await newFollowers;
        infoFollowers.follower = userFollowers.followers.length;
        await userFollowers.save();
        infoFollowers.save();
      } else {
        await userFollowers.followers.push(tmp1);
        infoFollowers.follower = userFollowers.followers.length;
        await userFollowers.save();
        infoFollowers.save();
      }
      res.send(`${userFollowers} ${userFollowing}`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
