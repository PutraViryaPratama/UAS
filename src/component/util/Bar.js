import React from "react";
import { AppBar, Typography, Toolbar, Grid, IconButton, Button } from "@mui/material"
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from "react-router-dom";




export default function Bar() {
    return (
        <AppBar color="default" position="static">
            <Toolbar>

                <Grid container spacing={4} alignItems="center" flexWrap="wrap" justifyContent='center' marginTop='10px'>
                    <IconButton>
                        <Grid item sx={{ fontFamily: 'Arial', color: 'blue', fontWeight: 'bold', marginRight: '30px' }}>
                            <Link to="/beranda" style={{textDecoration:'none', color:"black"}} >
                                <Typography>SAN</Typography>
                                <Typography>TOON</Typography>
                            </Link>
                        </Grid>
                    </IconButton>
                    <IconButton >
                        <Grid item>
                            <Typography>ORIGINAL</Typography>
                        </Grid>
                    </IconButton>
                    <IconButton>
                        <Grid item>
                            <Link to="/genre" style={{textDecoration:'none', color:"black"}}>
                                <Typography>GENRE</Typography>
                            </Link>
                        </Grid>
                    </IconButton>
                    <IconButton>
                        <Grid item>
                            <Typography>POPULAR</Typography>
                        </Grid>
                    </IconButton>
                    <IconButton>
                        <Grid item>
                            <Link to="/history" style={{textDecoration:'none', color:"black"}}>
                                <Typography>History</Typography>
                            </Link>
                        </Grid>
                    </IconButton>

                    <Grid item marginTop='-30px'>
                        <Typography>|</Typography>
                    </Grid>
                    <Grid item marginTop='-25px'>
                        <Typography>WAJIB BACA!</Typography>
                    </Grid>
                    <Grid item marginTop='-25px'>
                        <AutoStoriesRoundedIcon />
                    </Grid>
                    <Grid item marginTop='-30px'>
                        <Typography>|</Typography>
                    </Grid>
                    <Grid item marginTop='-30px'>
                        <Button variant="outlined" Width='5px' sx={{ fontSize: '10px', background: 'black', color: 'green', borderRadius: '30px' }} >
                            Terbitkan
                        </Button>
                    </Grid>
                    <Grid item marginTop='-30px'>
                        <Button variant="outlined" Width='5px' sx={{ fontSize: '10px', background: 'white', color: 'green', borderRadius: '30px' }} >
                            Masuk
                        </Button>
                    </Grid>
                    <Grid item marginTop='-30px'>
                        <Typography>|</Typography>
                    </Grid>
                    <Grid item marginTop='-30px'>
                        <IconButton>
                            <SearchRoundedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}