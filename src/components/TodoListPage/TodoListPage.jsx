import './todoListPage.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';

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
  return (
    <div className='body'>
      <div className='container'>
        <TodoHeader />
        <div className='content'>
          <TodoList items={initTodos} />
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
