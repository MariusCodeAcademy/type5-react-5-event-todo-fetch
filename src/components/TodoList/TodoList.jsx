import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  return (
    <ul className='list'>
      {props.items.map((todoObj) => (
        <TodoItem key={todoObj.id} item={todoObj} />
      ))}
    </ul>
  );
}

export default TodoList;
