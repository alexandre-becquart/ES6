import slug from 'slug';
import { Base64 } from 'js-base64';
import { url } from '../modules/config'

export default function User(name, email, website) {
    return {
        name,
        email,
        url: website
    }
}

export function createUrl(name) { //générer un url de type http://www.monsite.com/user/anissa-Belkheir au lieu de "Anissa Belkheir" 
    //slug (package)
    return `${url}/user/${slug(name, { lower: true })}`
}


export function gravatar(email) { //générer un url de type http://www.gravatar.com/avatar/emaillienbase64 au lieu de "Anissa Belkheir" 
    //js-base64
    return `http://www.gravatar.com/photo/${Base64.encode(email)}`
}