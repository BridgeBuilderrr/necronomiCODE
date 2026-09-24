// Mini Project - Pertemuan 3-4: RESTful API CRUD dengan Express.js
// Entitas: mahasiswa (id, nama, jurusan)
//
// TODO Mahasiswa: lengkapi setiap handler di bawah ini sesuai komentar.
// Jalankan dengan: npm install && npm start

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let mahasiswa = [
  { id: 1, nama: "Andi", jurusan: "Sistem Informasi", aktif: true },
  { id: 2, nama: "Budi", jurusan: "Informatika", aktif: false },
];

// TODO 1: GET /mahasiswa -> kirim seluruh data sebagai JSON
app.get("/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

// latihan 1
// buat fungsi untuk mengambil data mahasiswa aktif, dengan alamt : /mahasiswa/aktif
app.get("/mahasiswa/aktif", (req, res) => {
  const mahasiswaAktif = mahasiswa.filter((item) => item.aktif === true);
  res.json(mahasiswaAktif);
});

// TODO 2: GET /mahasiswa/:id -> cari data berdasarkan id,
// kirim 404 dengan { message: 'Data tidak ditemukan' } jika tidak ada
app.get("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const m = mahasiswa.find((item) => item.id === id);
  if (!m) return res.status(404).json({ message: "Data tidak ditemukan" });
  res.json(m);
});

// TODO 3: POST /mahasiswa -> ambil { nama, jurusan } dari req.body,
// buat objek baru dengan id = mahasiswa.length + 1, simpan ke array,
// kirim response dengan status 201
app.post("/mahasiswa", (req, res) => { 
  const { nama, jurusan, aktif } = req.body; //this thing
  const id = mahasiswa.length + 1;
  const baru = { id, nama, jurusan, aktif: typeof aktif === "boolean" ? aktif : true };
  mahasiswa.push(baru);
  res.status(201).json(baru);
});

// TODO 4: PUT /mahasiswa/:id -> cari index berdasarkan id,
// jika tidak ditemukan kirim 404, jika ditemukan gabungkan data lama
// dengan req.body lalu kirim data yang telah diperbarui
app.put("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = mahasiswa.findIndex((item) => item.id === id);
  if (idx === -1) return res.status(404).json({ message: "Data tidak ditemukan" });
  mahasiswa[idx] = { ...mahasiswa[idx], ...req.body };
  res.json(mahasiswa[idx]);
});

// TODO 5: DELETE /mahasiswa/:id -> cari index berdasarkan id,
// jika tidak ditemukan kirim 404, jika ditemukan hapus dari array
// dan kirim response dengan status 204
app.delete("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = mahasiswa.findIndex((item) => item.id === id);
  if (idx === -1) return res.status(404).json({ message: "Data tidak ditemukan" });
  mahasiswa.splice(idx, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
