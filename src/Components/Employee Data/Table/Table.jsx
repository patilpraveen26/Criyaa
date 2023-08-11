import { Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import TablePagination from '@mui/material/TablePagination';
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Box,boxShadow } from "@mui/system";




 
export  function EmployeData(){
    const[user,setUser]=useState([]);
    const navigate=useNavigate()
    const[search,setSearch]=useState('');
    const today = new Date().toLocaleDateString('en-GB',{ day: '2-digit', month: 'short', year: 'numeric' })

    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);
    const handlechangepage = (event, newpage) => {
        pagechange(newpage);
    };

    const handleRowsPerPage = (event) => {
        rowperpagechange(event.target.value);
        pagechange(0);
    };


    function GetDetails(){
        axios({
            method:'get',
            url:'http://localhost:3030/EmployeeData'
        }).then(res=>{
            setUser(res.data);
        })
    }
    useEffect(()=>{
        GetDetails();
    },[])

    function handleEditClick(id){
         navigate('/edit-details/'+id)
    }
    function handleDeleteClick(id){
        if(window.confirm('Do you want Delete?')){
            axios({
                method:'delete',
                url:'http://localhost:3030/EmployeeData/'+id
            })
            alert("Deleted Successfully")
            window.location.reload();
        }  
    }
    return(
        <div className="container-fluid">
           <Paper sx={{maxWidth:'80%',mx:'auto',mt:'2rem',}}>
            <Box sx={{float:'left', m:2,}} variant="outlined" >Date:{today}</Box>
            <TextField
            label="Search"
            size="small"
            sx={{ml:2,mr:2,mb:2,float:'right'}}
            placeholder="Search Here"
            onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="contained" sx={{float:'right'}} color="success" href="/empadd" >Add Employee Details</Button>
           <TableContainer >
                <Table  >                                                         
                    <TableHead  sx={{backgroundColor:'lightgrey'}} >
                        <TableRow >
                            <TableCell >First_Name</TableCell>
                            <TableCell >Last_Name</TableCell>
                            <TableCell >DOB</TableCell>
                            <TableCell >Gender</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Mobile</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            user .filter((data)=>
                            data.first_name.toLowerCase().includes(search.toLowerCase()) || data.last_name.toLowerCase().includes(search.toLowerCase()) 
                            || data.email.toLowerCase().includes(search.toLowerCase()) || data.gender.toLowerCase().includes(search.toLowerCase())
                            )
                            .slice(page * rowperpage, page * rowperpage + rowperpage) 
                            
                            .map(data=>(
                                <TableRow key={data.id}>
                                    <TableCell>{data.first_name}</TableCell>
                                    <TableCell>{data.last_name}</TableCell>
                                    <TableCell>{data.DOB}</TableCell>
                                    <TableCell>{data.gender}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.Phone}</TableCell>
                                    <TableCell >
                                        <ButtonGroup  variant="text">
                                            <Button onClick={()=>handleEditClick(data.id)}><EditIcon/></Button>
                                            <Button color="error" onClick={()=>handleDeleteClick(data.id)} ><DeleteIcon/></Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
           </TableContainer>
           <TablePagination 
                rowsPerPageOptions={[5,10,15]}
                rowsPerPage={rowperpage}
                page={page}
                count={user.length}
                component="div"
                onPageChange={handlechangepage}
                onRowsPerPageChange={handleRowsPerPage}
                />
                
           </Paper> 
        </div>
        )
}

