/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Exo-Tagged-String                             */
/* -------------------------------------------------------------------------- */

const dict = {
    HTML: "HyperText Markup Language",
    CSS: "Cascading StyleSheet",
    JS: "JavaScript"
}
const first = "Anissa"
const last = "Belkheir"

const phrase = presentation`Bonjour je m'appelle ${first} ${last} et j'adoooooore coder en ${"HTML"}, en ${"CSS"}, en ${"JS"} `

// afficher la phrase sous cette forme :
// Bonjour, je m'appelle Anissa Belkheir et j'adoooooooore coder en <abbr title="HyperText Markup Language">HTML</abbr>, en <abbr title="Cascading StyleSheet">CSS</abbr> et en <abbr title="JavaScript">JS</abbr>

function presentation(strings, ...values) {
    //debugger
    const newValues = values.map(item => dict[item] ? `<abbr title="${dict[item]}">${item}</abbr>` : item)
    // je crée une nouvelle const qui va stocker un nouveau tableau qui vérifie si les "values" existent dans l'objet dict si oui `<abbr title="${dict[item]}">${item}</abbr>` si non reprend l'item

    // NON SIMPLIFIE

    // function (item) {
    //     if (dict[item]) {
    //         `<abbr title="${dict[item]}">${item}</abbr>`
    //     } else {
    //         item
    //     }

    // }

    // AVEC FOREACH

    // let str = ''; //je crée une variable pour stocker ma phrase

    // strings.forEach((string, item) => { // je boucle dans ma variable 'phrase' pour ajouter à ma const 'let' un élement string + un élément 'value' dans ma variable 'str'
    //     str += `${string}${newValues[item] ? newValues[item] : ""}`
    // });

    //return str

    // AVEC REDUCE

    return strings.reduce((str, item, index) => str + item + (newValues[index] || ''), '')


}

document.querySelector('#output').innerHTML = phrase