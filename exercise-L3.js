 // TODO: Vypiste aktualny den pomocou switch
// let den = 2;
// switch (den) {
//     case 1 :
//         console.log("Pondeli");
//         break;
//     case 2 :
//         console.log("Utery");
//         break;
//     case 3 :
//         console.log("Streda");
//         break;
//     case 4 :
//         console.log("Ctvrtek");
//         break;
//     case 5 :
//         console.log("Patek");
//         break;
//     case 6 :
//         console.log("Sobota");
//         break;
//     case 7 :
//         console.log("Nedele");
//         break;
//     default: 
//         console.log("Neznam tento den");
//         break;
//  }


//vypis 1-100
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// };

//vypis 1-100 pouze sude
// for (let i = 0 ; i <= 100; i ++) {
//     if ( (i % 2) == 0 ) {
//         console.log(i);
//     };
// };

//cvicenie: urobte kalkulacku, ktora ma funkcie +- * /

// let x = 4;
// let y = 5;

// function soucet (x , y) {
//     return x+y;
// };

// function odecet (x , y) {
//     return x-y;
// };

// function nasobeni (x , y) {
//     return x*y;
// };

// function deleni (x , y) {
//     return x/y;
// };

// console.log("Soucet danych cisel je ", soucet(4,5) );
// console.log("Rozdil danych cisel je ", odecet(5,4) );
// console.log("Soucin danych cisel je ", nasobeni(4,5) );
// console.log("Vydeleni danych cisel je ", deleni(5,4) );

/* 
1. vytvorte globalnu premennu
2. vytvorte funkciu, s 2 parametrami
3. vytvorte vnutornu funkciu, ktora vytvorti premennu X, vypise hodnoty premnenej X, 
  parametre nadradenej funckie, a globalnuy premennu
4 v nadradenej funkcii vytvorte podmienku, ktora vytvori premennu Y, a vypise hodnotu tejto premennej
5. vytvortne arrow funkciu, ktora vrati hodnotu stringu a vypise do console
*/

//1
const globalVariable = 120;

//2
function Vysoka (prvni, druha) {
    //3
    function Vnorena (){
        let X = vytvor;
        console.log(X);
        console.log(prvni);
        console.log(druha);
        console.log(globalVariable);
        return  X;
    };
    //4
    if (true) {
        Vnorena()
        const Y = "Blokova Promenna";
        console.log(Y);
    };
    //5
    const arrowFunkce = () => {
    
    };
}

