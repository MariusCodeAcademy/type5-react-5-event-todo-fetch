import './todoListPage.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';

const initTodos = [
  {
    id: 1,
    title: 'Drink coffee',
    isDone: false,
  },
  {
    id: 2,
    title: 'Do sports',
    isDone: true,
  },
  {
    id: 3,
    title: 'Go to park',
    isDone: true,
  },
];

function TodoListPage() {
  const [todosArr, setTodosArr] = useState(initTodos);
  const [currentId, setCurrentId] = useState(4);
  function onNewTodo(newTodoTitle) {
    console.log('newTodoTitle ===', newTodoTitle);

    setCurrentId((prevState) => prevState + 1);

    const newItem = {
      id: currentId,
      title: newTodoTitle,
      isDone: false,
    };
    // console.log('[newItem, ...todosArr] ===', [...todosArr, newItem]);
    // setTodosArr([...todosArr, newItem]);
    // nes state priklauso nuo pries tai buvusio state
    setTodosArr((prevState) => [...prevState, newItem]);
  }
  function onDelete(id) {}

  return (
    <div className='body'>
      <div className='container'>
        <TodoHeader />
        <div className='content'>
          <TodoList items={todosArr} />
          <NewTodoForm onAddTodo={onNewTodo} />
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
