console.log("===== Soal No. 1 (Range) ====="); 
// Buatlah sebuah function dengan nama range() yang menerima dua parameter berupa number. Function mengembalikan sebuah array yang berisi angka-angka mulai dari angka parameter pertama hingga angka pada parameter kedua. Jika parameter pertama lebih besar dibandingkan parameter kedua maka angka-angka tersusun secara menurun (descending).
// struktur fungsinya seperti berikut range(startNum, finishNum) {}
// Jika parameter pertama dan kedua tidak diisi maka function akan menghasilkan nilai -1

// // Code di sini
function range(startNum = 0, finishNum = 0){
  let arr = [];
  if (startNum === 0 || finishNum === 0) {
    return -1;
  }
  else if (startNum < finishNum) {
    while (startNum <= finishNum) {
      arr.push(startNum)
      startNum++;
    }
  } else {
    do{
      arr.push(startNum)
      startNum--;
    }
    while(startNum >= finishNum)
  }
  return arr;
}
 
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 
console.log("\n===== Soal No. 2 (Range with Step) =====")
// Pada soal kali ini kamu diminta membuat function rangeWithStep yang mirip dengan function range di soal sebelumnya namun parameternya ditambah dengan parameter ketiga yaitu angka step yang menyatakan selisih atau beda dari setiap angka pada array. Jika parameter pertama lebih besar dibandingkan parameter kedua maka angka-angka tersusun secara menurun (descending) dengan step sebesar parameter ketiga.

// struktur fungsinya seperti berikut rangeWithStep(startNum, finishNum, step) {}

// // Code di sini
 function rangeWithStep(startNum, finishNum, step) {
   let arr = [];
   if (startNum < finishNum) {
    do {
      arr.push(startNum);
      startNum += step;
    } while (startNum <= finishNum);
   } else if (startNum > finishNum) {
    while (startNum >= finishNum) {
       arr.push(startNum);
       startNum -= step;
     }
   }
   return arr;
 }


console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 
console.log("\n===== Soal No. 3 (Sum of Range) =====")
// Kali ini kamu akan menjumlahkan sebuah range (Deret) yang diperoleh dari function range di soal-soal sebelumnya. Kamu boleh menggunakan function range dan rangeWithStep pada soal sebelumnya untuk menjalankan soal ini.

// Buatlah sebuah function dengan nama sum() yang menerima tiga parameter yaitu angka awal deret, angka akhir deret, dan beda jarak (step). Function akan mengembalikan nilai jumlah (sum) dari deret angka. contohnya sum(1,10,1) akan menghasilkan nilai 55.

// ATURAN: Jika parameter ke-3 tidak diisi maka stepnya adalah 1.
function sum(startNum, finishNum, step = 1) {
  let range = rangeWithStep(startNum, finishNum, step)
  let res = 0;
  for (let num of range) {
    res += num;
  }
  return res;
}
// // Code di sini
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("\n===== Soal No. 4 (Array Multidimensi) =====")

// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun 

function dataHandling(arr) {
  for(let data of arr) {
    console.log(`Nomor ID: ${data[0]}`);
    console.log(`Nama Lengkap: ${data[1]}`);
    console.log(`TTL : ${data[2]} ${data[3]}`);
    console.log(`Hobi : ${data[4]}\n`);
  }
}
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 
dataHandling(input);


console.log("===== Soal No. 5 (Balik Kata) =====")
// Buatlah sebuah function balikKata() yang menerima sebuah parameter berupa string dan mengembalikan kebalikan dari string tersebut.

// // Code di sini
const balikKata = str => {
  let dibalik = ""
  let i = str.length - 1;
  for (; i > -1; i--) {
    dibalik += str[i]
  }
  return dibalik;
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 
// Dilarang menggunakan sintaks .split , .join , .reverse() , hanya gunakan looping!

console.log("===== Soal No. 6 (Metode Array) =====")
// //contoh input
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.
// Gunakan fungsi "splice" untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"] 
// Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
// Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
// Format tanggal pada data adalah dd-mm-YYYY
// Misal angka bulan 01, tuliskan “Januari”
// Gunakan switch case untuk menuliskan bulan di atas.
// Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
// Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
// Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

function dataHandling2 (arr) {
  arr.splice(1,1, `${arr[1]} Elsharawy`);
  arr.splice(2,1, `Provinsi ${arr[2]}`);
  arr.splice(4,1);
  arr.splice(4,0, `Pria`);
  arr.splice(5,0, 'SMA International Metro');
  console.log(arr)

  let date = arr[3].split("/")
  switch(date[1]) {
    case "01": console.log(" Januari "); break;
    case "02": console.log(" Febuari "); break;
    case "03": console.log(" Maret "); break;
    case "04": console.log(" April "); break;
    case "05": console.log(" Mei "); break;
    case "06": console.log(" Juni "); break;
    case "07": console.log(" Juli "); break;
    case "08": console.log(" Agustus "); break;
    case "09": console.log(" September "); break;
    case "10": console.log(" Oktober "); break;
    case "11": console.log(" November "); break;
    case "12": console.log(" Desember "); break;
  }
  
  date.sort(function (val1, val2) {return val2 - val1});
  console.log(date);

  console.log(date.join("-"));

  let nama = arr[1].slice(0,15);
  console.log(nama)
}

// Test-case

// Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
 
// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah
//  */ 