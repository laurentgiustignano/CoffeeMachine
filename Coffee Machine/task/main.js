// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

/*
let combienDEau = input("Write how many ml of water the coffee machine has:");

let combienDeLait = input("Write how many ml of milk the coffee machine has:");

let combienDeGrains = input("Write how many grams of coffee beans the coffee machine has:");

let combienDeCafe = input("Write how many cups of coffee you will need:");
*/

let maMachine = {
    combienDEau: 400,
    combienDeLait: 540,
    combienDeGrains: 120,
    combienDeTasse: 9,
    combienDeSous: 550,
}


function afficheStatus(uneMachine) {
    console.log("\nThe coffee machine has:");
    console.log(uneMachine.combienDEau + " ml of water");
    console.log(uneMachine.combienDeLait + " ml of milk");
    console.log(uneMachine.combienDeGrains + " g of coffee beans");
    console.log(uneMachine.combienDeTasse + " disposable cups");
    console.log("$" + uneMachine.combienDeSous + " of money\n");
}

let action

do {
    action = input("Write action (buy, fill, take, remaining, exit):\n");

    switch (action) {
        case "take":
            console.log("I gave you $" + maMachine.combienDeSous);
            maMachine.combienDeSous = 0;
            // afficheStatus(maMachine);
            break;
        case "buy":
            let boisson = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");
            switch (boisson) {
                case '1':
                    // expresso
                    if(!checkRessource(250, maMachine.combienDEau)){
                        console.log("Sorry, not enough water!");
                    }else if(!checkRessource(16, maMachine.combienDeGrains)){
                        console.log("Sorry, not enough coffee beans!");
                    }else{
                        console.log("I have enough resources, making you a coffee!");
                        maMachine.combienDeSous += 4;
                        maMachine.combienDEau -= 250;
                        maMachine.combienDeGrains -= 16;
                        maMachine.combienDeTasse--;
                    }
                    break;
                case '2':
                    // Latte
                    if(!checkRessource(350, maMachine.combienDEau)){
                        console.log("Sorry, not enough water!");
                    }else if(!checkRessource(20, maMachine.combienDeGrains)){
                        console.log("Sorry, not enough coffee beans!");
                    }else if(!checkRessource(75, maMachine.combienDeLait)){
                        console.log("Sorry, not enough milk!");
                    }else{
                        console.log("I have enough resources, making you a coffee!");
                        maMachine.combienDeSous += 7;
                        maMachine.combienDEau -= 350;
                        maMachine.combienDeLait -= 75;
                        maMachine.combienDeGrains -= 20;
                        maMachine.combienDeTasse--;
                    }
                    break;
                case '3':
                    // Cappuccino
                    if(!checkRessource(200, maMachine.combienDEau)){
                        console.log("Sorry, not enough water!");
                    }else if(!checkRessource(12, maMachine.combienDeGrains)){
                        console.log("Sorry, not enough coffee beans!");
                    }else if(!checkRessource(100, maMachine.combienDeLait)){
                        console.log("Sorry, not enough milk!");
                    }else{
                        console.log("I have enough resources, making you a coffee!");
                        maMachine.combienDeSous += 6;
                        maMachine.combienDEau -= 200;
                        maMachine.combienDeLait -= 100;
                        maMachine.combienDeGrains -= 12;
                        maMachine.combienDeTasse--;
                    }
                    break;
                case "back":
                    break;
            }


            break;
        case "fill":
            let ajoutEau = input("Write how many ml of water you want to add:");
            let ajoutLait = input("Write how many ml of milk you want to add:");
            let ajoutGrains = input("Write how many grams of coffee beans you want to add:");
            let ajoutTasse = input("Write how many disposable cups you want to add:");

            maMachine.combienDEau += Number(ajoutEau);
            maMachine.combienDeLait += Number(ajoutLait);
            maMachine.combienDeGrains += Number(ajoutGrains);
            maMachine.combienDeTasse += Number(ajoutTasse);
            break;
        case "remaining":
            afficheStatus(maMachine);
            break;

    }

} while (action !== "exit");

function checkRessource(quantite, stock){
    return stock >= quantite;
}


function checkEau(quantite) {
    return Math.floor(quantite / 200);
}

function checkLait(quantite) {
    return Math.floor(quantite / 50);
}

function checkGrain(quantite) {
    return Math.floor(quantite / 15);
}

function checkCafe(deLEau, duLait, desGrain) {
    let lesRetours = [
        checkEau(deLEau),
        checkLait(duLait),
        checkGrain(desGrain)];

    let nombreMax = Math.min(...lesRetours);

    return nombreMax;

}

/*
let cafeFaisable = checkCafe(combienDEau, combienDeLait, combienDeGrains);

if (cafeFaisable == combienDeCafe) {
    console.log("Yes, I can make that amount of coffee");
} else if (cafeFaisable < combienDeCafe) {
    console.log("No, I can make only " + cafeFaisable + " cups of coffee")
} else if (cafeFaisable > combienDeCafe) {
    const difference = cafeFaisable - combienDeCafe;
    console.log("Yes, I can make that amount of coffee (and even " + difference + " more than that)")
}*/


//console.log(checkCafe(30000, 299, 200));


/*


console.log("Write how many cups of coffee you will need:");
//console.log();
let nombreTasse = input("> ");

console.log("For " + nombreTasse + " cups of coffee you will need:");

console.log((nombreTasse * 200) + " ml of water" );
console.log((nombreTasse * 50) + " ml of milk" );
console.log((nombreTasse * 15) + " g of coffee beans" );

/*
console.log("Starting to make a coffee")
console.log("Grinding coffee beans")
console.log("Boiling water")
console.log("Mixing boiled water with crushed coffee beans")
console.log("Pouring coffee into the cup")
console.log("Pouring some milk into the cup")
console.log("Coffee is ready!")
*/