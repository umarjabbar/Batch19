console.log("No. 1 Looping While"); 
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul ‘LOOPING PERTAMA’ dan ‘LOOPING KEDUA’.”

// Output:

console.log("LOOPING PERTAMA");
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
let i = 2
while (i <= 20) {
  console.log(i + " - I love coding");
  i += 2;
}
console.log("\nLOOPING KEDUA")
// 20 - I will become a mobile developer
// 18 - I will become a mobile developer                                                                              
// 16 - I will become a mobile developer
// 14 - I will become a mobile developer
// 12 - I will become a mobile developer
// 10 - I will become a mobile developer
// 8 - I will become a mobile developer
// 6 - I will become a mobile developer
// 4 - I will become a mobile developer
// 2 - I will become a mobile developer
let j = 20;
while (j > 0) {
  console.log(j + " - I will become a mobile developer");
  j -= 2;
}

console.log("\nNo. 2 Looping menggunakan for")
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:

// SYARAT:
// A. Jika angka ganjil maka tampilkan Santai
// B. Jika angka genap maka tampilkan Berkualitas
// C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.

// OUTPUT 
// 1 - Santai
// 2 - Berkualitas
// 3 - I Love Coding 
// 4 - Berkualitas
// 5 - Santai
// 6 - Berkualitas
// 7 - Santai
// 8 - Berkualitas
// 9 - I Love Coding
// 10 - Berkualitas
// 11 - Santai
// 12 - Berkualitas
// 13 - Santai
// 14 - Berkualitas
// 15 - I Love Coding
// 16 - Berkualitas
// 17 - Santai
// 18 - Berkualitas
// 19 - Santai
// 20 - Berkualitas
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai")
  }
}
console.log("\nNo. 3 Membuat Persegi Panjang #")
// Kamu diminta untuk menampilkan persegi dengan dimensi 8×4 dengan tanda pagar (#) dengan perulangan atau looping. Looping boleh menggunakan syntax apa pun (while, for, do while).

// Output:

// ########
// ########
// ########
// ######## 
let persegi = "";
for (let h = 0; h < 4; h++) {
  for (let w = 0; w < 8; w++) {
    persegi += "#";
  }
  console.log(persegi);
  persegi = "";
}


console.log("\nNo. 4 Membuat Tangga"); 
// Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi 7 dan alas 7. Looping boleh menggunakan syntax apa pun (while, for, do while).

// Output:

// #
// ##
// ###
// ####
// #####
// ######
// #######
let segitiga = "";
for (let t = 1; t <= 7; t++) {
  for (let a = 1; a <= t; a++) {
    segitiga += "#";
  }
  console.log(segitiga);
  segitiga = "";
}


console.log("\nNo. 5 Membuat Papan Catur");
// No. 5 Membuat Papan Catur
// Buatlah suatu looping untuk menghasilkan sebuah papan catur dengan ukuran 8 x 8 . Papan berwarna hitam memakai tanda pagar (#) sedangkan papan putih menggunakan spasi. Looping boleh menggunakan syntax apa pun (while, for, do while).
// Output:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 

let papan = "";
for (let l = 1; l <= 8; l++) {
  if (l % 2 === 0) {  
    for (let p = 1; p <= 8; p++ ) {
      if ( p % 2 === 0) { papan += " "; }
      else { papan += "#"}
    }
  } else {
    for (let p = 1; p <= 8; p++ ) {
      if ( p % 2 === 0) { papan += "#"; }
      else { papan += " "}
    }
  }
  console.log(papan)
  papan = "";
}