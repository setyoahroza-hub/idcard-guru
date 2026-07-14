const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("ID dari URL:", id);

fetch("data.json")
  .then(res => {
    console.log("Status fetch:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Data JSON:", data);

    const guru = data.find(g => g.id === id);

    console.log("Guru ditemukan:", guru);

    if (!guru) {
      document.body.innerHTML = "<h2>Data guru tidak ditemukan</h2>";
      return;
    }

    document.getElementById("foto").src = guru.foto;
    document.getElementById("nama").textContent = guru.nama;
    document.getElementById("jk").textContent = guru.jk;
    document.getElementById("nik").textContent = guru.nik;
    document.getElementById("tempat").textContent = guru.tempat;
    document.getElementById("lahir").textContent = guru.lahir;
    document.getElementById("nuptk").textContent = guru.nuptk;
    document.getElementById("unit").textContent = guru.unit;
  })
  .catch(err => {
    console.error(err);
  });
