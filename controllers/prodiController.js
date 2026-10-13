const prodiModel = require("../models/prodiModel");

exports.getAll = (req, res) => {
  res.json(prodiModel.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = prodiModel.getById(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.create = (req, res) => {
  const baru = prodiModel.create(req.body);
  res.status(201).json(baru);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const data = prodiModel.update(id, req.body);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.patch = (req, res) => {
  const id = parseInt(req.params.id);
  const data = prodiModel.patch(id, req.body);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const data = prodiModel.remove(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json({ message: "Data berhasil dihapus", data });
};
