import React, { useEffect, useState } from "react";
import Bar from "../util/Bar";
import { Footer } from "../Footer";
import gaya from '../Pagecss/history.module.css';
import historyStyles from '../Pagecss/history.module.css';
import { Histori } from "../util/Histori";
import { Grid, IconButton, Typography } from "@mui/material";

export default function History({ historyKomik }) {

    const [getImg, setGetImg] = useState([]);
    const title = "title"

    const imag = () => {
        const storedUserImg = localStorage.getItem("hotKomik");
        setGetImg(storedUserImg)
    }
    useEffect(() => {
        imag();
    }, [])

    return (
        <div className={gaya.container}>
            <Bar />

            <div className={gaya.history}>
                <div className={historyStyles.judul}><h3>HISTORY</h3></div>
                <div className={historyStyles.gambar}>
                    <img
                        src={getImg
                        }
                        alt={title}
                        style={{ maxWidth: "100%", height: "auto", width: "200px" }}
                    />
                   

                    {/* <Grid container spacing={12} >
                        {getImg.map((item) => (
                            <Grid item key={item.cover}>
                                <IconButton >
                                    <img src={item} />
                                </IconButton>
                            </Grid>
                        ))}
                    </Grid> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}
