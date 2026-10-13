let mahasiswa = [
  { id: 1, nama: "Arvin", jurusan: "Sistem Informasi" },
  { id: 2, nama: "Obama", jurusan: "Politik" },
];

function getAll(){
  return mahasiswa;
}

function getById(id){
  return mahasiswa.find((m)=>m.id === id);
}

function create(data){
  const baru = { id: mahasiswa.length + 1, ...data };
  mahasiswa.push(baru);
  return baru;
}

function update(id, data){
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return null;

  const updated = { ...mahasiswa[index], ...data, id };
  mahasiswa[index] = updated;
  return updated;
}

function patch(id, data){
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return null;

  const updated = { ...mahasiswa[index], ...data };
  mahasiswa[index] = updated;
  return updated;
}

function remove(id){
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return null;

  const deleted = mahasiswa[index];
  mahasiswa.splice(index, 1);
  return deleted;
}

module.exports = {getAll, getById, create, update, patch, remove};

