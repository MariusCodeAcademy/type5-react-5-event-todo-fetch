import { useState } from 'react';
function TodoItem(props) {
  const [title, setTitle] = useState('I am TodoItem');
  const [isChecked, setIsChecked] = useState(props.item.isDone);

  const checkClasses = isChecked === true ? 'fa fa-check-circle' : 'fa fa-circle-thin';
  const itemClasses = isChecked === true ? 'item line-through' : 'item';

  function checkHandler() {
    // jei naujas state priklauso nuo buvusio turetumem atnaujinti su funkcija
    setIsChecked((prevState) => !prevState);
  }

  return (
    <li className={itemClasses}>
      <i onClick={checkHandler} className={checkClasses} aria-hidden='true'></i>
      <span className='text'> {props.item.title} </span>
      <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
      <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
    </li>
  );
}
export default TodoItem;
