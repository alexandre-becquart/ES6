/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Arrow Function                               */
/* -------------------------------------------------------------------------- */

const prenoms = ['Anissa', 'Monia', 'Anima', 'Leila', 'Khaled', 'Chakib']

/* ---------------------- Simplification de l'écriture ---------------------- */

// const nomEntiers = prenoms.map(function (prenom) {
//     return prenom + " Belkheir"
// })

/* ----------------------------- /// ETAPE 1 /// ---------------------------- */

// const nomEntiers = prenoms.map((prenom) => {
//     return prenom + " Belkheir"
// })

/* ----------------------------- /// ETAPE 2 /// ---------------------------- */

// const nomEntiers = prenoms.map(prenom => { // si je n'ai qu'un seul arguement pas de '()'
//     return prenom + " Belkheir"
// })

/* ----------------------------- /// ETAPE 3 /// ---------------------------- */

// s'il n'y a qu'un return

const nomEntiers = prenoms.map(prenom => prenom + " Belkheir");

console.log(nomEntiers);


// function SsayHelle () {}

const sayHello = () => console.log("hello");

sayHello()

const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const filtered = ages.filter(age => age > 50)

console.log(filtered);

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

const course = "100m haies";

const gagnants = ["Henri", "Alfred", "José",]

/* --------------------------------- Enoncé --------------------------------- */

//outpout attendu

// [
//     { "name": "Henri", "course": "100m haies" },
//     { "name": "Alfred", "course": "100m haies" },
//     { "name": "José", "course": "100m haies" }
// ]

const tableau = gagnants.map((item, index) => ({ "name": item, "course": course, 'place': index + 1 }))
// const tableau = gagnants.map((name, index) => ({ name, course, 'place': index + 1 })) 
// on peut simplifier si la prop et la variable on le même nom


console.log(tableau);

/* -------------------------- Quand ne pas utiliser ------------------------- */

// const button = document.querySelector('button');
// // button.addEventListener('click', function () {
// //     //console.log(this);
// //     this.classList.toggle('selected')
// // })

// button.addEventListener('click', () => {
//     //console.log(this); // correspond à window
//     this.classList.toggle('selected')
//})

// const person = {
//     point: 23,
//     score: function () {
//         console.log(this);
//         this.point++
//     }
// }

// const person = {
//     point: 23,
//     score: () => {
//         console.log(this);
//         this.point++
//     }
// }

// person.score()

// console.log(person.point);



/* --------------------------- Argument par défaut -------------------------- */

// function calculAddition(total, tax, tip) {
//     // if (!tip) {
//     //     tip = 0.15
//     // }
//     tip = tip || 0.15 //version simplifié
//     // if (!tax) {
//     //     tax = 0.13
//     // }
//     tax = tax || 0.13 //version simplifié

//     return total + total * tax + total * tip
// }

function calculAddition(total, tax = 0.13, tip = 0.15) {

    return total + total * tax + total * tip
}

console.log(calculAddition(100));
console.log(calculAddition(100, 0.25));
console.log(calculAddition(100, undefined, 0.25));

var calculAddition2 = (total, tax = 0.13, tip = 0.15) => total + total * tax + total * tip

console.log(calculAddition(100));
console.log(calculAddition(100, 0.25));
console.log(calculAddition(100, undefined, 0.25));