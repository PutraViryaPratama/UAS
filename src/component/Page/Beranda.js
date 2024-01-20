import React from "react";
import Bar from "../util/Bar";
import { Footer } from "../Footer";
import gaya from '../Pagecss/beranda.module.css';
import { Top } from "../util/Top";
import { IconButton, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const Beranda = () => {

    
    // const [hotKomik, sethotKomik] = useState([]);
    // const [newList, setnewList] = useState([])
    // const Listkomik = async () => {



    //     const options = {
    //         method: 'GET',
    //         url: 'https://indonesia-komik.p.rapidapi.com/v1/browse',
    //         headers: {
    //             lulThings: 'iyainiyainiyainde123',
    //             'X-RapidAPI-Key': '518ee87599msh97059fc9bea1a68p14cd26jsn983c4317a477',
    //             'X-RapidAPI-Host': 'indonesia-komik.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //         sethotKomik(response.data.hotList)
    //         setnewList(response.data.newsList)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // useEffect(() => {
    //     Listkomik();
    // }, []);

    return (
        <div className={gaya.container}>
            <Bar />
            {/* <div className="hot komik">
                <Typography variant="h1" sx={{ background: "black", color: "white" }}>Hot Komik</Typography>
                <Grid container spacing={2} sx={{ ml: 4 }}>
                    {hotKomik.map((komik) => (
                        <Grid item key={komik.id} xs={8} sm={6} md={4} lg={3} >
                            <IconButton>
                                <img
                                    src={komik.cover
                                    }
                                    alt={komik.title}
                                    style={{ maxWidth: "100%", height: "auto", width: "200px" }}
                                />

                            </IconButton>
                            <Typography>{komik.title}</Typography>
                        </Grid>

                    ))}
                </Grid>
            </div>

            

            <div className="newList">
                <Typography variant="h1" sx={{ background: "black", color: "white" }}>NEW LIST</Typography>
                <Grid container spacing={2} sx={{ ml: 4 }}>
                    {newList.map((newl) => (
                        <Grid item key={newl.id} xs={8} sm={6} md={4} lg={3} >
                            <IconButton>
                                <img
                                    src={newl.cover
                                    }
                                    alt={newl.title}
                                    style={{ maxWidth: "100%", height: "auto", width: "200px" }}
                                />

                            </IconButton>
                            <Typography>{newl.title}</Typography>
                        </Grid>

                    ))}
                </Grid>
            </div> */}

            <Footer />
        </div>
    );
}
