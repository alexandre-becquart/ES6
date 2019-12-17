/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Destructuration                              */
/* -------------------------------------------------------------------------- */

const person = {
    first: "Gilles",
    last: "Bertrand",
    country: "Belgium",
    city: "Hyon",
    twitter: "@thecrazudigital"
}

/* ------------------------- On a appris à faire ça ------------------------- */

//const first = person.first
//const last = person.last

//console.log(first);
//console.log(last);

/* -------------------------------------------------------------------------- */


/* ------------------------- AVEC la destructuration ------------------------ */

const { first, last, twitter } = person
console.log(twitter);
console.log(first);

const infos = {

    first: "Anissa",
    last: "Belkheir",
    country: "Belgium",
    city: "Mons",
    link: {
        social: {
            twitter: '@manissa',
            instagram: '@anissabelkheir'
        },
        website: "http://anissabelkheir.be"
    },

}

/* ------------------- Si plusieurs keys on la même valeur ------------------ */

const { twitter: tw, instagram: ig } = infos.link.social

// on leur donne des alias afin de les différencier

console.log(tw);
console.log(ig);

/* -------------------------------------------------------------------------- */

/* ----------------------------- Ajouter une key ---------------------------- */

const settings = {
    speed: 150
}

const { speed, width = 350 } = settings;
//on ajoute une key à l'objet settings 
// il ne prend la valeur par defaut que dans le cas de Undifined

console.log(speed, width);

/* -------------------------------------------------------------------------- */

/* --------------------------------- Exemple -------------------------------- */

const personne = {
    first: "Anissa",
    last: "Belkheir"
}

const { first: f = 'toto', last: l = 'tata', middle: m = 'ani' } = personne

console.log(f, l, m);

/* -------------------------------------------------------------------------- */


/* ---------------------- Comment destructurer un array --------------------- */

const details = ["Anissa Belkheir", 123, "anissabelkeir?be"]

// console.log(details[0]);
// console.log(details[1]);
// console.log(details[2]);

const [nom, id, site] = details;

console.log(nom, id, site);

/* -------------------------------------------------------------------------- */

/* ------------------ Destructurer une chaine de caractères ------------------ */

const data = 'Basketball,sport,90210,23'
const [sportname, category, sku, inventory] = data.split(',')

console.log(sportname, category, sku, inventory);

/* -------------------------------------------------------------------------- */


/* ----------------------- Déstructurer avec ... rest ----------------------- */

const team = ['Gilles', 'Stéphane', 'Anissa', 'Geoffrey', 'Guillaume']
const [boss, assistant, ...employees] = team;

console.log(boss);
console.log(assistant);
console.log(employees);
const [theBestOne, ...theOthers] = employees
console.log(theBestOne);
console.log(theOthers);

/* -------------------------------------------------------------------------- */


/* ------------------------- Inverser deux variables ------------------------ */

let titulaire = "The Rock";
let remplacant = "Hulk Hogan";

// let temp = titulaire;
// titulaire = remplacant;
// remplacant = temp

[titulaire, remplacant] = [remplacant, titulaire]

console.log(titulaire, remplacant);

/* -------------------------------------------------------------------------- */


/* ------------------------ Destructurer une fonction ----------------------- */

function convertCurrency(montant) {
    return {
        USD: montant * 1.12,
        GBP: montant * 0.9,
        RUS: montant * 71.65,
        JAP: montant * 121.75
    }
}

const { USD, RUS } = convertCurrency(100)

console.log(USD, RUS);

/* -------------------------------------------------------------------------- */


/* --------------- Destructuration des arguments d'une fonction -------------- */

function calculAddition({ prix = 100, tip = 0.15, tax = 0.13 } = {}) {
    return prix + prix * tip + prix * tax
}

console.log(calculAddition({ prix: 100, tax: 0.2 }));
console.log(calculAddition());

/* -------------------------------------------------------------------------- */

