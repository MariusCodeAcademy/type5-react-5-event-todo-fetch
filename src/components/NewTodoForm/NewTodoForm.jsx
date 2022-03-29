import { useState } from 'react';

function NewTodoForm(props) {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  function inputHandler(e) {
    setNewTodoTitle(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault();
    props.onAddTodo(newTodoTitle);
    setNewTodoTitle('');
  }

  return (
    <form onSubmit={formHandler} className='add-item'>
      <button className='submit' type='submit'>
        <i className='fa fa-plus-circle' aria-hidden='true'></i>
      </button>
      <input onChange={inputHandler} value={newTodoTitle} type='text' placeholder='Add todo' />
    </form>
  );
}

export default NewTodoForm;
