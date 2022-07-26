const userRouter = require("./user");
const info = require("./infoUser");

function router(app) {
  app.use("/users", userRouter);
  app.use("/info", info);
}

module.exports = router;
