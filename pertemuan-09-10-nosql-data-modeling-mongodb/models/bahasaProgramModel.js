const mongoose = require("mongoose");

const bahasaProgramSchema = new mongoose.Schema(
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
    fiturUtama: {
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

module.exports = mongoose.model("BahasaProgram", bahasaProgramSchema, "bahasa_programs");

