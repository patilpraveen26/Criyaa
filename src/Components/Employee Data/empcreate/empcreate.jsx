import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import React, { useState } from "react"


export function EmpCreate(){
    const[first_name,setFirst_name]=useState('');
    const[last_name,setLast_name]=useState('');
    const[DOB,setDOB]=useState('');
    const[gender,setGender]=useState('');
    const[email,setEmail]=useState('');
    const[Phone,setPhone]=useState('');
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const empdata={first_name,last_name,DOB,gender,email,Phone};
        axios({
            method:'post',
            url:'http://localhost:3030/EmployeeData',
            data:empdata
        })
        navigate('/empdetails')
        alert(JSON.stringify(empdata))
    }
    return(
        <React.Fragment>
            <form className="d-flex container-fluid" onSubmit={handleSubmit}>
                <dl>
                    <h2>Emplyee-Add</h2>
                    <dt>First Name</dt>
                    <input className="form-control"  onChange={e=>setFirst_name(e.target.value)} type="text"/>
                    <dt>Last Name</dt>
                    <input className="form-control"  onChange={e=>setLast_name(e.target.value)} type="text"/>
                    <dt>DOB</dt>
                    <input className="form-control" onChange={e=>setDOB(e.target.value)} type="date"/>
                    <dt>Gender</dt>
                    <span>Female<input className="form-check-input" type="radio" name="gender" onChange={e=>setGender(e.target.value)} value='Female'/></span>
                    <span>Male<input  className="form-check-input"  type="radio" name="gender" onChange={e=>setGender(e.target.value)} value='Male'/></span>
                    {/* <input className="form-control" value={gender} onChange={e=>setGender(e.target.value)} type="text"/> */}
                    <dt>Email</dt>
                    <input className="form-control"  onChange={e=>setEmail(e.target.value)} type="email"/>
                    <dt>Phone</dt>
                    <input className="form-control"  onChange={e=>setPhone(e.target.value)} type="text"/>
                    <button className='mt-2 me-2 btn btn-success'>Save</button>
                    <Link to='/empdetails' className="mt-2 btn btn-primary">Back</Link>
                </dl>
                
            </form>
        </React.Fragment>
    )
}