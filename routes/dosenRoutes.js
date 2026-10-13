const express = require("express");
const router = express.Router();
const dosenController = require("../controllers/dosenController");

router.get("/", dosenController.getAll);
router.get("/:id", dosenController.getById);
router.post("/", dosenController.create);
router.put("/:id", dosenController.update);
router.patch("/:id", dosenController.patch);
router.delete("/:id", dosenController.remove);

module.exports = router;
