export default class UserApiService {
    URL = 'https://jsonplaceholder.typicode.com/users';
     async getUsers() {
        let users = await fetch(this.URL);
        let res = users.json();
        return res
        // return (await fetch(this.URL)).json;
    }
    async getUserById(id) {
        return (await fetch(`${this.URL}/${id}`)).json;
    }
}