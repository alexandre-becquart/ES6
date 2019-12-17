/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//ajouter ou retirer les class .open et .opening

/* -------------------------------------------------------------------------- */


const divSelect = document.querySelector('.box')

divSelect.addEventListener("click", open)


function open() {

    let un = 'open' // on crée une variable pour stocker la valeur des class
    let deux = 'opening'

    if (divSelect.classList.contains('opening')) {  // si elle existe, les valeurs des variables changent et le setTimeOut est inversé 
        // un = 'opening'
        // deux = 'open'
        [un, deux] = [deux, un]
    }



    //divSelect.classList.toggle(deux)
    this.classList.toggle(deux)
    //setTimeout(() => divSelect.classList.toggle(un), 300)
    setTimeout(() => this.classList.toggle(un), 300)

}



// function open() {

//     if (divSelect.classList.contains('opening')) {
//         divSelect.classList.remove('open')
//         setTimeout(() => divSelect.classList.remove('opening'), 400);

//     } else {
//         divSelect.classList.add('opening')
//         setTimeout(() => divSelect.classList.add('open'), 400);
//     }
// }

