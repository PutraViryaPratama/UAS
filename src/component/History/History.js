import React from "react";
import  Bar  from "../util/Bar";
import { Footer } from "../Footer";
import gaya from '../Beranda/beranda.module.css'
import history from "./history.module.css"


export default function History() {
    return(
        <div className={gaya.container}>
            <Bar />
            <div className={history.history}>
                <div className={history.judul}><h3>HISTORY</h3></div>
            </div>
            <Footer />
        </div>
    )
}