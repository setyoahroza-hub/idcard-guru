const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch("data.json")

.then(res=>res.json())

.then(data=>{

    const guru = data.find(g=>g.id===id);

    if(!guru){

        document.body.innerHTML="<h2>Data guru tidak ditemukan</h2>";

        return;

    }

    document.getElementById("foto").src=guru.foto;

    document.getElementById("nama").textContent=guru.nama;

    document.getElementById("jk").textContent=guru.jk;

    document.getElementById("nik").textContent=guru.nik;

    document.getElementById("tempat").textContent=guru.tempat;

    document.getElementById("lahir").textContent=guru.lahir;

    document.getElementById("nuptk").textContent=guru.nuptk;

    document.getElementById("unit").textContent=guru.unit;

});
