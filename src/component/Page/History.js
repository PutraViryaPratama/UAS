import React from "react";
import Bar from "../util/Bar";
import { Footer } from "../Footer";
import gaya from '../Pagecss/history.module.css';
import historyStyles from '../Pagecss/history.module.css';
import { Histori } from "../util/Histori";
import { Grid, IconButton,Typography } from "@mui/material";

export default function History({ historyKomik }) {


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
