import { useState, useEffect } from 'react';

const userUrl = 'https://jsonplaceholder.typicode.com/users';
const userData = ['James', 'Bob', 'Mary'];

function Users() {
  console.log('Users ran ===');
  const [usersArr, setUsersArr] = useState([]);

  // budas iskviesti funkcija tik kompomentui uzsikrovus
  useEffect(() => {
    console.log('useEffect Users ran ===');

    fetch(userUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('data ===', data);
        // setUsersArr(data.map((uObj) => ({ id: uObj.id, name: uObj.name, email: uObj.email })));
        setUsersArr(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {usersArr.length === 0 && <h3>Loading...</h3>}
        {usersArr.map((uObj) => (
          <li key={uObj.id}>
            {uObj.name} - {uObj.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
