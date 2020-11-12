console.log("===== 1. Animal Class =====");

class Animal {
  constructor(name) {
    this._name = name
    this._legs = 4
    this._cold_blooded = false
  }
}

var sheep = new Animal("shaun");

console.log(sheep._name) // "shaun"
console.log(sheep._legs) // 4
console.log(sheep._cold_blooded) // false


// Code class Ape dan class Frog di sini
class Ape extends Animal {
  constructor(name){
    super(name);
    this._legs = 2; 
  }

  yell() {
    console.log("Auoo")
  }
} 

class Frog extends Animal {
  constructor(name){
    super(name);
    this._cold_blooded = true; 
  }

  jump () {
    console.log("hop hop")
  }
}


var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
// console.log(kodok._legs) // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
// console.log(kodok._cold_blooded) // "Auooo"


console.log("===== 2. Function to Class =====")
// function Clock({ template }) {
  
//   var timer;

//   function render() {
//     var date = new Date();

//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     var mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     var secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     var output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

class Clock {
  constructor({template}) {
    this._template = template;
    this._timer = null;
  }

  render(){
    let date = new Date();

    let hours = date.getHours();
    if ( hours < 10 ) hours = "0" + hours;

    let mins = date.getMinutes();
    if ( mins < 10 ) mins = "0" + mins;

    let secs = date.getSeconds();
    if( secs < 10 ) secs = "0" + secs;

    let output = this._template
    .replace("h", hours)
    .replace("m", mins)
    .replace("s", secs);

    console.log(output)
  }

  stop() {
    clearInterval(timer);
  }

  start() {
    this.render();
    this._timer = setInterval(this.render.bind(this), 1000);
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  