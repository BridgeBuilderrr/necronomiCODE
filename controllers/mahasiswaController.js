const mahasiswaModel = require("../models/mahasiswaModel");

exports.getAll = (req, res)=>{
  res.json(mahasiswaModel.getAll());
};

exports.getById = (req, res)=>{
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.getById(id);
  if (!data) return res.status(404).json({ message: "Not Found" });
  res.json(data);
};

exports.create = (req, res)=>{
  const baru = mahasiswaModel.create(req.body);
  res.status(201).json(baru);
};

exports.update = (req, res)=>{
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.update(id, req.body);
  if (!data) return res.status(404).json({ message: "Not Found" });
  res.json(data);
};

exports.patch = (req, res)=>{
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.patch(id, req.body);
  if (!data) return res.status(404).json({ message: "Not Found" });
  res.json(data);
};

exports.remove = (req, res)=>{
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.remove(id);
  if (!data) return res.status(404).json({ message: "Not Found" });
  res.json({ message: "Data berhasil dihapus", data });
};
