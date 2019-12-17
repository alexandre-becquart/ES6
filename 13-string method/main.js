/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               String Methode                               */
/* -------------------------------------------------------------------------- */

/* ------------ utiliser que sur de String -- chaine de caractère ----------- */

const texte = "Bonjour tout le monde"

/* ------------------------------ .startWidth() ----------------------------- */

console.log(texte.startsWith('Bon'));

/* -------------------------------------------------------------------------- */

/* ------------------------------- .endsWith() ------------------------------ */

console.log(texte.endsWith('onde'));

/* -------------------------------------------------------------------------- */

/* ------------------------------- .includes() ------------------------------ */

console.log(texte.includes('le'));

/* -------------------------------------------------------------------------- */

/* -------------------------------- .repeat() ------------------------------- */

console.log(texte.repeat(3));

/* -------------------------------------------------------------------------- */


const ref = "EDC2"
console.log(ref.startsWith('edc'));
// false -> sensible à la casse

const num = "20-AC45612377-FF3"


console.log(num.startsWith('AC', 3));
// vérifie à partir de 3eme caractère

//exemple utilisation du repeat

const marque = 'Audi';
const modele = 'Q7';
const couleur = "Bleu électrique";

function decalage(str, length = 20) { //par défaut la longeur est 20
    return "->" + " ".repeat(length - str.length) + str // pour alligner sur la droite
}
// output attendu
// ->                Audi
// ->                  Q7
// ->     Bleu électrique

console.log(decalage(marque));
console.log(decalage(modele));
console.log(decalage(couleur));
