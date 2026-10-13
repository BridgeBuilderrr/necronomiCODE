let fakultas = [
  { id: 1, nama: "Fakultas Ilmu Komputer dan Rekayasa" },
  { id: 2, nama: "Fakultas Ekonomi" },
];

function getAll(){
  return fakultas;
}

function getById(id){
  return fakultas.find((f) => f.id === id);
}

function create(data){
  const baru = { id: fakultas.length + 1, ...data };
  fakultas.push(baru);
  return baru;
}

function update(id, data){
  const index = fakultas.findIndex((f) => f.id === id);
  if (index === -1) return null;

  const updated = { ...fakultas[index], ...data, id };
  fakultas[index] = updated;
  return updated;
}

function patch(id, data){
  const index = fakultas.findIndex((f) => f.id === id);
  if (index === -1) return null;

  const updated = { ...fakultas[index], ...data };
  fakultas[index] = updated;
  return updated;
}

function remove(id){
  const index = fakultas.findIndex((f) => f.id === id);
  if (index === -1) return null;

  const deleted = fakultas[index];
  fakultas.splice(index, 1);
  return deleted;
}

module.exports = { getAll, getById, create, update, patch, remove };
