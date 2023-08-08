import React from "react";

import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TableHead,
    TablePagination,
} from "@mui/material";

import { useState, useEffect } from "react";

const MuiTable = () => {
    const columns = [
        { id: "id", name: "Id" },

        { id: "name", name: "Name" },

        { id: "email", name: "Email" },

        { id: "gender", name: "Gender" },
    ];

    const handlechangepage = (event, newpage) => {
        pagechange(newpage);
    };

    const handleRowsPerPage = (event) => {
        rowperpagechange(event.target.value);

        pagechange(0);
    };

    const [rows, rowchange] = useState([]);

    const [page, pagechange] = useState(0);

    const [rowperpage, rowperpagechange] = useState(5);

    const [searchInput, searchInputChange] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/employee")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                rowchange(response);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1> User Info Table </h1>

            <input
                type="search"
                placeholder="SearchHere"
                onChange={searchInputChange}
            />

            <Paper sx={{ width: "90%", marginLeft: "5%" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id}>{column.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows &&
                                rows

                                    .slice(page * rowperpage, page * rowperpage + rowperpage)

                                    .map((row, i) => {
                                        return (
                                            <TableRow key={i}>
                                                {columns &&
                                                    columns.map((column, i) => {
                                                        let value = row[column.id];

                                                        return <TableCell key={value}>{value}</TableCell>;
                                                    })}
                                            </TableRow>
                                        );
                                    })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowPerPageOptions={[5, 10, 25]}
                    rowsPerPage={rowperpage}
                    page={page}
                    count={rows.length}
                    component="div"
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}
                ></TablePagination>
            </Paper>
        </div>
    );
};

export default MuiTable;
