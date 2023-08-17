import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import React, { useState } from "react"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, ButtonBase, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MuiPhoneNumber from 'material-ui-phone-number';

export function EmpCreate(){
    const[first_name,setFirst_name]=useState('');
    const[last_name,setLast_name]=useState('');
    const[DOB,setDOB]=useState('');
    const[gender,setGender]=useState('');
    const[email,setEmail]=useState('');
    const[Phone,setPhone]=useState('');
    const navigate = useNavigate()
    const handleSubmit=()=>{
        // e.preventDefault();
        const empdata={first_name,last_name,DOB,gender,email,Phone};
        axios({
            method:'post',
            url:'http://localhost:3030/EmployeeData',
            data:empdata
        })
        notify();
        navigate('/empdetails')
        // alert('Details Added Successfully')
    }
    const notify = () => {
        toast.success("Details Added Successfully", {
            position: toast.POSITION.TOP_CENTER
          });
    }
    return(
        <React.Fragment>
            {/* <form  className="d-flex justify-content-center align-items-center container-fluid" style={{height:'70vh'}} onSubmit={handleSubmit}>
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

                    <dt>Email</dt>
                    <input className="form-control"  onChange={e=>setEmail(e.target.value)} type="email"/>
                    <dt>Phone</dt>
                    <input className="form-control"  onChange={e=>setPhone(e.target.value)} type="text"/>
                    <button className='mt-2 me-2 btn btn-success' onClick={notify} >Save</button>
                    <Link to='/empdetails' className="mt-2 btn btn-primary">Back</Link>
                </dl>
            </form> */}
            
            <Box display='flex' justifyContent={'center'}>
                <Stack direction={"column"}  sx={{width: 300}} spacing={2}>
                <Typography variant="h4">Employee-Add</Typography>
                <TextField label='First Name'  onChange={e=>setFirst_name(e.target.value)} />
                <TextField label='Last Name'  onChange={e=>setLast_name(e.target.value)} />
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker value={dayjs()} onChange={(newValue) => setDOB(newValue.format("DD-MM-YYYY"))}  label='DOB'/>
                </LocalizationProvider>
                <RadioGroup row >
                    <FormControlLabel  onChange={e=>setGender(e.target.value)} value='Male' control={<Radio/>} label='Male'/>
                    <FormControlLabel  onChange={e=>setGender(e.target.value)} value='Female' control={<Radio/>} label='Female '/>
                </RadioGroup>
                <TextField label='Email' onChange={e=>setEmail(e.target.value)} />
                {/* <TextField label='Phone Number' onChange={e=>setPhone(e.target.value)} /> */}
                <MuiPhoneNumber label="Enter Your Mobile Number" variant="outlined" defaultCountry={'in'}  onChange={value=>setPhone(value)} />
                <Stack direction={'row'} spacing={2} >
                    <Button variant="contained" color="success" onClick={handleSubmit}>Save</Button>
                    <Button variant="contained" color="inherit" href="/empdetails">Back</Button>
                </Stack>
                </Stack>
            </Box>
        </React.Fragment>
    )
}