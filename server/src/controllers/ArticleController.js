const Article = require("../model/Article");

class ArticleController {
  async getAllArticles(req, res) {
    const article = await Article.find({}).lean();
    res.send(article);
  }

  async addArticle(req, res) {
    try {
      const article = new Article();
      const tmp = req.body;
      article.image_path = req.file.filename;
      article.save();
      res.send(tmp);
    } catch (error) {
      console.log("Error");
    }
  }
}

module.exports = new ArticleController();
