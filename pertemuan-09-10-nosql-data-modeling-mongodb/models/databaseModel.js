const mongoose = require("mongoose");

const databaseSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      trim: true,
    },
    kategori: {
      type: String,
      required: true,
      trim: true,
    },
    dibuatOleh: {
      type: String,
      required: true,
      trim: true,
    },
    tahunRilis: {
      type: Number,
      required: true,
      min: 1900,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    level: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Database", databaseSchema, "database");
