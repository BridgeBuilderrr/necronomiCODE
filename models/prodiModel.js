let prodi = [
  { id: 1, nama: "Sistem Informasi", jenjang: "S1", fakultasId: 1 },
  { id: 2, nama: "Teknik Informatika", jenjang: "S1", fakultasId: 1 },
  { id: 3, nama: "Politik", jenjang: "S1", fakultasId: 2 },
];

function getAll(){
  return prodi;
}

function getById(id){
  return prodi.find((p)=>p.id === id);
}

function create(data){
  const baru = { id: prodi.length + 1, ...data };
  prodi.push(baru);
  return baru;
}

function update(id, data){
  const index = prodi.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updated = { ...prodi[index], ...data, id };
  prodi[index] = updated;
  return updated;
}

function patch(id, data){
  const index = prodi.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updated = { ...prodi[index], ...data };
  prodi[index] = updated;
  return updated;
}

function remove(id){
  const index = prodi.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const deleted = prodi[index];
  prodi.splice(index, 1);
  return deleted;
}

module.exports = { getAll, getById, create, update, patch, remove };
