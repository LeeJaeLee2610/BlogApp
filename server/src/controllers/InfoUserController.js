const InfoUser = require("../model/InfoUser");

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
}
module.exports = new InfoUserController();
