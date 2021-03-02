export default class CommentApiService {
    URL = 'https://jsonplaceholder.typicode.com/comments';
    async getComments() {
        return (await fetch(this.URL)).json();
    };

    async getCommentById(id) {
        return (await fetch(`${this.URL}/${id}`))
    }
}