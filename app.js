const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const bahasaProgramRoutes = require("./routes/bahasaProgramRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API Ensiklopedia Koder",
    deskripsi: "Dokumentasi bahasa pemrograman untuk para developer.",
    endpoint: "/api/bahasa-program"
  });
});

app.use("/api/bahasa-program", bahasaProgramRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
