const fakultasModel = require("../models/fakultasModel");

exports.getAll = (req, res) => {
  res.json(fakultasModel.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = fakultasModel.getById(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.create = (req, res) => {
  const baru = fakultasModel.create(req.body);
  res.status(201).json(baru);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const data = fakultasModel.update(id, req.body);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.patch = (req, res) => {
  const id = parseInt(req.params.id);
  const data = fakultasModel.patch(id, req.body);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const data = fakultasModel.remove(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json({ message: "Data berhasil dihapus", data });
};
