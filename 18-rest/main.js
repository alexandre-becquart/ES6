/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                    REST                                    */
/* -------------------------------------------------------------------------- */


const players = ["Anissa", "Geoffrey", "Guillaume", "Max", "Maxime"]
const [capitaine, gardien, ...joueurs] = players;

console.log(capitaine, gardien, joueurs);


const course = ["Anissa", 123, 5.5, 35, 2, 18];

const [name, dossard, ...distance] = course;
console.log(name, dossard, distance);

function convertCurrencies(rate, tax, ...amounts) {
    console.log(rate);
    console.log(tax);
    console.log(amounts);
    return amounts.map(item => +(item * rate + item * tax).toFixed(2))
    // 2 chiffres après la virgule
}

/* ------------------------------- .toFixed() ------------------------------- */
/* ---------- permet de formater un nombre en notation à point-fixe --------- */
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/toFixed

console.log(convertCurrencies(1.12, 0.13, 100, 212, 235, 125456, 123));
