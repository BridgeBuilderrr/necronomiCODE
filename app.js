const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const fakultasRoutes = require("./routes/fakultasRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const dosenRoutes = require("./routes/dosenRoutes");

app.use(express.json());

app.use("/mahasiswa", mahasiswaRoutes);
app.use("/fakultas", fakultasRoutes);
app.use("/prodi", prodiRoutes);
app.use("/dosen", dosenRoutes);

app.listen(PORT, ()=>{
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
