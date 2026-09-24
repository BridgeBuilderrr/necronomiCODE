// Mini Project - Pertemuan 3-4: RESTful API CRUD dengan Express.js
// Entitas: bahasa pemrograman (id, nama, kategori, populer)
//
// TODO Bahasa Pemrograman: lengkapi setiap handler di bawah ini sesuai komentar.
// Jalankan dengan: npm install && npm start

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let bahasaPemrograman = [
  { id: 1, nama: "Python", kategori: "Scripting & Data Science", populer: true },
  { id: 2, nama: "Java", kategori: "OOP & Enterprise", populer: true },
  { id: 3, nama: "JavaScript", kategori: "Web & Frontend", populer: true },
];

app.get("/bahasa", (req, res) => {
  res.json(bahasaPemrograman);
});

app.get("/bahasa/populer", (req, res) => {
  const bahasaPopuler = bahasaPemrograman.filter((item) => item.populer === true);
  res.json(bahasaPopuler);
});

app.get("/bahasa/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const bahasa = bahasaPemrograman.find((item) => item.id === id);
  if (!bahasa) return res.status(404).json({ message: "Data tidak ditemukan" });
  res.json(bahasa);
});

app.post("/bahasa", (req, res) => {
  const { nama, kategori, populer } = req.body;
  const id = bahasaPemrograman.length + 1;
  const baru = {
    id,
    nama,
    kategori,
    populer: typeof populer === "boolean" ? populer : true,
  };

  bahasaPemrograman.push(baru);
  res.status(201).json(baru);
});

app.put("/bahasa/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = bahasaPemrograman.findIndex((item) => item.id === id);
  if (idx === -1) return res.status(404).json({ message: "Data tidak ditemukan" });
  bahasaPemrograman[idx] = { ...bahasaPemrograman[idx], ...req.body };
  res.json(bahasaPemrograman[idx]);
});

app.delete("/bahasa/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = bahasaPemrograman.findIndex((item) => item.id === id);
  if (idx === -1) return res.status(404).json({ message: "Data tidak ditemukan" });
  bahasaPemrograman.splice(idx, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
