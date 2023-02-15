const { getModulesPluginNames } = require("@babel/preset-env");

// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(names, event) {
    const messages = [];
     for (let i = 0; i < names.length; i++) {
       const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       messages.push(message);
     }
     return messages;
   }
   



   function countDown() {
    let number = 10
    while (number >= 0) {
        console.log(number--)
    }
   }