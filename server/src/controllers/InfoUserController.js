const InfoUser = require("../model/InfoUser");
const User = require("../model/User");

class InfoUserController {
  // doGet getAllInfo
  async getAllInfoUsers(req, res) {
    try {
      InfoUser.find({})
        .lean()
        .then((data) => {
          res.json(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // doPost addInfo
  // async addInfoUser(req, res) {
  //   try {
  //     const info = new InfoUser();
  //     const tmp = req.body;
  //     info.uid = parseInt(req.params.uid);
  //     info.image_path = req.file.filename;
  //     info.firstname = tmp.firstname;
  //     info.lastname = tmp.lastname;
  //     info.blogID = tmp.blogID;
  //     info.dob = tmp.dob;
  //     info.story = tmp.story;
  //     info.save();
  //     res.send(info);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // doPut putInfo
  async updateInfoUser(req, res) {
    const info = await InfoUser.findOne({ uid: req.params.uid });
    const tmp = req.body;
    info.image_path = req.file.filename;
    info.firstname = tmp.firstname;
    info.lastname = tmp.lastname;
    info.blogID = tmp.blogID;
    info.dob = tmp.dob;
    info.story = tmp.story;
    info.save();
    res.send(info);
  }

  // doGet getInfouserByUid
  async getInfoUserByUid(req, res) {
    const info = await InfoUser.findOne({ uid: req.params.uid });
    res.send(info);
  }

  // doGet infoSA UnLogin
  async get3InfoSA(req, res) {
    const infos = await InfoUser.find({}).sort({ follower: "-1" }).limit(3);
    res.send(infos);
  }

  // doGet infoSA UnLogin
  async get10InfoSA(req, res) {
    const infos = await InfoUser.find({}).sort({ follower: "-1" }).limit(10);
    res.send(infos);
  }

  // doGet infoSA InLogin
  async get3InfoSA1(req, res) {
    const user = await User.findOne({ _id: req.params.uid });
    const info = await (
      await InfoUser.find({}).sort({ follower: "-1" })
    ).filter((item) => {
      return item.uid !== parseInt(req.params.uid);
    });
    for (let i = 0; i < user.following.length; i++) {
      for (let j = 0; j < info.length; j++) {
        if (info[j].uid === user.following[i]) {
          info[j] = 1;
        }
      }
    }
    const tmp = [];
    const results = [];
    info
      .filter((item) => {
        return item != 1;
      })
      .map((item) => {
        tmp.push(item);
      });
    if (tmp.length < 3) {
      for (let i = 0; i < tmp.length; i++) {
        results.push(tmp[i]);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        results.push(tmp[i]);
      }
    }
    res.send(results);
  }

  // doGet infoSA InLogin
  async get10InfoSA1(req, res) {
    const user = await User.findOne({ _id: req.params.uid });
    const info = await (
      await InfoUser.find({}).sort({ follower: "-1" })
    ).filter((item) => {
      return item.uid !== parseInt(req.params.uid);
    });
    for (let i = 0; i < user.following.length; i++) {
      for (let j = 0; j < info.length; j++) {
        if (info[j].uid === user.following[i]) {
          info[j] = 1;
        }
      }
    }
    const tmp = [];
    const results = [];
    info
      .filter((item) => {
        return item !== 1;
      })
      .map((item) => {
        tmp.push(item);
      });
    if (tmp.length < 10) {
      tmp.map((item) => {
        results.push(item);
      });
    } else {
      for (let i = 0; i < 10; i++) {
        results.push(tmp[i]);
      }
    }
    res.send(results);
  }

  // doGet InfoFL Inlogin
  async get3InfoFL(req, res) {
    const user = await User.findOne({ _id: parseInt(req.params.uid) });
    const results = [];
    if (user.following.length > 3) {
      for (let i = 0; i < 3; i++) {
        const info = await InfoUser.findOne({ uid: user.following[i] });
        results.push(info);
      }
    } else {
      for (let i = 0; i < user.following.length; i++) {
        const info = await InfoUser.findOne({ uid: user.following[i] });
        results.push(info);
      }
    }
    res.send(results);
  }

  // doGet InfoFL InLogin
  async get10InfoFL(req, res) {
    const user = await User.findOne({ _id: parseInt(req.params.uid) });
    const results = [];
    for (let i = 0; i < user.following.length; i++) {
      const info = await InfoUser.findOne({ uid: user.following[i] });
      results.push(info);
    }
    res.send(results);
  }
}

module.exports = new InfoUserController();
