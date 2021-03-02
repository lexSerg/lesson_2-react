import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from './components/usersList/UsersList';
import UsersJson from './components/UsersJson/UsersJson';
import PostsJson from './components/PostsJson/PostsJson';
import CommentsJson from './components/CommentsJson/CommentsJson';

function App() {
  return (
    <div className="App">
      <h1>Lesson2</h1>
      <div className='data-api-wrap'>
        <div className='data-api'>
          <h2>Users from</h2>
          <h3>JSON  Placeholder:</h3>
          <UsersJson />
        </div>

        <div className='data-api'>
          <h2>Posts from</h2>
          <h3>JSON  Placeholder:</h3>
          <PostsJson/>
        </div>

        <div className='data-api'>
          <h2>Comments from</h2>
          <h3>JSON  Placeholder:</h3>
          <CommentsJson/>
        </div>

      </div>

      <h2>Users from data:</h2>
      <UsersList/>
    </div>
  );
}

export default App;
