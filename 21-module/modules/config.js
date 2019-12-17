const apiKey = "abc456448916dtq123";
// export const url = "http://www.unsite.com";
const url = "http://www.unsite.com";

function sayHi(name) {
    console.log(`bonjour ${name}`);
}

export default apiKey; // on doit l'exporter de ce fichier pour l'importer dans l'index.js // un seul export default par fichier 
export { url, sayHi as disBonjour } // elles doivent avoir le même nom 

