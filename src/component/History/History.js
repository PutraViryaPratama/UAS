import React from "react";
import Bar from "../util/Bar";
import { Footer } from "../Footer";
import gaya from '../Beranda/beranda.module.css';
import historyStyles from './history.module.css';
import { useLocation } from "react-router-dom";
import { Histori } from "../util/Histori";
import { Grid, IconButton } from "@mui/material";

export default function History() {


    return (
        <div className={gaya.container}>
            <Bar />
            <div className={gaya.history}>
                <div className={historyStyles.judul}><h3>HISTORY</h3></div>
                <div className={historyStyles.gambar}>
                    <Grid container spacing={15} >
                        {Histori.map((item) => (
                            <Grid item key={item.url}>
                                <IconButton >
                                    <img src={item.url} />
                                </IconButton>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    );
}
