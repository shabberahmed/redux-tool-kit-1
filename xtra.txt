
import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { de } from './features/counter/counterSlice'
// import { increment } from './features/counter/counterSlice'

// Import necessary modules

const Display = () => {
    const users = useSelector(state => state.counter.value);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
  
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <>
        <div>
          <Link to="/add">Add User</Link>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name"
          />
          <table border="1px">
            {/* Table headers */}
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
  
            {/* Render filtered users */}
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => dispatch(de(user.id))}>Delete</button>
                  <Link to={`/edit/${user.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          
          </table>
        </div>
      </>
    );
  };
  
  export default Display;
