const userRouter = require("./user");
const info = require("./infoUser");
const article = require("./article");

function router(app) {
  app.use("/users", userRouter);
  app.use("/info", info);
  app.use("/article", article);
}

module.exports = router;
