const mongoose = require("mongoose");
const Database = require("../models/databaseModel");

const MAX_LIMIT = 50;

const createError = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

const parsePositiveInt = (value, fallback) => {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.max(parsed, 1);
};

const parseLimit = (value) => {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return 10;
  return Math.min(Math.max(parsed, 1), MAX_LIMIT);
};

const buildFilter = (query) => {
  const filter = {};

  if (query.nama) {
    filter.nama = { $regex: query.nama, $options: "i" };
  }

  if (query.kategori) {
    filter.kategori = { $regex: query.kategori, $options: "i" };
  }

  if (query.dibuatOleh) {
    filter.dibuatOleh = { $regex: query.dibuatOleh, $options: "i" };
  }

  if (query.level) {
    filter.level = { $regex: query.level, $options: "i" };
  }

  if (query.tahunRilis) {
    const year = Number.parseInt(query.tahunRilis, 10);
    if (!Number.isNaN(year)) {
      filter.tahunRilis = year;
    }
  }

  return filter;
};

const buildSort = (query) => {
  const sort = {};

  if (query.sort) {
    const fields = String(query.sort).split(",");

    fields.forEach((field) => {
      const trimmed = field.trim();
      if (!trimmed) return;

      const [key, direction = "asc"] = trimmed.split(":");
      if (!key) return;

      sort[key.trim()] = direction.toLowerCase() === "desc" ? -1 : 1;
    });

    return sort;
  }

  if (query.sortBy) {
    const direction = String(query.order || "asc").toLowerCase() === "desc" ? -1 : 1;
    sort[query.sortBy] = direction;
  }

  return sort;
};

exports.getAll = async (req, res, next) => {
  try {
    const page = parsePositiveInt(req.query.page, 1);
    const limit = parseLimit(req.query.limit);
    const filter = buildFilter(req.query);
    const sort = buildSort(req.query);
    const skip = (page - 1) * limit;

    const query = Database.find(filter).sort(sort).skip(skip).limit(limit);

    if (req.query.fields) {
      const fields = String(req.query.fields)
        .split(",")
        .map((field) => field.trim())
        .filter(Boolean)
        .join(" ");

      if (fields) {
        query.select(fields);
      }
    }

    const [data, totalData] = await Promise.all([
      query.exec(),
      Database.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalData / limit);

    res.json({
      page,
      limit,
      totalData,
      totalPages,
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "ID tidak valid"));
    }

    const data = await Database.findById(id);

    if (!data) {
      return next(createError(404, "Data database tidak ditemukan"));
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    if (!req.body || typeof req.body !== "object") {
      return next(createError(400, "Body request tidak valid"));
    }

    const baru = await Database.create(req.body);
    res.status(201).json(baru);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "ID tidak valid"));
    }

    const updated = await Database.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return next(createError(404, "Data database tidak ditemukan"));
    }

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "ID tidak valid"));
    }

    const updated = await Database.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return next(createError(404, "Data database tidak ditemukan"));
    }

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "ID tidak valid"));
    }

    const deleted = await Database.findByIdAndDelete(id);

    if (!deleted) {
      return next(createError(404, "Data database tidak ditemukan"));
    }

    res.json({ message: "Data database berhasil dihapus", data: deleted });
  } catch (err) {
    next(err);
  }
};
