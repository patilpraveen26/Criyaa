import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Edit_Details } from "../Edit-details/edit-details";
import { EmployeData } from "../Table/Table";
import { EmpCreate } from "../empcreate/empcreate";


export function Main(){
    return(
        <div>
            <BrowserRouter>
           <Link to='/empdetails'> <h2 className="bg-dark p-2 text-white" align='center'> Employee Details</h2></Link>
            
            <Routes>
                <Route path='/empdetails' element={<EmployeData/>} />
                <Route path="/edit-details/:empid" element={<Edit_Details/>}/>
                <Route path="/empadd" element={<EmpCreate/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}