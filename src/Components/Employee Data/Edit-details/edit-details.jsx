import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export function Edit_Details(){
    const {empid}=useParams();
    const[first_name,setFirst_name]=useState('');
    const[last_name,setLast_name]=useState('');
    const[DOB,setDOB]=useState('');
    const[gender,setGender]=useState('');
    const[email,setEmail]=useState('');
    const[Phone,setPhone]=useState('');
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const [empdata]={first_name,last_name,DOB,gender,email,Phone};
        axios({
            method:'put',
            url:'http://localhost:3030/EmployeeData/'+empid,
            data:empdata
        })
        alert('Details Submitted')
        navigate('/empdetails')
    }
    useEffect(()=>{
        axios({
            method:'get',
            url:'http://localhost:3030/EmployeeData/'+empid
        }).then(res=>{
            //  
            setFirst_name(res.data.first_name)
            setLast_name(res.data.last_name)
            setDOB(res.data.DOB)
            setGender(res.data.gender)
            setEmail(res.data.email)
            setPhone(res.data.Phone)
        })
    },[])
    return(
        <div>
             
                {/*
                <form className="d-flex container-fluid" > <dl>
                    <h2>Emplyee-Add</h2>
                    <dt>First Name</dt>
                    
                    <input className="form-control" value={first_name} onChange={e=>setFirst_name(e.target.value)} type="text"/>
                    <dt>Last Name</dt>
                    <input className="form-control" value={last_name} onChange={e=>setLast_name(e.target.value)} type="text"/>
                    <dt>DOB</dt>
                    <input className="form-control" value={DOB} onChange={e=>setDOB(e.target.value)} type="text"/>
                    <dt>Gender</dt>
                    <input className="form-control" value={gender} onChange={e=>setGender(e.target.value)} type="text"/>
                    <dt>Email</dt>
                    <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
                    <dt>Phone</dt>
                    <input className="form-control" value={Phone} onChange={e=>setPhone(e.target.value)} type="text"/>
                    <button className='mt-2 me-2 btn btn-success'>Save</button>
                    <Link to='/empdetails' className="mt-2 btn btn-primary">Back</Link>
                </dl> 
                </form>
                */}
            
               <Grid container justifyContent="center" alignItems="center">
                    <Stack direction={"column"}>
                        
                    </Stack>
                    
                    <Stack  direction={"column"} TextField prop sx={{width: 300}} spacing={2}>
                        <Typography variant="h5" sx={{fontWeight:'bold'}}>Edit Employee Details</Typography>
                        <TextField  label='First Name' value={first_name} onChange={e=>setFirst_name(e.target.value)}></TextField>
                        <TextField label='Last Name' value={last_name} onChange={e=>setLast_name(e.target.value)}></TextField>
                        <TextField label='DOB ' value={DOB} onChange={e=>setDOB(e.target.value)}></TextField>
                        <TextField label='Gender' value={gender} onChange={e=>setGender(e.target.value)}></TextField>
                        <TextField label='Email' value={email} onChange={e=>setEmail(e.target.value)}></TextField>
                        <TextField label='Phone' value={Phone} onChange={e=>setPhone(e.target.value)} ></TextField>
                        <Stack direction='row'spacing={2}>
                            <Button variant="contained" onSubmit={handleSubmit} color="success"type="submit">save</Button>
                            <Button href="/empdetails" variant="contained" color="primary">Back</Button>
                        </Stack> 
                    </Stack>
               </Grid>
        </div>
    )
}