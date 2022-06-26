import React, {useEffect, useState} from "react";
import axios from "axios";
import {coin_structure, getColorOfContent, getSingleCoinData} from "../utils/utils";
import {Box, CircularProgress, Paper, Typography} from "@mui/material";
import {useStyles} from "../styles/singleCoin";
import SingleContent from "./SingleContent";
import CoinHeader from "./CoinHeader";
import {useParams} from "react-router-dom";

export const SingleCoin = () => {
    const {market} = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [coin, setCoin] = useState<coin_structure>();
    const classes = useStyles();

    useEffect(() => {
        setLoading(true);
        axios.get(getSingleCoinData(market))
            .then((res) => {
                setCoin(res?.data?.data[0]);
                setLoading(false);
            })

    }, [market])

    if (loading) return <CircularProgress/>

    return (
        <Box>
            <Paper className={classes.paper} elevation={2}>
                <CoinHeader marketName={coin?.marketName} currName={coin?.currToName}/>
                <div className={classes.container}>
                    <div>
                        <Typography fontWeight={"bold"} variant={"h5"}>Bid Price</Typography>
                        <Typography
                            style={{color: getColorOfContent(coin?.bid, coin?.ask)}}>{coin?.quoteCurrency}{"  "}{coin?.bid}</Typography>
                    </div>
                    <div>
                        <Typography fontWeight={"bold"} variant={"h5"}>Ask Price</Typography>
                        <Typography
                            style={{color: getColorOfContent(coin?.ask, coin?.bid)}}>{coin?.quoteCurrency}{"  "}{coin?.ask}</Typography>
                    </div>
                    <div>
                        <SingleContent heading={"Spread"} value={coin?.sprd}/>
                    </div>
                    <div>
                        <SingleContent heading={"Concentration (24hrs)"} value={coin?.c24}/>
                    </div>
                </div>
                <div className={classes.container}>
                    <SingleContent heading={"Total Ask Volume"} value={coin?.tVolAsk}/>
                    <SingleContent heading={"Total Bid Volume"} value={coin?.tVolBid}/>
                    <SingleContent heading={"Volume (24hrs)"} value={coin?.v24}/>
                </div>
                <div className={classes.container}>
                    <SingleContent heading={"Last Bid Rate"} value={coin?.LBRate}/>
                    <SingleContent heading={"Last Bid Volume"} value={coin?.LBVol}/>
                    <SingleContent heading={"Last Trade Rate"} value={coin?.LTRate}/>
                    <SingleContent heading={"Last Trade Volume"} value={coin?.LTVol}/>
                </div>
                <Typography variant={"h4"}>
                    Current Status
                    <Typography style={{color: coin?.isActive ? "green" : "red"}} variant={"h5"}>{coin?.isActive ? "Active" : "Not Active"}</Typography>
                </Typography>
            </Paper>
        </Box>
    )
}

export default SingleCoin;
