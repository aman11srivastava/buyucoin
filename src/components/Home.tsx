import React from "react";
import {Box, Button, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useStyles} from "../styles/home";

export const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.container}>
                <div>
                    <Paper className={classes.paper} elevation={2}>
                        <div>
                            <Typography className={classes.heading}>Welcome to CoinViewer</Typography>
                            <Button variant={"contained"}>
                                <Link style={{textDecoration: 'none', color: 'white'}} to={'/coins'}>
                                    View Coins
                                </Link>
                            </Button>
                        </div>
                    </Paper>
                </div>
            </Box>
        </Box>
    )
}

export default Home;
