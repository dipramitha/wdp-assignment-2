function displayValue() {
    var nama = document.getElementById("inputName").value;
    document.getElementById("labelName").innerHTML = nama;
    
    var role = document.getElementById("inputRole").value;
    document.getElementById("labelRole").innerHTML = role;

    var availability = document.getElementById("inputAvailability").value;
    document.getElementById("labelAvailability").innerHTML = 'Availability: ' + availability;

    var usia = document.getElementById("inputUsia").value;
    document.getElementById("labelUsia").innerHTML = 'Usia: ' + usia;

    var lokasi = document.getElementById("inputLokasi").value;
    document.getElementById("labelLokasi").innerHTML = 'Lokasi: ' + lokasi;

    var pengalaman = document.getElementById("inputPengalaman").value;
    document.getElementById("labelPengalaman").innerHTML = 'Pengalaman: ' + pengalaman;

    var email = document.getElementById("inputEmail").value;
    document.getElementById("labelEmail").innerHTML = 'Email: ' + email;
}