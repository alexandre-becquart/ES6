/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Object literal                               */
/* -------------------------------------------------------------------------- */

// const first = "Anissa"
// const last = "Belkheir"
// const age = 23
// const city = "Mons"


// // const person = {
// //     first: first,
// //     last: last,
// //     age: age,
// //     city: city,
// // }

/* ---------------------- on peut simplifier l'écriture --------------------- */

// const person = {
//     firstname: first,
//     last,
//     age,
//     city
// }

// console.log(person);

/* -------------------- object qui contient des fonctions ------------------- */

// const date = new Date();
// const actualYear = date.getFullYear();

// const obj = {
//     name: "Anissa",
//     year: 2000,
//     //create: function () {
//     create() {
//         return actualYear - this.year;
//     },
//     //open: function () {
//     open() {
//         console.log("Open the door");
//     },
//     //close: function () {
//     close: () => {
//         console.log("Close the door");
//     }

// }

// console.log(obj.create());

// obj.close()

/* ----------------------------------- ES6 ---------------------------------- */

const key = "inkColor"
const value = "#12d3e6"

// const tshirt = {
//     [key]: value // on met entre [] pour récupérer "inkColor"
// }

// console.log(tshirt);

// ///AVANT

// const vieuxTshirt = {};
// vieuxTshirt[key] = value;

// console.log(vieuxTshirt);


/* ------------- fucntion qui sert à inverser une couleur donnée ------------ */

function invertColor(Color) {
    return '#' + ("000000" + (0xffffff ^ parseInt(Color.substring(1), 16)).toString(16))
        .slice(-6)
}

/* ------------------------------- .parseInt() ------------------------------ */
/* ----------- analyse une chaîne de caractère fournie en argument ---------- */
/* ------------ et renvoie un entier exprimé dans une base donnée ----------- */

// const tshirt = {
//     [key]: value,
//     [`${key}Opposite`]: invertColor(value)
// }

// console.log(tshirt);

// const keys = ["color", "size", "weight"]
// const values = ["red", "medium", 100]

// const teeshirt = {
//     [keys[0]]: values[0],
//     [keys[1]]: values[1],
//     [keys[2]]: values[2],
// }

// console.log(teeshirt);

// const teeteeshirt = {
//     [keys.shift()]: values.shift(),
//     [keys.shift()]: values.shift(),
//     [keys.shift()]: values.shift(),
// }

// console.log(teeteeshirt);

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// // créer un objet  qui contient un string et 2 fct
// //la première fct renvoit le string 
// //la première fct renvoit une phrase contenant une var passée dans les () 
// // faire l'appel de ces fcts dans une fct init(qui doite être une fct fléchée)

/* -------------------------------- Solution -------------------------------- */

// const obj = {
//     key: "valeur",
//     fct1() {
//         return this.key // On ne peut pas utiliser la fonction fléchée sinon le this n'est plus le même car il se réfère à window
//     },
//     fct2: (phrase) => phrase
// };

// console.log(obj);



// const init = () => {

//     console.log(obj.fct1());
//     console.log(obj.fct2("ceci est une phrase"));

// } // /!\ doit être une fct fléché

// init()

// const toto = {
//     //element : 'the door', 
//     open(el) {
//         this.element = el
//         return `open ${this.element}`
//     },

//     close() {
//         return `close ${this.element}`
//     }
// }

// console.log(toto.open("The window"));
// console.log(toto.close());


/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//créer une fct init()
//créer un objet qui contient 2 fct (une hex2rgb, et une rgb2Hex)
// deux input dans l'html suivi de deux bouton 
// - converti au clic en RGB
// - converti en clic #5608062

/* -------------------------------- Solution -------------------------------- */

// var saisieHexa = document.querySelector(".hexaToRgb input")
// var saisieRGB = document.querySelector(".rgbToHexa input")

// const obj = {
//     hexa2rgb(value) { // première fonction pour convertir Hexa en rgb

//         if (value[0] == "#") { // si le premier élément de la valeur donnée est égale à # tu exécute le code
//             //if (/^#?([a-f\d]{3}|[a-f\d]{6})$/.test(value)) { 
//                 // test avec une valeur régulière/regEX

//             document.querySelector('.hexaToRgb').removeChild(document.querySelector('.hexaToRgb').lastChild) // supprime le paragraphe dans le cas l'on entre une nouvelle valeur à convertir, sinon les § s'accumulent 

//             const hexa = value.substring(1, value.length).split('') // je crée une constante qui prend les valeurs de 'value' à partir du n°2 jusqu'à la taille de 'value'


//             // je crée les 3 nombres pour le RGB
//             nbr1 = parseInt((hexa[0] + hexa[1]), 16) // je dois faire un parseInt pour changer la chaine de caractère de base 16(123456789abcdefg) en nombre
//             nbr2 = parseInt((hexa[2] + hexa[3]), 16)
//             nbr3 = parseInt((hexa[4] + hexa[5]), 16)

//             const text = `Sa valeur RGB est : RGB(${nbr1}, ${nbr2}, ${nbr3} )` // je crée une const pour créer la phrase à faire apparaitre


