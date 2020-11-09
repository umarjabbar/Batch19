console.log("===== Soal No. 1 (Membuat kalimat) =====")

// Terdapat kumpulan variable dengan data string sebagai berikut
var word = 'JavaScript '; 
var second = 'is '; 
var third = 'awesome '; 
var fourth = 'and '; 
var fifth = 'I '; 
var sixth = 'love '; 
var seventh = 'it!';
// Buatlah agar kata-kata di atas menjadi satu kalimat . Output:
// JavaScript is awesome and I love it! 
var output = word + second + third + fourth + fifth + sixth + seventh;
console.log(output);

console.log("===== Soal No.2 Mengurai kalimat (Akses karakter dalam string) =====");
// Terdapat satu kalimat seperti berikut:
var sentence = "I am going to be React Native Developer"; 

var firstWord = sentence[0] ; 
var secondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence.substr(5,5); 
var fourthWord = sentence.substr(11, 2); 
var fifthWord = sentence.substr(14,2); 
var sixthWord = sentence.substr(17,5); 
var seventhWord = sentence.substr(23,6); 
var eighthWord = sentence.substr(30,9); 

console.log('First Word: ' + firstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
// Buat menjadi Output berikut:

// First word: I 
// Second word: am 
// Third word: going 
// Fourth word: to 
// Fifth word: be 
// Sixth word: React 
// Seventh word: Native 
// Eighth word: Developer

console.log("===== Soal No. 3 Mengurai Kalimat (Substring) =====")
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 =sentence2.substring(4, 14); // do your own! 
var thirdWord2 =sentence2.substring(15, 17); // do your own! 
var fourthWord2 =sentence2.substring(18, 20); // do your own! 
var fifthWord2 =sentence2.substring(21, 25); // do your own! 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);
// Uraikan lah kalimat sentence2 di atas menjadi kata-kata penyusunnya. Output:

// First Word: wow 
// Second Word: JavaScript 
// Third Word: is 
// Fourth Word: so 
// Fifth Word: cool 

console.log("==== Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String =====");
var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence3.substring(4, 14); // do your own! 
var thirdWord3 = sentence3.substring(15, 17); // do your own! 
var fourthWord3 = sentence3.substring(18, 20); // do your own! 
var fifthWord3 = sentence3.substring(21, 25); // do your own! 

var firstWordLength = exampleFirstWord3.length;  
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;  
var fifthWordLength = fifthWord3.length; 
// // lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength); 
// Output:

// First Word: wow, with length: 3 
// Second Word: JavaScript, with length: 10 
// Third Word: is, with length: 2 
// Fourth Word: so, with length: 2 
// Fifth Word: cool, with length: 4