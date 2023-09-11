import jwt from 'jwt-decode'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
export default function getSession(){
    const token = cookies.get('jwt_authorization');
    if(token) {
        const session: User = jwt(token);
        return session;
    }
    return false;
}

export function destroySession () {
    cookies.remove("jwt_authorization");
    window.location.reload();
    return true;
}