//             const p = document.createElement('p') // je crée un élément 'p' pour pouvoir insérer la phrase de la const 'text'
//             p.innerHTML = text // je lui ajoute le texte

//             document.querySelector('.hexaToRgb').appendChild(p) // j'ajoute l'élément à la fin de ma div.

//         } else {
//             const error = new Error(`Votre Hexadécimale ne semble pas correcte du tout ! ${value}`)
//             throw error;
//         }
//     },
//     rgb2Hexa(value) { // première fonction pour convertir rgb en hexa
//         document.querySelector('.rgbToHexa').removeChild(document.querySelector('.rgbToHexa').lastChild) // supprime le paragraphe dans le cas l'on entre une nouvelle valeur à convertir, sinon les § s'accumulent 

//         const rgb = value.split(",").map(item => parseInt(item).toString(16)) // je boucle dans value pour convertir les valeur reçu en valeur de base 16


//         const text = `Sa valeur hexa  est : #${rgb[0]}${rgb[1]}${rgb[2]}`

//         const p = document.createElement('p')
//         p.innerHTML = text

//         document.querySelector('.rgbToHexa').appendChild(p)

//     }

// }


// const init = () => {
//     document.querySelector(".hexaToRgb button").addEventListener('click', function () {
//         obj.hexa2rgb(document.querySelector(".hexaToRgb input").value)
//     })
//     document.querySelector(".rgbToHexa button").addEventListener('click', function () {
//         obj.rgb2Hexa(document.querySelector(".rgbToHexa input").value)

//     })
// }

// init()

/* ---------------------------- Correction Anissa --------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// exo conversion hex / rgb
// créer une fonction init()
// créer un objet qui contient 2 fct (une hex2rgb, et une rgb2hex)
// dans l'html : deux champs input avec chacun leur bouton
// 1 champ pour entrer le chiffre en hexa (#12dfe2 ou de12f6) et au click convertir vers le rgb (rgb(255,255,255))
// 1 champ pour entrer le chiffre en rgb (255,255,255) et au click convertir vers l'hexa (#d2e5f3)

/* -------------------------------- Solution -------------------------------- */


// //2c53f6
// let hexa = parseInt('2c', 16);
// console.log(hexa); // 44
// 44, 36, 251
// let color = 44;
// let rgb = color.toString(16);
// console.log(rgb); // 2c




// function hextorgb(hex) {
//     if (hex[0] == "#") {

//     } else {

//     }
// }

// hextorgb(document.querySelector('input').value)



const app = {
    init() {
        this.inputToRGB = document.getElementById('hex2rgb'); // premier input
        this.btnToRGB = document.getElementById('btnhex2rgb'); // premier bouton
        this.spanToRGB = document.getElementById('spanhex2rgb'); // premier span
        this.inputToHex = document.getElementById('rgb2hex'); // deuxieme input
        this.btnToHex = document.getElementById('btnrgb2hex'); // deuxieme bouton
        this.spanToHex = document.getElementById('spanrgb2hex'); // deuxieme span
        this.setInteractivity();
    },
    setInteractivity() {
        this.btnToRGB.addEventListener('click', e => {
            e.preventDefault();
            // console.log(utils.hexToRgb(this.inputToRGB.value));
            this.spanToRGB.innerHTML = utils.hexToRgb(this.inputToRGB.value);
        });
        this.btnToHex.addEventListener('click', e => {
            e.preventDefault();
            // console.log(utils.rgbToHex(this.inputToHex.value));
            this.spanToHex.innerHTML = utils.rgbToHex(this.inputToHex.value);
        });
    }
}

app.init();

const utils = {
    hexToRgb(hexa) {
        // console.log("convertir en rgb : "+ hexa)
        if (/^#?([a-f\d]{3}|[a-f\d]{6})$/.test(hexa)) {
            hexa[0] == '#' ? (hexa = hexa.substring(1)) : hexa; // si #fff ou #ffffff -> retirer le #
            if (hexa.length == 3) { // exemple fff
                const [r, g, b] = hexa; // ['f', 'f', 'f'];
                return this.hexToRgb(`${r}${r}${g}${g}${b}${b}`); // relance la fct en lui envoyant la version ffffff au lieu de fff
            } else { // ffffff
                [r, g, b] = [0, 2, 4]
                    .map(el => hexa.substring(el, el + 2)) // ['ff', 'ff', 'ff']
                    .map(el => parseInt(el, 16)) // [255, 255, 255]

                // return {r,b,g};
                return `rgb(${r},${g},${b})`;
            }
        } else {
            const error = new Error(`Votre hexadécimale ne semble pas correcte du tout ! ${hexa}`);
            throw error;
        }
    },
    rgbToHex(rgb) {
        // console.log("convertir en hexa : "+ rgb)
        return `#${rgb
            .split(',')
            // .map(el => parseInt(el).toString(16))
            .map(el => Math.max(0, Math.min(255, el)).toString(16)) //['ff', '3', 'ff']
            .map(el => el.length == 1 ? `0${el}` : el) //["ff", "03", "ff"]
            .join('')
            }`
    }
