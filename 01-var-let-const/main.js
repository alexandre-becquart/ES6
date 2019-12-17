/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------- déclarer une variable ------------------------- */

// var qqch = "machin";
// console.log(qqch);

// let maVar = "autre chose";
// console.log(maVar);

// var prenom = "Anissa";

// function getPrenom() {
//     var prenom = "Gilles"
//     // elle n'est connu que dans la fct 
// }

// getPrenom()
// console.log(prenom);

/* ----------------------------- Dans une boucle ---------------------------- */

// for (var i = 0; i > 10; i++) {
//     console.log(i);
// }

// console.log(i);

/* ----------------------------------- let ---------------------------------- */
/* ------------- permet de déclarer une variable dont la portée ------------- */
/* -- est celle du bloc courant, éventuellement en initialisant sa valeur. -- */

// for (let a = 0; a > 10; a++) { 
// // elle n'existe que dans la boucle (let is not defined)
//     console.log(a);
// }

// console.log(a);

/* -------------------------------------------------------------------------- */

/* ---------------------------------- const --------------------------------- */
/* ----------------- Déclarer une variable qui ne change pas ---------------- */


// const demo = document.getElementById('demo')
// console.log(demo);
//demo = 15 

/* -------------------------- le nom des variables -------------------------- */

// let nom = "tata";
// var nom = "toto";
// console.log(nom); 
// on ne peut pas réutilisé le même nom

/* -------------------------------------------------------------------------- */

const nom = "toto";


const monArray = ["anissa", "gilles", "stéphane"];
console.log(monArray);
monArray.push('Senastien')
console.log(monArray);
//monArray = ["toto", "Tata"]

/* ----------------------------- Object.freeze() ---------------------------- */
Object.freeze(monArray);
// pour figer le tableau
/* -------------------------------------------------------------------------- */

monArray[1] = "Geoffrey";
console.log(monArray);


const test = {
    "prenom": "Anissa",
    "city": "Mons"
}

Object.freeze(test) // fige mon objet
test.nom = "Belkheir"; //ne fait pas d'erreur mais n'ajoute pas l'info en +
console.log(test);

const demo = document.getElementById('demo').innerHTML = "Toto"
demo.innerHTML = "Toto";

