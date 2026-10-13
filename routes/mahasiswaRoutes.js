const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

router.get("/", mahasiswaController.getAll);
router.get("/:id", mahasiswaController.getById);
router.post("/", mahasiswaController.create);
router.put("/:id", mahasiswaController.update);
router.patch("/:id", mahasiswaController.patch);
router.delete("/:id", mahasiswaController.remove);

module.exports = router;
