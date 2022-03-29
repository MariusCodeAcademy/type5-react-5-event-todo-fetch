import './App.css';
// import Users from './components/Users';
import TodoListPage from './components/TodoListPage/TodoListPage';

function App() {
  console.log('App ran ===');

  return (
    <div className='App'>
      <h1>App</h1>
      <TodoListPage />
    </div>
  );
}

export default App;
