/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// crée une liste à puce avec chaque title 
// ajoute leur texte 

const post = [
    { id: 1, title: "Accueil", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, odio obcaecati ipsum similique sunt voluptatum nisi quidem ab unde dolorem, delectus, animi facilis placeat modi maxime magni fugiat voluptatibus expedita?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum et voluptatibus laboriosam ipsam rem totam, inventore molestias, harum, provident accusamus omnis dolorem facilis fugiat sequi similique perspiciatis aspernatur id" },
    { id: 2, title: "Présentation", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui nulla numquam, tenetur quasi hic sit harum, itaque corrupti voluptate, reiciendis animi suscipit repellat iure velit. Molestias exercitationem expedita debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque distinctio autem praesentium laboriosam, alias quis doloremque? Placeat quasi neque quisquam cupiditate, illum, corrupti eaque, nisi hic harum facere voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rerum quia, temporibus nemo ipsa aut? Illum placeat iste totam amet quis obcaecati! Cupiditate aliquid culpa tempora neque, velit ut assumenda!" },
    { id: 3, title: "Projets", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate quae, laboriosam obcaecati quidem incidunt inventore consectetur non rem deleniti eligendi voluptatibus placeat quaerat reprehenderit deserunt necessitatibus ipsam saepe soluta?" },
    { id: 4, title: "Contact", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi neque atque ipsum, modi minus quos asperiores pariatur dolore itaque voluptates officia ducimus similique mollitia optio omnis iste eius quibusdam blanditiis molestias quas repellendus soluta vel ipsam! Laboriosam, debitis. Commodi, velit. Voluptas, nemo id. Accusantium quibusdam officiis dignissimos. Rem vitae numquam dolorem quidem unde doloremque enim, quas nobis tenetur eum saepe dolores repellendus modi a hic laboriosam. Odio, voluptatibus? Reiciendis totam soluta sed. Molestias, exercitationem voluptates deleniti error ea magni ratione ipsum magnam, qui hic laboriosam aut temporibus voluptatum provident sed eos modi veritatis, quis dolorum autem debitis dolores. Quibusdam!" }
]

const nav = document.getElementById('post_title');
const content = document.getElementById('post_content');

post.map(function (item) { //je boucle dans ma liste post avec map
    const li = document.createElement('li')  // je crée une constante pour créer un <li>
    const a = document.createElement('a')  // je crée une constante pour créer un <a>
    li.appendChild(a) //j'ajoute le <a> dans les <li> avec appendChild
    a.innerHTML = item.title;  // dans ma liste post, pour chaque item, je vais chercher le title pour l'ajouter dans ma balise <a>
    a.href = "#"; //j'ajoute à mon <a> un lien 
    nav.appendChild(li)//j'ajoute les <li> dans le ul #post_title (cfr HTML)
    a.addEventListener('click', genererText) // j'ajoute un événement Click à mes <a> et je lui ajoute une fonction 
})

var titre = document.createElement('h1') // Je crée une balise <H1> // Si je la mets dans ma FCT genererText() il va les ajouter les uns en dessous de l'autre dans la <section id="post_content">
var text = document.createElement('p')// Je crée une balise <p>
content.appendChild(titre) // j'ajoute le <h1> dans la <section id="post_content">
content.appendChild(text) // j'ajoute le <p> dans la <section id="post_content">

function genererText() {
    titre.innerHTML = this.innerHTML // au clic il ajoute le texte dans le <h1> le texte qui correspond à celui sur lequel j'appuie // this = <a>

    let that = this // je stocke le this du <a> sur lequel je clique en dehors de 'const textId' pour le conserver car s'il se trouve dans la 'const textId' il change
    const textId = post.find(function (item) { // je vérifie en  cherchant  dans ma lise post si le text this du <a> stocker dans la var 'that' est égale au title de l'item dans lesquels il cherche pour vérifier
        return that.innerHTML == item.title
    })

    text.innerHTML = textId.content // si c'est le cas j'ajoute le text content de l'element textId dans le <p> = text.innerHTML

}










