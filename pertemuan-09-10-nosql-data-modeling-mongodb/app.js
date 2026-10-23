// Mini Project - Pertemuan 9-10: Koneksi MongoDB & Routing
// TODO 4: lengkapi koneksi Mongoose dan pemasangan route di bawah ini.
// Jalankan dengan: npm install && npm start (setelah menyalin .env.example menjadi .env)

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const bahasaProgramRoutes = require("./routes/bahasaProgramRoutes");
const databaseRoutes = require("./routes/databaseRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Ensiklopedia Bahasa Pemrograman",
    docs: [
      "/api/bahasa-program",
      "/api/database",
    ],
  });
});

app.use("/api/bahasa-program", bahasaProgramRoutes);
app.use("/api/database", databaseRoutes);
app.use("/bahasa-program", bahasaProgramRoutes);
app.use("/database", databaseRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint tidak ditemukan",
  });
});

app.use(errorHandler);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Terhubung ke MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Gagal terhubung ke MongoDB:", err.message);
    process.exit(1);
  }
};

startServer();
