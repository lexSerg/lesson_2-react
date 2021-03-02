export default class PostApiService {
    URL = 'https://jsonplaceholder.typicode.com/posts';
    async getPosts() {
        return (await fetch(this.URL)).json();
    };

    async getPostById(id) {
        return (await fetch(`${this.URL}/${id}`)).json();
    };
}