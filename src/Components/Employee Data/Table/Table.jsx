import { Button, ButtonBase, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import TablePagination from '@mui/material/TablePagination';
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

 
export  function EmployeData(){
    const[user,setUser]=useState([]);
    const navigate=useNavigate()
    
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
        <div>
           <Paper>
            <Button variant="contained" color="success" href="/empadd" >Add Employee Details</Button>
           <TableContainer >
                <Table stickyHeader>                                                         
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{fontWeight: 'bold'}}>Id</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>First_Name</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Last_Name</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>DOB</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Gender</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Email</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Mobile</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            
                            user .slice(page * rowperpage, page * rowperpage + rowperpage)
                            .map(data=>(
                                <TableRow key={data.id}>
                                    <TableCell>{data.id}</TableCell>
                                    <TableCell>{data.first_name}</TableCell>
                                    <TableCell>{data.last_name}</TableCell>
                                    <TableCell>{data.DOB}</TableCell>
                                    <TableCell>{data.gender}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.Phone}</TableCell>
                                    <TableCell >
                                        <ButtonGroup variant="text">
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
                rowsPerPageOptions={[5,10,15,20]}
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

