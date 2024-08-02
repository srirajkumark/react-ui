import { Axios } from "axios";

class UserService {

    static getAllusers(){
        let serverURL = 'https://jsonplaceholder.typicode.com/users';
        return Axios.get(serverURL);
    }
}