const bahasaProgramModel = require("../models/bahasaProgramModel");

exports.getAll = (req, res) => {
  res.json(bahasaProgramModel.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = bahasaProgramModel.getById(id);
  if (!data) return res.status(404).json({ message: "Bahasa pemrograman tidak ditemukan" });
  res.json(data);
};

exports.create = (req, res) => {
  const baru = bahasaProgramModel.create(req.body);
  res.status(201).json(baru);
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = bahasaProgramModel.update(id, req.body);
  if (!data) return res.status(404).json({ message: "Bahasa pemrograman tidak ditemukan" });
  res.json(data);
};

exports.patch = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = bahasaProgramModel.patch(id, req.body);
  if (!data) return res.status(404).json({ message: "Bahasa pemrograman tidak ditemukan" });
  res.json(data);
};

exports.remove = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = bahasaProgramModel.remove(id);
  if (!data) return res.status(404).json({ message: "Bahasa pemrograman tidak ditemukan" });
  res.json({ message: "Data bahasa pemrograman berhasil dihapus", data });
};
