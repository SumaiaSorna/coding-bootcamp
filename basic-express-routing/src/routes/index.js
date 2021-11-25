const { Router } = require("express");
const apiRoutes = require("./apiRoutes");
const viewRoutes = require("./viewRoutes");

const router = Router();

router.use("./api", apiRoutes);

router.use("./view", viewRoutes);

module.exports = router;
