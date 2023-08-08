import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function PassVerification(){
    const navigate=useNavigate();
    const[error,setError]=useState('');
    const[pass,setPass]=useState('');
    const[cpass,setCpass]=useState('');
                                                                                                            //Password Reset Component
    function Password(e){
        setPass(e.target.value)
    }
    function Cpassword(e){
        setCpass(e.target.value)
    }

    function PassVerification(e){
        e.preventDefault()
        if(pass==cpass){
            setError('')
            navigate('/login')
        }else{
            setError("Password Desn't Match")
        }
    }
    return(
        <div className="border border-2 rounded rounded-2 p-3">
            <form>
                <h2><u>Reset Password</u></h2>
                <label className="form-label">New Password</label>
                <input className="form-control" type="password" onBlur={Password} placeholder="New Password" name="newpassword"/>
                <label className="form-label mt-2">Confirm Password</label>
                <input className="form-control" type="password" onBlur={Cpassword} placeholder="Confirm Password" name="confirmpassword"/>
                <button  className="btn btn-success w-100 mt-4" onClick={PassVerification}>Confirm</button>
                <p className="text-danger">{error}</p>
            </form>
        </div>
    )
}