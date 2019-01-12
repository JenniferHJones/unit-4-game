// variables
var randomNumber = [];
var win = 0;
var loss = 0;
var counter = [];
var crystal1Number = [];
var crystal2Number = [];
var crystal3Number = [];
var crystal4Number = [];

// computer displays random number between 19 - 120
var numberDisplay = Math.floor((Math.random() * 102) + 19);
randomNumber.push(numberDisplay);
console.log(randomNumber[0]);

// computer assigns random number between 1 - 12 to crystal1 
var randomCrystal1 = Math.floor((Math.random() * 12) + 1);
crystal1Number.push(randomCrystal1);
console.log(crystal1Number);

// computer assigns random number between 1 - 12 to crystal2 
var randomCrystal2 = Math.floor((Math.random() * 12) + 1);
crystal2Number.push(randomCrystal2);
console.log(crystal2Number);

// computer assigns random number between 1 - 12 to crystal3 
var randomCrystal3 = Math.floor((Math.random() * 12) + 1);
crystal3Number.push(randomCrystal3);
console.log(crystal3Number);

// computer assigns random number between 1 - 12 to crystal4 
var randomCrystal4 = Math.floor((Math.random() * 12) + 1);
crystal4Number.push(randomCrystal4);
console.log(crystal4Number);

// on click function for crystal1
$("#crystal1").on("click", function () {
    document.onkeydown = function (event) {
        var selectCrystal1 = event.key;
        counter.push(selectCrystal1);
    };
    console.log(crystal1Number);
});

// function to add clicked crystal values to counter



