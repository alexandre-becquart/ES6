/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// 1. selectionner tous les li
// 2. filtrer pour ne garder que les li qui contiennent Flexbox
// 3. maper pour récolter les timing 
// 4. convertire ces durée en seconde
// 5. calculer le total en seconde 

const li = document.querySelectorAll('li') /// ETAPE 1
console.log(li);

const tableauLi = Array.from(li) // on convertie notre Nodeliste en tableau

console.log(tableauLi);


const secondes = tableauLi
    //.filter(item => item.innerText == "Flexbox Video") /// ETAPE 2
    .filter(item => item.textContent.includes("Flexbox "))
    //.map(item => item.getAttribute('data-time').split(":")) /// ETAPE 3
    .map(item => item.dataset.time.split(":"))
    //.map(item => item[0] * 60 + parseInt(item[1])) /// ETAPE 4
    .map(item => item[0] * 60 + item[1] * 1)
    .reduce((total, item) => total + item, 0); /// ETAPE 5
;

console.log(secondes);

