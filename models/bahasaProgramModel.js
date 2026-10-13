let bahasaProgram = [
  {
    id: 1,
    nama: "JavaScript",
    kategori: "Frontend & Backend",
    dibuatOleh: "Brendan Eich",
    tahunRilis: 1995,
    deskripsi: "Bahasa pemrograman serbaguna untuk web yang berjalan di browser dan server Node.js.",
    fiturUtama: ["Asynchronous programming", "Dynamic typing", "Prototype-based"],
    level: "Pemula - Mahir"
  },
  {
    id: 2,
    nama: "Python",
    kategori: "General Purpose",
    dibuatOleh: "Guido van Rossum",
    tahunRilis: 1991,
    deskripsi: "Bahasa pemrograman yang mudah dibaca dan populer untuk scripting, data science, dan AI.",
    fiturUtama: ["Sintaks sederhana", "Ekosistem besar", "Dukungan library luas"],
    level: "Pemula - Mahir"
  },
  {
    id: 3,
    nama: "Java",
    kategori: "Enterprise & Backend",
    dibuatOleh: "James Gosling",
    tahunRilis: 1995,
    deskripsi: "Bahasa pemrograman berorientasi objek yang banyak digunakan untuk aplikasi enterprise.",
    fiturUtama: ["OOP", "Portabilitas JVM", "Keamanan tinggi"],
    level: "Menengah - Mahir"
  }
];

function getAll() {
  return bahasaProgram;
}

function getById(id) {
  return bahasaProgram.find((item) => item.id === id);
}

function create(data) {
  const baru = { id: bahasaProgram.length + 1, ...data };
  bahasaProgram.push(baru);
  return baru;
}

function update(id, data) {
  const index = bahasaProgram.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updated = { ...bahasaProgram[index], ...data, id };
  bahasaProgram[index] = updated;
  return updated;
}

function patch(id, data) {
  const index = bahasaProgram.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updated = { ...bahasaProgram[index], ...data };
  bahasaProgram[index] = updated;
  return updated;
}

function remove(id) {
  const index = bahasaProgram.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const deleted = bahasaProgram[index];
  bahasaProgram.splice(index, 1);
  return deleted;
}

module.exports = { getAll, getById, create, update, patch, remove };

