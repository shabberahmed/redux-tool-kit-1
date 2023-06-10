
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { de } from './features/counter/counterSlice'


const Display = () => {
  const [s, sets] = useState("")   //need to look it again
  const name = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const d = useSelector(state => state.counter.value)
  console.log(d)
  console.log(s, "this is state")
  const x = d.filter((val) => {
    console.log("inside filter",val.fname,s)
    console.log(val.fname.toLowerCase().includes(s.toLowerCase()))
    return val.fname.toLowerCase().includes(s.toLowerCase())
  })
  console.log(x, "this filter ")
  // const search = ()=>{
  //   if(!s){
  //     return d
  //   }else{
  //     const fdata = d.filter((val)=>{
  //       return val.fname.toLowerCase().includes(s.toLowerCase())
  //     })
  //     return fdata
  //   }
  // }

  // const mydata = search()
  // console.log(mydata,'this isfiliterling data')
  // console.log(d)


  return (
    <>
      <div>
        <Link to="/add">Add User</Link>
        <input type="text" placeholder='enter' onChange={(e) => sets(e.target.value)} value={s} />
        <table border={"1px"}>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Batch-no</th>
              <th>course</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              (x.length) ? x.map(val =>
                <tr key={val.id}>
                  <td>{val.fname}</td>
                  <td>{val.lname}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{val.batch}</td>
                  <td>{val.course}</td>
                  <button onClick={() => dispatch(de(val.id))}>delete</button>
                  <button><Link to={`/edit/${val.id}`}>edit</Link></button>
                </tr>
              ) : <h1>No data</h1>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
