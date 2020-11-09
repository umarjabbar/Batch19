console.log("===== Soal 1 - if else if =====");
var nama = "Junaedi";
var peran = "Werewolf";

// Output untuk Input nama = '' dan peran = ''
if (nama === "" && peran === "" || nama === "") {
  console.log("Nama harus diisi!");
} else if (nama === "John" && peran === "") {
  console.log("Halo John, Pilih peranmu untuk memulai game!");
} else if (nama === "Jane" && peran === "Penyihir") {
  console.log("Selamat datang di Dunia Werewolf, Jane");
  console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");
} else if (nama === 'Jenita' && peran === 'Guard') {
  console.log("Selamat datang di Dunia Werewolf, Jenita");
  console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.");
} else if (nama === "Junaedi" && peran === "Werewolf") {
  console.log("Selamat datang di Dunia Werewolf, Junaedi");
  console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" );
}

console.log("===== Soal 2 - Switch Case")
var tanggal = 32; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12 // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2020; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if ( tanggal <= 31 && bulan <= 12 && tahun > 1901 && tahun < 2201) {
  switch(bulan) {
    case 1: namaBulan = " Januari "; break;
    case 2: namaBulan = " Febuari "; break;
    case 3: namaBulan = " Maret "; break;
    case 4: namaBulan = " April "; break;
    case 5: namaBulan = " Mei "; break;
    case 6: namaBulan = " Juni "; break;
    case 7: namaBulan = " Juli "; break;
    case 8: namaBulan = " Agustus "; break;
    case 9: namaBulan = " September "; break;
    case 10: namaBulan = " Oktober "; break;
    case 11: namaBulan = " November "; break;
    case 12: namaBulan = " Desember "; break;
  }
  console.log(tanggal + namaBulan + tahun);
} else {
  console.log("Tanggal yang dimasukan salah")
}

