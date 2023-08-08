import { useState } from 'react';                                                   //Login Component
import {Link, useNavigate} from 'react-router-dom';

export function Login(){
    const[msg,setMsg]=useState({userName:'',password:''});
    const[name,serName]=useState({userName:'Praveen',password:'Kumar'})
    const[error,setError]=useState('');
    const navigate = useNavigate();

    function handlenameChange(e){
        setMsg({
            userName:e.target.value,
            password:msg.password
        })
    }
    function handlePassChange(e){
        setMsg({
            userName:msg.userName,
            password:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        if(msg.userName==name.userName && msg.password==name.password){
            setError('')
            navigate('/')  
        }else{
            setError("Invalid Credentials")
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="border border-3 border-primary p-3 rounded rounded-2">
                <h2 align="center"><span className="bi bi-person-circle"></span> Login</h2>
                <dl>
                    <dt className="form-label">User Name</dt>
                    <dd><input type="text" placeholder="Enter UserName" onChange={handlenameChange}  name="userName" className="form-control"/></dd>
                    <dt className="form-label">Password</dt>
                    <dd><input type="password" placeholder="Enter Password" onChange={handlePassChange} name="password" className="form-control"/></dd>
                    <p className='text-danger'>{error}</p>
                    <Link style={{textDecoration:'none'}} to='/forgotpass'>Forgot Password ?</Link>
                </dl>
                <button className="w-100 btn btn-primary">Login</button>
                <p>New User ? <Link style={{textDecoration:'none'}} to="/register">Register</Link></p>
            </form> 
        </div>
    )
}