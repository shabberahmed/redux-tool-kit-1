import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from './features/counter/counterSlice'

const Add = () => {
    const[fname,fsetname]=useState("")
    const[lname,lsetname]=useState("")
    const[email,setemail]=useState("")
    const[phone,setphone]=useState("")
    const[batch,setbatch]=useState("")
    const[course,setcourse]=useState("")
    const dis=useDispatch()
    const navigate=useNavigate()
    const x=useSelector(state=>state.counter.value)
    let id
    
    const i=(e)=>{
        e.preventDefault()
        const data={
            id:(x.length)?x[x.length-1].id+1:0,
            fname,
            lname,
            email,
            phone,
            batch,
            course
        }
        dis(add(data))
        fsetname("")
        lsetname("")
        setemail("")
        setphone("")
        setbatch("")
        setcourse("")
        navigate("/")

    }
  return (
    <div>
        <form onSubmit={i}>
            <input type="text" placeholder='first name' name="fname"  value={fname} onChange={(e)=>fsetname(e.target.value)}/>
            <br/>
            <input type="text" placeholder='last name' name="lname"  value={lname} onChange={(e)=>lsetname(e.target.value)}/>
            <br/>
            <input type="email" placeholder='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            <br/>
            <input type="tel" name='pno' placeholder='mobile no' value={phone} onChange={(e)=>setphone(e.target.value)}/>
            <br/>
            <input type="text" name="batch" placeholder='batch no' value={batch} onChange={(e)=>setbatch(e.target.value)}/>
            <br/>
            <input type="text"name="course" placeholder='course'  value={course} onChange={(e)=>setcourse(e.target.value)}/>
            <br/>
            <input type="submit" value="submit"/>
        </form>
    </div>
  )

  }
export default Add