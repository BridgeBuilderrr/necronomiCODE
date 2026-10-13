const dosenModel = require("../models/dosenModel");

exports.getAll = (req, res) => {
  res.json(dosenModel.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = dosenModel.getById(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.create = (req, res) => {
  const baru = dosenModel.create(req.body);
  res.status(201).json(baru);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const data = dosenModel.update(id, req.body);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.patch = (req, res) => {
  const id = parseInt(req.params.id);
  const data = dosenModel.patch(id, req.body);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id);
  const data = dosenModel.remove(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json({ message: "Data berhasil dihapus", data });
};
