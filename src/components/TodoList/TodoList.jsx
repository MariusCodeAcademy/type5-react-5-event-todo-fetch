import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  return (
    <ul className='list'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoList;
