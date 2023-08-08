import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function ForgotPass(){

    const[email,setEmail]=useState('ppraveen@criyaa.com');
    const[user,setUser]=useState('');
    const[error,setError]=useState('');
    const navigate = useNavigate();

    function handleEmail(e){
        setUser(e.target.value);
    }
    function handleSent(e){

        e.preventDefault();
        if(user===email){
            navigate('/resetpass')
        }else{
            setError('Inavlid Email')
        }
    }
    return(                                                                                                 //Forgot Component
        <div className="border border-2 rounded rounded-2 p-3">
            <h2><u>Forgot Password</u></h2>
            <label className="form-label">Email</label>
            <input className="form-control" type="email" onChange={handleEmail} placeholder="Enter Yor Email" />
            <p className="text-danger">{error}</p>
            <div className="row">
                <span className="col-4">
                <Link to="/resetpass" onClick={handleSent} className="disable btn btn-secondary mt-3">Sent</Link>
                </span>
                <span className="mt-4 col-8">
                    <p>Back to <Link to='/login'>Login</Link></p>
                </span>
            </div>
            
        </div>
    )
}