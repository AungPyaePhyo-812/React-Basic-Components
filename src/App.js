import './App.css';
import User from './components/users/User';

import React, {useState, useEffect} from 'react';
import AddUser from './components/users/AddUser';

function App() {
  
let [users, setUsers] = useState([]);
let [showForm, setShowForm] = useState(false)

useEffect(() => {
  fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(users => {
      let rawUsers = users.results;
      let filteredUsers = rawUsers.map(usr=> {
          return {
            uuid : usr.login.uuid,
            name : `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
            phone : usr.phone,
            cell : usr.cell,
            image : usr.picture.thumbnail
          }
      });
      setUsers(filteredUsers)
    })
    .catch(err => console.log(err))
}, []);

const removeUserHandler = (uuid) => {
  let remainUsers = users.filter(usr => usr.uuid !== uuid);
  setUsers(remainUsers);
}

const showFormHandler = () =>{
  setShowForm(!showForm)
}

const addUserHandler = (user) => {
  let newUsers = [user, ...users];
  setUsers(newUsers)
  setShowForm(!showForm)
}


  return (
    <div className='container my-5'>
      <h1 className='text-info text-center'>Our Employee</h1>

      <button className="btn btn-primary btn-sm" onClick={showFormHandler}>Add User</button>

      {showForm && <AddUser addUser={ addUserHandler }/>}

      {
        users.map(usrs => <User key={usrs.uuid} data={usrs}  remove={removeUserHandler} />)
      }
    </div>
  );
}

export default App;
