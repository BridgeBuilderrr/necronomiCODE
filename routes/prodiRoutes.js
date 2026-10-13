const express = require("express");
const router = express.Router();
const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAll);
router.get("/:id", prodiController.getById);
router.post("/", prodiController.create);
router.put("/:id", prodiController.update);
router.patch("/:id", prodiController.patch);
router.delete("/:id", prodiController.remove);

module.exports = router;
