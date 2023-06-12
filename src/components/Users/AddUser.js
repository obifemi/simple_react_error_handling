 import React from 'react';
import UserList from './UserList';

 const AddUser = (props) =>{
    const [users, setUsers] = React.useState([]);

    const addUser = (e) => {
        e.preventDefault();
        if 
        (e.target.elements[0].value === '' || e.target.elements[1].value === '') {
          return alert('Please enter username and age');
        }
        if (e.target.elements[1].value <= 0) {
          return alert('Please enter a valid age');
        }
    
        
        const username = e.target.elements[0].value;
        const age = e.target.elements[1].value;
        const newUser = { username, age };
        setUsers([...users, newUser]);
        console.log(users);
        e.target.reset();
      };

    return(
        <div>
            <form onSubmit={addUser}>
                <input type="text" name="name" placeholder="Enter Name" />
                <input type="text" name="age" placeholder="Enter Age" />
                <input type="submit" value="Add User" />
            </form>
            <UserList users={users} />
        </div>

    )
}

export default AddUser;