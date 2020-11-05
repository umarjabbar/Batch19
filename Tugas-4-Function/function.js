console.log("===== No. 1 =====");
// Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.

// /*
//     Tulis code function di sini
function teriak() {
  let aaaaa = "Halo Sanbers!";
  return aaaaa;
}

// */
 
console.log(teriak()) // "Halo Sanbers!" 

console.log("\n===== No. 2 ====="); 
// Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.

// /*
//     Tulis code function di sini
function kalikan(angka1, angka2) {
  let hasil = angka1 * angka2;
  return hasil;
}
// */
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48


console.log("\n===== No. 3 =====") 
// Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”

// /* 
//     Tulis kode function di sini
function introduce(nama, umur, alamat, hobi) {
  let res = `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat} dan saya punya hobby yaitu ${hobi}!`
  return res;
}
// */
 
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 