import React from "react";
import {Typography} from "@mui/material";

interface SingleContentProps {
    heading: string
    value: any
}

export const SingleContent = (props: SingleContentProps) => {
    const {value, heading} = props;
    return (
        <div>
            <Typography fontWeight={"bold"} variant={"h5"}>{heading}</Typography>
            <Typography>{value}</Typography>
        </div>
    )
}

export default SingleContent;
