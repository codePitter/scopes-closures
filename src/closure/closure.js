// const moneyBox = (coins) => {
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`)
// }
// moneyBox(5);
// moneyBox(10);

//MoneyBox: $5
//MoneyBox: $10

var moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();// acá se ejecuta la función moneyBox();

//desde acá se le pasa el valor a la función contenida dentro de moneyBox, countCoins
myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); // 20
//