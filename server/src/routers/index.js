const userRouter = require("./user");

function router(app) {
  app.use("/users", userRouter);
}

module.exports = router;
