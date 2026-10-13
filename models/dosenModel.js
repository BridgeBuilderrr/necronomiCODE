let dosen = [
  { id: 1, nama: "Nur Rachmat", nip: "123123", prodiId: 2 },
  { id: 2, nama: "Rachmadi", nip: "234234", prodiId: 1 },
];

function getAll() {
  return dosen;
}

function getById(id) {
  return dosen.find((d)=>d.id === id);
}

function create(data) {
  const baru = { id: dosen.length + 1, ...data };
  dosen.push(baru);
  return baru;
}

function update(id, data) {
  const index = dosen.findIndex((d) => d.id === id);
  if (index === -1) return null;

  const updated = { ...dosen[index], ...data, id };
  dosen[index] = updated;
  return updated;
}

function patch(id, data) {
  const index = dosen.findIndex((d) => d.id === id);
  if (index === -1) return null;

  const updated = { ...dosen[index], ...data };
  dosen[index] = updated;
  return updated;
}

function remove(id) {
  const index = dosen.findIndex((d) => d.id === id);
  if (index === -1) return null;

  const deleted = dosen[index];
  dosen.splice(index, 1);
  return deleted;
}

module.exports = { getAll, getById, create, update, patch, remove };
