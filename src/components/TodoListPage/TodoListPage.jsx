import './todoListPage.css';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';

function TodoListPage() {
  return (
    <div>
      <TodoHeader />
      <TodoList />
      <NewTodoForm />
    </div>
  );
}

export default TodoListPage;
