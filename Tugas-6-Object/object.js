console.log("======= Soal No. 1 (Array to Object) =======");
// Buatlah function dengan nama arrayToObject() yang menerima sebuah parameter berupa array multidimensi. Dalam array tersebut berisi value berupa First Name, Last Name, Gender, dan Birthyear. Data di dalam array dimensi tersebut ingin kita ubah ke dalam bentuk Object dengan key bernama : firstName, lastName, gender, dan age. Untuk key age ambillah selisih tahun yang ditulis di data dengan tahun sekarang. Jika tahun tidak terdefinisi atau tahunnya lebih besar dibandingkan dengan tahun sekarang maka kembalikan nilai : “Invalid birth year”.

function arrayToObject(arr) {
  let result = {}
  let newObject = {}
  let index = 1;
  for ( let x of arr) {
    newObject.firstName = x[0];  
    newObject.lastName = x[1];  
    newObject.gander = x[2];  
    newObject.age = ageCount(x[3]);
    let key = `${index}. ${x[0]} ${x[1]}`;
    result[key]= newObject;
    newObject = {}
    index++;  
  }
  console.log(result)
}

function ageCount(age) {
  let thisYear = new Date().getFullYear();
  if ( thisYear > age) {
    return thisYear - age;
  } else {
    return "Invalid Birth Year";
  }
}
// // Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
// /*
//     1. Bruce Banner: { 
//         firstName: "Bruce",
//         lastName: "Banner",
//         gender: "male",
//         age: 45
//     }
//     2. Natasha Romanoff: { 
//         firstName: "Natasha",
//         lastName: "Romanoff",
//         gender: "female".
//         age: "Invalid Birth Year"
//     }
// */
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
// /*
//     1. Tony Stark: { 
//         firstName: "Tony",
//         lastName: "Stark",
//         gender: "male",
//         age: 40
//     }
//     2. Pepper Pots: { 
//         firstName: "Pepper",
//         lastName: "Pots",
//         gender: "female".
//         age: "Invalid Birth Year"
//     }
// */



console.log("======= Soal No. 2 (Shopping Time) =======")
// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberIddan parameter ke-2 merupakan value uang (money) yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000

let productArr = [
  addObj("Sepatu", "Stacattu", 1500000),
  addObj("Baju", "Zoro", 500000),
  addObj("Baju", "H&N", 250000),
  addObj("Sweater", "Uniklooh", 175000),
  addObj("Casing Handphone", "", 50000),
]
function addObj (category, name, price) {
  let newObject = {category: category, name: name, price: price};
  return newObject;
}
// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

// Jika memberId kosong maka tampilkan “Mohon maaf, toko X hanya berlaku untuk member saja”
// Jika uang yang dimiliki kurang dari 50000 maka tampilkan “Mohon maaf, uang tidak cukup”
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
// Contoh jika inputan memberId: ‘324193hDew2’ dan money: 700000

// maka output:

// { memberId: ‘324193hDew2’, money: 700000, listPurchased: [ ‘Baju Zoro’, ‘Sweater Uniklooh’ ], changeMoney: 25000 }

function shoppingTime(memberId = "", money = 0) {
  if (memberId === "" | money === 0){
    return "Mohon maaf, toko X hanya berlaku untuk member saja"

  } else if (money === yourMoneyNow (money)){
    return "Mohon maaf, uang tidak cukup"
  } else {

    let shoppingObj = {};
    shoppingObj.memberId = memberId;
    shoppingObj.money = money;
    shoppingObj.listPurchased = productFilter(money);
    shoppingObj.changeMoney = yourMoneyNow(money);
    return shoppingObj
  }
}
function productFilter (money) {
  let listPurchased = [];
  for (let p of productArr) {
    if ( p.price < money){
      let product = `${p.category} ${p.name}`;
      listPurchased.push(product)
    }
  }
  return listPurchased
}

function yourMoneyNow (money) {
  let yourMoney = money;
  for (let p of productArr) {
    if ( p.price < money){
      yourMoney -= p.price;
    }
  }
  return yourMoney;
}
// // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//   //{ memberId: '1820RzKrnWn08',
//   // money: 2475000,
//   // listPurchased:
//   //  [ 'Sepatu Stacattu',
//   //    'Baju Zoro',
//   //    'Baju H&N',
//   //    'Sweater Uniklooh',
//   //    'Casing Handphone' ],
//   // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja