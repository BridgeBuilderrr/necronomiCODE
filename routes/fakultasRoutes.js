const express = require("express");
const router = express.Router();
const fakultasController = require("../controllers/fakultasController");

router.get("/", fakultasController.getAll);
router.get("/:id", fakultasController.getById);
router.post("/", fakultasController.create);
router.put("/:id", fakultasController.update);
router.patch("/:id", fakultasController.patch);
router.delete("/:id", fakultasController.remove);

module.exports = router;
