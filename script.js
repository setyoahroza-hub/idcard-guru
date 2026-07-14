const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch("data.json")

.then(res => res.json())

.then(data=>{

    const guru=data.find(g=>g.id===id);

    if(!guru){

        document.body.innerHTML="<h2 style='text-align:center;margin-top:50px'>Data Guru Tidak Ditemukan</h2>";

        return;

    }

    document.getElementById("foto").src=guru.foto;

    document.getElementById("nama").textContent=guru.nama+", "+guru.gelar;

    document.getElementById("nama2").textContent=guru.nama;

    document.getElementById("jabatan").textContent=guru.jabatan;

    document.getElementById("jk").textContent=guru.jk;

    document.getElementById("nik").textContent=guru.nik;

    document.getElementById("tempat").textContent=guru.tempat;

    document.getElementById("lahir").textContent=guru.lahir;

    document.getElementById("nuptk").textContent=guru.nuptk;

    document.getElementById("unit").textContent=guru.unit;

});
