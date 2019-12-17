/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Promise                                  */
/* -------------------------------------------------------------------------- */

// https://jsonplaceholder.typicode.com/posts

const promesseDatas = fetch('https://jsonplaceholdr.typicode.com/posts');

console.log(promesseDatas);

let datas;

promesseDatas
    //.then(response => console.log(promesseDatas)) // il m'affiche une info comme quoi il a récupéré qqch, mais pas au format que je veux
    .then(response => response.json()) // je lui demande de convertir en json
    .then(response => afficher(response)) // affiche moi les données
    .catch(err => console.error(err))

function afficher(infos) { // si on fait directement CLG il n'attend pas que les données soient stockées
    datas = infos;
    console.log(datas);
}

/* -------------------------------------------------------------------------- */
/*                             créer notre promise                            */
/* -------------------------------------------------------------------------- */

const p = new Promise((resolve, reject) => { //2 fonctions resolve si ça marche et reject si ça ne marche pas 

    setTimeout(() => { //simuler un temps d'attente d'accès au serveur
        //resolve("Alex is the best")
        reject(Error("message d'erreur"))
    }, 200)
})

p
    .then(response => console.log(response))
    .catch(err => console.error(err))

/* -------------------------------------------------------------------------- */
/*                                 cas concret                                */
/* -------------------------------------------------------------------------- */

const posts = [
    { title: "j'aime le JavaScript", author: "Anissa Belkheir", id: 1 },
    { title: "CSS !", author: "Guillaume Danzin", id: 2 },
    { title: "Astuces de developpeur", author: "Geoffrey Denys", id: 3 }
]

const authors = [
    { name: "Geoffrey Denys", twitter: "@geoffreydenys", bio: "Le Chuck Norris du Web" },
    { name: "Guillaume Danzin", twitter: "@guillaumedanzin", bio: "Intégre et désintègre dans les règles de l'art" },
    { name: "Anissa Belkhei", twitter: "@manissa", bio: "Ze best formatrice ever" },
]

function getPostById(id) { //Fonction pour récupérer l'élément dans la constant posts
    return new Promise((resolve, reject) => { // je crée une promise
        setTimeout(() => { // on lui impose une délai de chargement
            const post = posts.find(el => el.id == id); // on boucle dans Posts pour trouver l'élement qui a le même id que l'élément donné
            post ? resolve(post) : reject(Error('Post not found')) // si post existe tu m'envois post sinon tu renvois un message d'error
        }, 200)
    })
}

function findAuthor(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const authorDetails = authors.find(el => el.name == post.author);
            if (authorDetails) {
                post.author = authorDetails;
                resolve(post);
            } else {
                reject(Error('Authors is not found'))
            }
        }, 500)
    })
}

getPostById(2)
    //.then(response => console.log(response)) // il reçoit la réponse de la première promise
    .then(response => findAuthor(response)) //je récupère la réponse renvoyer pas post de la fonction findAuthor()
    .then(response => console.log(response)) // 
    .catch(err => console.error(err))


/* -------------------------------------------------------------------------- */
/*                     travailler avec plusieurs promises                     */
/* -------------------------------------------------------------------------- */

const weather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ temp: 29, conditions: 'grand soleil mais partiellement nuageux' })
    }, 2000)
})

const tweets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["J'aime la régilsse", "Mais le BBQ c'est bien aussi"])
    }, 500)
})

Promise
    .all([weather, tweets])
    .then(res => {
        const [winfos, tinfos] = res
        console.log("meteo : " + winfos.temp + ", " + winfos.conditions)
        console.log("tweets : " + tinfos.join('... '))
    })

/* ------------------------------- cas concret ------------------------------ */

const postPromise = fetch('https://jsonplaceholder.typicode.com/posts');
const streetPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
    .all([postPromise, streetPromise])
    .then(res => {
        return Promise.all(res.map(el => el.json()))
    })
    .then(res => {
        const [posts, ratp] = res;
        console.log(posts);
        console.log(ratp);
    })
    .catch(err => console.error(err))