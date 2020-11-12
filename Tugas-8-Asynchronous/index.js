// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], a => {
  readBooks(a, books[1], b => {
    readBooks(b, books[2], c => {
      console.log("Buku habis, tugas selesai")
    })
  })
})