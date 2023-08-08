import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import TablePagination from '@mui/material/TablePagination';
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
 
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
    return(
        <div>
           <Paper>
            <Link to='/empadd' className="btn btn-success">Add Employee Details</Link>
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
                                    <TableCell ><span className="btn btn-warning bi bi-pen" onClick={()=>handleEditClick(data.id)} > Edit</span></TableCell>
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

