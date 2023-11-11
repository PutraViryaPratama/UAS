import React from "react";
import Bar from "../util/Bar";
import { Footer } from "../Footer";
import gaya from './beranda.module.css';
import { Top } from "../util/Top";
import { IconButton, Grid } from "@mui/material";

export function Beranda() {
   

    return (
        <div className={gaya.container}>
            <Bar />
            <Grid container spacing={3}>
                {Top.map((item) => (
                    <Grid item key={item.url}>
                        <IconButton >
                            <img src={item.url}  />
                        </IconButton>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </div>
    );
}
