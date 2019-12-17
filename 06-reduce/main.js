/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Reduce                                   */
/* -------------------------------------------------------------------------- */


const numbers = [10, 20, 30]

/* --------------------------- accumuler avec FOR --------------------------- */

// let somme = 0;

// for (let i = 0; i < numbers.length; i++) {
//     somme += numbers[i]
// }

// console.log(somme);

/* -------------------------------------------------------------------------- */



/* ------------------------------- Avec Reduce ------------------------------ */
/* ---------- applique une fonction qui est un « accumulateur » et ---------- */
/* ------------------ qui traite chaque valeur d'une liste ------------------ */
/* -- (de la gauche vers la droite) afin de la réduire à une seule valeur. -- */

const somme = numbers.reduce(function (total, item) { // toujours un total et un item
    return total + item
}, 0)

console.log(somme);

/* --------------------------------- Exemple -------------------------------- */

const colors = [
    { color: "red" },
    { color: "blue" },
    { color: "green" },
]

//["red", "blue", "green"]

const arrayColors = colors.reduce(function (total, item) {
    total.push(item.color);
    return total;
}, [])

console.log(arrayColors);

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//exo : calculer le total de la wishlist

const wishlist = [
    { title: "tesla", price: 90000 },
    { title: "d5", price: 7000 },
    { title: "Voyage en Islande", price: 3000 },
    { title: "Pied Apple", price: 1000 },
    { title: "PC Apple", price: 5800 },
    { title: "Ecran Apple Pro", price: 5000 },
    { title: "Souris et clavier Apple ", price: 228 },
]

/* -------------------------------- Solution -------------------------------- */

var prix = wishlist.reduce(function (total, item) {
    return total + item.price

}, 0)

console.log(prix);

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

const panier = ["banane", "pomme", "orange", "banane", "banane", "melon", "poire", "cerise", "orange", "banane", "pomme", "melon"]

//output attendu 
// const o = {
//     "banane" : 4,
//     "pomme" : 2,
//     "orange" : 2,
//     "melon" : 1,
//     "poire" : 1,
//     "cerise" : 1,
// }

/* -------------------------------- Solution -------------------------------- */

var resultat = panier.reduce(function (total, item) {

    // if (total[item]) {
    //     total[item] += 1
    // } else {
    //     total[item] = 1

    // }

    total[item] = (total[item] || 0) + 1 //eviter if et else


    return total
}, {})

console.log(resultat);

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

//créer une fonction qui va déterminer s'il ya autant de ( que de )


/* -------------------------------- Methode 1 ------------------------------- */

function testParentheses(s) {
    let totalExt = s.split('').reduce(function (total, item) {
        if (item === "(") {
            total += 1
        } else {
            total -= 1
        }

        return total
    }, 0)

    if (totalExt == 0) {
        return "OK"
    } else {
        return "NO"
    }
}

console.log(testParentheses("(((()))()()()()))))()()()()()())))))))()(((())))))((()))"));
console.log(testParentheses("((()))"))
console.log(testParentheses("(((()))()()()()))))()(()()()())))))))()(((())))))((()))"));

/* -------------------------------------------------------------------------- */


/* -------------------------------- Methode 2 ------------------------------- */

function testParentheses2(s) {
    return !s.split('').reduce(function (total, item) {
        // on met un ! devant le s pour avoir des valeurs booléen
        if (item === "(") {
            total += 1
        } else {
            total -= 1
        }

        return total


    }, 0)



}

console.log(testParentheses2("(((()))()()()()))))()()()()()())))))))()(((())))))((()))"));
console.log(testParentheses2("((()))"))
console.log(testParentheses2("(((()))()()()()))))()()()()()()))))))()(((())))))((()))"));

/* -------------------------------------------------------------------------- */


//corection bonus

function testParentheses3(s) {
    return !s.split('').reduce(function (total, item) {
        if (total < 0) {

            return total

        } else if (item == "(") {
            return total += 1
        } else if (item == ")") {
            return total -= 1
        }

        return total // si tu rencontres autre chose qu'une ( ou une ); ignore le 
    }, 0)

}

console.log(testParentheses3("(((()))()()()()))))()()()()()())))))))()(((())))))((()))"));
console.log(testParentheses3("((()))"))
console.log(testParentheses3("(((()))()()()()))))()()()()()()))))))()(((())))))((()))"));
console.log(testParentheses3(")()"));
console.log(testParentheses3("(((sjfopzefjpzjf)))"))


