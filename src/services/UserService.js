import axios from "axios";

class UserService {

    static getAllusers(){
        const serverURL = 'https://jsonplaceholder.typicode.com/users';
        return axios.get(serverURL);
    }
}
export default UserService;