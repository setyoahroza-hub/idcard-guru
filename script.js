const id = new URLSearchParams(window.location.search).get("id");

async function loadGuru() {
  try {
    const response = await fetch("./data.json");

    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);

    const guru = data.find(item => item.id === id);

    console.log(guru);

    if (!guru) {
      document.getElementById("nama").textContent = "Guru tidak ditemukan";
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

  } catch (err) {
    console.error(err);
    document.getElementById("nama").textContent = err.message;
  }
}

loadGuru();
