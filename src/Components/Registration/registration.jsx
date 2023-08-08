import { Formik, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
export function Register(){
    const naviagte=useNavigate();                                                     //Register Component
    function ValidateDetails(formBody){
        var errors={}
            if(formBody.FirstName==''){
                errors.FirstName="User Name Required"
            }else{
                if(formBody.FirstName.length<4){
                    errors.FirstName="Name Too short"
                }else{
                   if(formBody.FirstName.length>10){
                    errors.FirstName="Name Too Large"
                   }else{
                    errors.FirstName=""
                   }
                }
            }
            if(formBody.Email==''){
                errors.Email="Email Required"
            }else{
                errors.Email=""
            }
            if(formBody.Mobile.match(/\+91\d{10}/)){
                errors.Mobile=""
            }else{
                errors.Mobile="Invalid Mobile"
            }
            if(formBody.Password==''){
                errors.Password="Password Required"
            }else{
                errors.Password=""
            }
      
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            "FirstName":'',
            "Email":'',
            "Mobile":'',
            "Password":''
        },
        onSubmit:(values) => {
            alert(JSON.stringify(values));
            naviagte('/login')
        },
        
    })

    return(
        <div>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                
                <dl className="col-8 border border-3 border-primary p-3 rounded rounded-2">
                <h2 align="center"><span className="bi bi-person"></span> Register</h2>
                    <div className="row">
                        <span className="col-7">
                            <dt className="form-label">First Name</dt>
                            <dd><input type="text" placeholder="First Name" name="FirstName" onChange={formik.handleChange} className="form-control"/></dd>
                            <p className="text-danger">{formik.errors.FirstName}</p>
                        </span>
                        <span className="col-5">
                            <dt className="form-label">Last Name</dt>
                            <dd><input type="text" placeholder="Last Name" name="LastName" className="form-control"/></dd>
                        </span>
                    </div>
                    <dt className="form-label">Email</dt>
                    <dd><input type="email" placeholder="Enter Email" onChange={formik.handleChange} name="Email" className="form-control"/></dd>
                    <p className="text-danger">{formik.errors.Email}</p>
                    <dt className="form-label">Mobile</dt>
                    <dd><input type="text" placeholder="+91 Mobile" onChange={formik.handleChange} name="Mobile" className="form-control"/></dd>
                    <p className="text-danger">{formik.errors.Mobile}</p>
                    <dt className="form-label">Password</dt>
                    <dd><input type="password" placeholder="Enter Password" name="Password" onChange={formik.handleChange} className="form-control"/></dd>
                    <p className="text-danger">{formik.errors.Password}</p>
                    <button className="mt-4 w-100 btn btn-primary">Register</button>
                    <p className="mt-2">Exsisting User ? <Link style={{textDecoration:'none'}} to='/login'>Login</Link></p>
                </dl>
                
            </form>
           
        </div>
    )
}