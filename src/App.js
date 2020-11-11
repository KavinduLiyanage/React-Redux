import './App.css';
import ButtonComponent from './components/ButtonComponent';
import PostList from './components/PostList';
import SelectedPost from './components/SelectedPost';

function App() {
  return (
    <div className="App">
      <ButtonComponent/>
      <br/>
      <PostList/>
      <br/>
      <SelectedPost/>
    </div>
  );
}

export default App;
