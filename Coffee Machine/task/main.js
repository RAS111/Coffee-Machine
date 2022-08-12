// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let water = 400;
let milk = 540;
let coffee = 120;
let cup = 9;
let money = 550;

let action;

let coffeeChoice;

while(action !== "exit") {

    action = input("Write action (buy, fill, take, remaining, exit):\n");

    switch(action) {
        case "buy":
            console.log("");
            coffeeChoice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - americano back - to main menu:\n");
            if(Number(coffeeChoice) === 1){
                if(water >= 250 || coffee >= 16 || cup >= 1){
                    console.log("I have enough resources, making you a coffee!\n")
                    water = water - 250;
                    coffee = coffee - 16;
                    cup = cup - 1;
                    money = money + 4;
                } else if (water < 250){
                    console.log("Sorry, not enough water!");
                } else if (coffee < 16){
                    console.log("Sorry, not enough coffee!");
                } else {
                    console.log("Sorry, not enough cup!");
                }
            } else if(Number(coffeeChoice) === 2){
                if(water >= 350 && milk >= 75 && coffee >= 20 && cup >= 1){
                    console.log("I have enough resources, making you a coffee!\n")
                    water = water - 350;
                    milk = milk - 75;
                    coffee = coffee - 20;
                    cup = cup - 1;
                    money = money + 7;
                } else if (water < 350){
                    console.log("Sorry, not enough water!");
                } else if (milk < 75){
                    console.log("Sorry, not enough milk!");
                } else if (coffee < 20){
                    console.log("Sorry, not enough coffee!");
                } else {
                    console.log("Sorry, not enough cup!");
                }
            } else if (Number(coffeeChoice) === 3) {
                if(water >= 200 && milk >= 100 && coffee >= 12 && cup >= 1){
                    console.log("I have enough resources, making you a coffee!\n")
                    water = water - 200;
                    milk = milk - 100;
                    coffee = coffee - 12;
                    cup = cup - 1;
                    money = money + 6;
                } else if (water < 200){
                    console.log("Sorry, not enough water!");
                } else if (milk < 100){
                    console.log("Sorry, not enough milk!");
                } else if (coffee < 12){
                    console.log("Sorry, not enough coffee!");
                } else {
                    console.log("Sorry, not enough cup!");
                }
            } else if (Number(coffeeChoice) === 4){
                if(water >= 300 && coffee >= 20 && cup >= 1){
                    console.log("I have enough resources, making you a coffee!\n")
                    water = water - 300;
                    coffee = coffee - 20;
                    cup = cup - 1;
                    money = money + 8;
                } else if (water < 200){
                    console.log("Sorry, not enough water!");
                } else if (milk < 100){
                    console.log("Sorry, not enough milk!");
                } else if (coffee < 12){
                    console.log("Sorry, not enough coffee!");
                } else {
                    console.log("Sorry, not enough cup!");
                }
            }
            break;
        case "fill":
            let addWater = Number(input("Write how many ml of water you want to add:\n"));
            water += addWater;
            let addMilk = Number(input("Write how many ml of milk you want to add:\n"));
            milk += addMilk;
            let addCoffee = Number(input("Write how many grams of coffee beans you want to add:\n"));
            coffee += addCoffee;
            let addCup = Number(input("Write how many disposable coffee cups you want to add:\n"));
            cup +=addCup;
            break;
        case "take":
            console.log("");
            console.log(`I gave you ${money}`);
            money -= money;
            break;
        case "remaining":
            console.log("");
console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffee} g of coffee beans
${cup} disposable cups
${money} of money\n`);
            break;
        default:
            break;
    }
}
