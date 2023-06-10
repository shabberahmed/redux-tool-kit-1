import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { edit } from './features/counter/counterSlice'

const Edit = () => {
    const[fname,fsetname]=useState("")
    const[lname,lsetname]=useState("")
    const[email,setemail]=useState("")
    const[phone,setphone]=useState("")
    const[batch,setbatch]=useState("")
    const[course,setcourse]=useState("")
    const dis=useDispatch()
    let {id}=useParams()
    const navigate=useNavigate()
    const x=useSelector(state=>state.counter.value)
    const f=x.find(val=>val.id===parseInt(id))
 useEffect(()=>{
    if(f){
        fsetname(f.fname)
        lsetname(f.lname)
        setemail(f.email)
        setphone(f.phone)
        setbatch(f.batch)
        setcourse(f.setcourse)
    }
 },[f])
    const i=(e)=>{
        e.preventDefault()
        const data={
            id:parseInt(id),
            fname,
            lname,
            email,
            phone,
            batch,
            course
        }
        dis(edit(data))
        // fsetname("")
        // lsetname("")
        // setemail("")
        // setphone("")
        // setbatch("")
        // setcourse("")
        navigate("/")
    }
  return (
    <div>
     {
        (f)?(<>
           <form onSubmit={i}>
            <input type="text" placeholder='first name' name="fname"  value={fname} onChange={(e)=>fsetname(e.target.value)}/>
            <br/>
            <input type="text" placeholder='last name' name="lname"  value={lname} onChange={(e)=>lsetname(e.target.value)}/>
            <br/>
            <input type="email" placeholder='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            <br/>
            <input type="tel" name='pno' placeholder='mobile no' value={phone} onChange={(e)=>setphone(e.target.value)}/>
            <br/>
            <input type="text" name="batchno" placeholder='batch no' value={batch} onChange={(e)=>setbatch(e.target.value)}/>
            <br/>
            <input type="text"name="course" placeholder='course'  value={course} onChange={(e)=>setcourse(e.target.value)}/>
            <br/>
            <input type="submit" value="submit"/>
        </form>
        </>):(<h1>id not found</h1>)
     }
    </div>
  )

  }
export default Edit
