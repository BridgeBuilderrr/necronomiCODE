# Pertemuan 9-10 - NoSQL Data Modeling (MongoDB, Mongoose & MongoDB Atlas)

Mini-project pendamping untuk praktikum NoSQL data modeling dengan MongoDB, Mongoose, dan MongoDB Atlas.

## Deskripsi project

Project ini adalah API REST sederhana untuk mengelola data bahasa pemrograman dan kategori. Data disimpan di MongoDB Atlas dan diakses melalui Mongoose.

## Struktur project

```bash
pertemuan-09-10-nosql-data-modeling-mongodb/
├── app.js
├── .env
├── .env.example
├── package.json
├── README.md
├── PAWII-NoSQL-API.postman_collection.json
├── PAWII-NoSQL-API.postman_environment.json
├── controllers/
│   ├── bahasaProgramController.js
│   └── kategoriController.js
├── models/
│   ├── bahasaProgramModel.js
│   └── kategoriModel.js
├── routes/
│   ├── bahasaProgramRoutes.js
│   └── kategoriRoutes.js
├── middlewares/
│   └── errorHandler.js
└── node_modules/
```

## Prasyarat

- Node.js terbaru
- MongoDB Atlas account
- Database cluster MongoDB Atlas (gratis M0 juga bisa dipakai)
- Postman atau curl untuk testing API

## Langkah setup

1. Install dependency

```bash
npm install
```

2. Copy file `.env.example` menjadi `.env`

```bash
copy .env.example .env
```

3. Isi koneksi MongoDB di file `.env`

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/paw2db
PORT=3000
```

Contoh:

```env
MONGODB_URI=mongodb+srv://admin:rahasia123@cluster0.abcde.mongodb.net/paw2db
PORT=3000
```

Pastikan:
- username MongoDB Atlas benar
- password sudah sesuai
- database name yang dituju benar
- IP address kamu sudah di whitelist di MongoDB Atlas

## Menjalankan aplikasi

```bash
npm start
```

Jika berhasil, terminal akan menampilkan pesan seperti:

```bash
Terhubung ke MongoDB Atlas
Server berjalan di http://localhost:3000
```

## Cara testing MongoDB dan API

### 1) Test koneksi database

Setelah server berjalan, cek apakah aplikasi bisa terhubung ke MongoDB Atlas. Jika koneksi berhasil, server akan masuk ke mode listen dan tidak error.

Kalau muncul error seperti:

```bash
MongooseServerSelectionError
```

atau

```bash
Authentication failed
```

maka periksa beberapa hal berikut:

- password MongoDB Atlas benar
- user database sudah dibuat di Atlas
- IP address local sudah di whitelist
- cluster belum habis masa aktif / baru dibuat
- nama database di `MONGODB_URI` sesuai

### 2) Test endpoint root

Buka browser atau Postman ke URL:

```bash
http://localhost:3000/
```

Maka akan muncul response JSON seperti:

```json
{
  "message": "API Ensiklopedia Bahasa Pemrograman",
  "docs": [
    "/api/bahasa-program",
    "/api/kategori"
  ]
}
```

### 3) Test API lewat Postman

Import file collection berikut ke Postman:

- `PAWII-NoSQL-API.postman_collection.json`
- `PAWII-NoSQL-API.postman_environment.json`

Setelah di-import:

1. Pilih environment `PAWII-NoSQL-API`
2. Pastikan `base_url` sudah sesuai, misalnya `http://localhost:3000`
3. Jalankan request yang tersedia

### Endpoint yang tersedia

#### Kategori

- `GET /api/kategori` → ambil semua kategori
- `POST /api/kategori` → tambah kategori baru

Contoh body untuk `POST /api/kategori`:

```json
{
  "nama": "Web Development",
  "deskripsi": "Bahasa dan teknologi untuk membangun aplikasi web."
}
```

#### Bahasa Pemrograman

- `GET /api/bahasa-program` → ambil semua data bahasa pemrograman
- `GET /api/bahasa-program/:id` → ambil satu data berdasarkan ID
- `POST /api/bahasa-program` → tambah data baru
- `PUT /api/bahasa-program/:id` → update data
- `DELETE /api/bahasa-program/:id` → hapus data

Contoh body untuk `POST /api/bahasa-program`:

```json
{
  "nama": "JavaScript",
  "kategori": "Web Development",
  "dibuatOleh": "Brendan Eich",
  "tahunRilis": 1995,
  "level": "Pemula - Mahir",
  "deskripsi": "Bahasa pemrograman yang digunakan untuk pengembangan web modern.",
  "fiturUtama": ["Front-end", "Back-end", "Asynchronous Programming"],
  "popularitas": 98
}
```

### 4) Test dengan curl

#### Ambil semua kategori

```bash
curl http://localhost:3000/api/kategori
```

#### Tambah kategori

```bash
curl -X POST http://localhost:3000/api/kategori \
  -H "Content-Type: application/json" \
  -d '{
    "nama": "Data Science",
    "deskripsi": "Bahasa dan tools untuk analisis data."
  }'
```

#### Ambil semua bahasa pemrograman

```bash
curl http://localhost:3000/api/bahasa-program
```

#### Tambah bahasa pemrograman

```bash
curl -X POST http://localhost:3000/api/bahasa-program \
  -H "Content-Type: application/json" \
  -d '{
    "nama": "Python",
    "kategori": "Data Science",
    "dibuatOleh": "Guido van Rossum",
    "tahunRilis": 1991,
    "level": "Pemula - Mahir",
    "deskripsi": "Bahasa pemrograman serbaguna untuk scripting, AI, dan analisis data.",
    "fiturUtama": ["Sederhana", "Banyak library", "AI/ML"],
    "popularitas": 95
  }'
```

## Cek data di MongoDB Atlas

Setelah request berhasil, cek database di MongoDB Atlas:

1. Buka MongoDB Atlas
2. Masuk ke `Database` > `Collections`
3. Cari database `paw2db`
4. Lihat collection `kategoris` dan `bahasaprograms`

Jika data muncul di database, berarti koneksi MongoDB serta API berjalan dengan benar.

## Troubleshooting umum

### Error: `MONGODB_URI is not defined`

Pastikan file `.env` sudah dibuat dan berisi variabel `MONGODB_URI`.

### Error: `ECONNREFUSED` atau tidak bisa connect

Pastikan:
- MongoDB Atlas cluster aktif
- VPN / firewall tidak memblokir koneksi
- IP address sudah dibolehkan

### Error: `Validation failed`

Cek field wajib seperti:
- `nama`
- `dibuatOleh`
- `tahunRilis`
- `deskripsi`

### Error: duplicate key

Karena `nama` pada model `BahasaProgram` dan `Kategori` menggunakan `unique: true`, jadi nama harus unik.

## Kesimpulan

Cara testing MongoDB pada project ini cukup sederhana:

1. pastikan `.env` terisi dengan string koneksi Atlas
2. jalankan `npm start`
3. pastikan server berhasil terhubung ke MongoDB
4. test API dengan Postman atau curl
5. cek data di MongoDB Atlas
