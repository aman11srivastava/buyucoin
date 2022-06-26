import React, {useEffect, useState} from "react";
import axios from "axios";
import {all_coins, coin_structure, table_header, table_header_type} from "../utils/utils";
import {Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CoinsTableBody from "./CoinsTableBody";

export const CoinsTable = () => {
    const [coins, setCoins] = useState<coin_structure[]>([]);
    useEffect(() => {
        axios.get(all_coins)
            .then((res) => {
                console.log(res.data?.data)
                setCoins(res.data?.data)
            })
    }, [])
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {table_header.map((table: table_header_type) => (
                                <TableCell key={table.id}>
                                    {table.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <CoinsTableBody coins={coins}/>
                </Table>
            </TableContainer>
        </>
    )
}

export default CoinsTable;
