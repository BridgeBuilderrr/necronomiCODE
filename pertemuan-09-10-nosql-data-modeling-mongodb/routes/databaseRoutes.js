const express = require("express");
const router = express.Router();
const databaseController = require("../controllers/databaseController");

router.get("/", databaseController.getAll);
router.get("/:id", databaseController.getById);
router.post("/", databaseController.create);
router.put("/:id", databaseController.update);
router.patch("/:id", databaseController.patch);
router.delete("/:id", databaseController.remove);

module.exports = router;
