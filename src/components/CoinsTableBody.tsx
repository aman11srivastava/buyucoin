import React from "react";
import {coin_structure} from "../utils/utils";
import {TableBody, TableCell, TableRow} from "@mui/material";
import {Link} from "react-router-dom";

interface CoinsTableBodyProps {
    coins: coin_structure[]
}

export const CoinsTableBody = (props: CoinsTableBodyProps) => {
    const {coins} = props;
    return (
        <>
            <TableBody>
                {
                    coins && coins.map((coin: coin_structure, index: number) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Link
                                    // style={{textDecoration: 'none', color: 'black'}}
                                    to={`/coin/${coin.marketName}`}>
                                    {coin.marketName}
                                </Link>
                            </TableCell>
                            <TableCell>{coin.currToName}</TableCell>
                            <TableCell>{coin.bid}</TableCell>
                            <TableCell>{coin.ask}</TableCell>
                            <TableCell>{coin.LTRate}</TableCell>
                            <TableCell>{coin.LTVol}</TableCell>
                            <TableCell
                                style={{
                                    fontWeight: 'bold',
                                    color: coin.isActive ? "green" : "red"
                                }}>{coin.isActive ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </>
    );
}

export default CoinsTableBody;
