/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   For of                                   */
/* -------------------------------------------------------------------------- */

const noms = ["Anissa", "Gilles", "Stéphane", "Sébastien"]

/* ------------------------------- Avec un For ------------------------------ */

// for (let i = 0; i < noms.length; i++) {
//     console.log(noms[i]);

// }

/* -------------------------------------------------------------------------- */

/* ------------------------------- Avec un map ------------------------------ */

// const trololo = noms.map(nom => nom.toUpperCase());
// console.log(trololo);

/* -------------------------------------------------------------------------- */


/* ------------------------------ Avec ForEach ------------------------------ */

// noms.forEach(nom => {
//     if (nom == "Stéphane") {

//         console.log(nom);
//         //break    // ressemble plus au FOR que le MAP // pas de break possible
//     }
// }) 

/* -------------------------------------------------------------------------- */

/* --------------------------------- For of --------------------------------- */
/* ---------------------------- pour les tableau ---------------------------- */

// for (let nom of noms) {
//     console.log(nom);
//     if (nom == "Stéphane") { // le nom est égale à la valeur de l'élement
//         //break
//     }
// }

/* -------------------------------------------------------------------------- */





/* --------------------------------- For in --------------------------------- */
/* --------------------------- parcourir un objet --------------------------- */

for (let nom in noms) { // le nom est égale à l'index de l'élement
    console.log(nom);
    // if (nom == "Stéphane") {
    //     //break
    // }
}
/* -------------------------------------------------------------------------- */


console.log(noms.entries());

for (let nom of noms.entries()) {
    console.log(nom);
    console.log(nom[0], nom[1]);
}

/* ------------------------ for of dans les arguments ----------------------- */

function calculerSomme() {
    let total = 0;
    // const chiffre = Array.from(arguments)
    // chiffre.reduce()
    //cf from of pour ma méthode avec le Array  et le reduce
    for (let c of arguments) {
        total += c;
    }
    console.log(total);
}

calculerSomme(40, 50, 86, 65, 460, 419, 65, 41, 26, 87)

/* -------------------------------------------------------------------------- */


/* -------------- for of dans une chaine de caractère - STRING -------------- */

const name = "Anissa"
//console.log(name[0]);

for (let lettre of name) {
    console.log(lettre);
}
/* -------------------------------------------------------------------------- */


/* -------------------------- For of dans Nodelist -------------------------- */

const para = document.querySelectorAll('p')
for (const p of para) {
    p.addEventListener('click', function () {
        console.log(this.innerText);
    })
}



/* -------------------------------------------------------------------------- */


/* -------------------------- For of dans un objet -------------------------- */

const animal = {
    race: "licorne-pégasus",
    type: "oiseau",
    taille: "grand",
    couleur: "arc-en-ciel"
}

console.log(animal);

/* ---------------------- Obliger d'utiliser le for in ---------------------- */

for (const key in animal) {
    console.log(animal[key]);

}
// for (const key of animal) {
//     //console.log(animal[key]); // ça ne marche pas car animal n'est pas itérable

// }

for (let a of Object.keys(animal)) { // la solution pour faire avec un of 
    console.log(a);
}
console.log(Object.values(animal));