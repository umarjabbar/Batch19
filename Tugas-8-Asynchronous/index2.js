var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise  
const bacaBuku = () => {
  readBooksPromise(10000, books[0])
    .then(a => {
      readBooksPromise(a, books[1])
        .then(b => {
          readBooksPromise(b, books[2])
            .then(c => {
              console.log("Buku habis, tugas selesai.");
            })
            .catch(error => { console.log(error.message) });
        })
        .catch(error => { console.log(error.message)})
      })
      .catch(error => { console.log(error.message)}) 
}

bacaBuku()