import React from "react";
import {Button, Typography} from "@mui/material";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useStyles} from "../styles/singleCoin";

interface CoinHeaderProps {
    currName: string | undefined
    marketName: string | undefined
}

export const CoinHeader = (props: CoinHeaderProps) => {
    const navigate: NavigateFunction = useNavigate();
    const classes = useStyles();
    const {marketName, currName} = props;

    function goToHomePage() {
        navigate('/')
    }

    return (
        <>
            <div className={classes.headerContent}>
                <div>
                    <Button onClick={goToHomePage}>Back</Button>
                </div>
                <div>
                    <Typography fontWeight={"bold"}
                                variant={"h3"}>{currName} / {marketName}</Typography>
                </div>
            </div>
        </>
    )
}

export default CoinHeader;
