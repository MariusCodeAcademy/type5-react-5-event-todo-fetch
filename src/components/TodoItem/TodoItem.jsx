import { useState } from 'react';
function TodoItem(props) {
  const [title, setTitle] = useState('I am TodoItem');
  //fa-circle-thin // nepazymetas
  // fa-check-circle // pazymetas
  const checkClasses = props.item.isDone === true ? 'fa fa-check-circle' : 'fa fa-circle-thin';
  const itemClasses = props.item.isDone === true ? 'item line-through' : 'item';
  return (
    <li className={itemClasses}>
      <i className={checkClasses} aria-hidden='true'></i>
      <span className='text'> {props.item.title} </span>
      <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
      <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
    </li>
  );
}
export default TodoItem;
