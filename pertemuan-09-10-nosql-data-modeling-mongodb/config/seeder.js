require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
const BahasaProgram = require("../models/bahasaProgramModel");
const Database = require("../models/databaseModel");

const bahasaProgramSeedData = [
  {
    nama: "JavaScript",
    kategori: "Frontend & Backend",
    dibuatOleh: "Brendan Eich",
    tahunRilis: 1995,
    deskripsi: "Bahasa pemrograman serbaguna untuk web yang berjalan di browser dan server Node.js.",
    fiturUtama: ["Asynchronous programming", "Dynamic typing", "Prototype-based"],
    level: "Pemula - Mahir",
  },
  {
    nama: "Python",
    kategori: "General Purpose",
    dibuatOleh: "Guido van Rossum",
    tahunRilis: 1991,
    deskripsi: "Bahasa pemrograman yang mudah dibaca dan populer untuk scripting, data science, dan AI.",
    fiturUtama: ["Sintaks sederhana", "Ekosistem besar", "Dukungan library luas"],
    level: "Pemula - Mahir",
  },
  {
    nama: "Java",
    kategori: "Enterprise & Backend",
    dibuatOleh: "James Gosling",
    tahunRilis: 1995,
    deskripsi: "Bahasa pemrograman berorientasi objek yang banyak digunakan untuk aplikasi enterprise.",
    fiturUtama: ["OOP", "Portabilitas JVM", "Keamanan tinggi"],
    level: "Menengah - Mahir",
  },
  {
    nama: "Go",
    kategori: "Backend & Cloud",
    dibuatOleh: "Robert Griesemer, Rob Pike, Ken Thompson",
    tahunRilis: 2009,
    deskripsi: "Bahasa yang efisien untuk layanan backend, concurrent programming, dan infrastruktur cloud.",
    fiturUtama: ["Concurrency ringan", "Kompilasi cepat", "Sederhana dan scalable"],
    level: "Menengah - Mahir",
  },
  {
    nama: "Rust",
    kategori: "Systems Programming",
    dibuatOleh: "Graydon Hoare",
    tahunRilis: 2010,
    deskripsi: "Bahasa sistem yang fokus pada kecepatan, keamanan memori, dan performa tinggi.",
    fiturUtama: ["Memory safety", "Zero-cost abstraction", "Concurrency aman"],
    level: "Menengah - Mahir",
  },
];

const databaseSeedData = [
  {
    nama: "MySQL",
    kategori: "Relational Database",
    dibuatOleh: "Oracle",
    tahunRilis: 1995,
    deskripsi: "Database relasional yang populer untuk aplikasi web dan sistem transaksi.",
    tags: ["sql", "relational", "transaction"],
    level: "Pemula - Mahir",
  },
  {
    nama: "MongoDB",
    kategori: "NoSQL Database",
    dibuatOleh: "MongoDB Inc.",
    tahunRilis: 2009,
    deskripsi: "Database NoSQL berbasis dokumen yang sangat cocok untuk aplikasi modern dan scalable.",
    tags: ["nosql", "document", "json"],
    level: "Pemula - Mahir",
  },
  {
    nama: "PostgreSQL",
    kategori: "Relational Database",
    dibuatOleh: "PostgreSQL Global Development Group",
    tahunRilis: 1989,
    deskripsi: "Database relasional open source dengan fitur advanced analytics dan extensibility.",
    tags: ["sql", "postgres", "analytics"],
    level: "Menengah - Mahir",
  },
];

const seedDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI belum diatur di file .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Terhubung ke MongoDB Atlas");

    await BahasaProgram.deleteMany({});
    await Database.deleteMany({});

    const insertedBahasa = await BahasaProgram.insertMany(bahasaProgramSeedData);
    const insertedDatabase = await Database.insertMany(databaseSeedData);

    console.log(`Seeder BahasaProgram berhasil: ${insertedBahasa.length} data masuk`);
    console.log(`Seeder Database berhasil: ${insertedDatabase.length} data masuk`);
  } catch (error) {
    console.error("Gagal melakukan seeding database:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Koneksi MongoDB ditutup");
  }
};

seedDatabase();

module.exports = {
  bahasaProgramSeedData,
  databaseSeedData,
};
