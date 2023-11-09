import { Container, Grid, Link, Typography } from "@mui/material";


export function Footer() {
  return (
    <Container
      maxWidth="lr"
      component="footer"
      sx={{
        mt: 3,
        py: [5],
        background: 'brown',
        color: "white",
        
        bottom:"0"
        

      }}
    >
      <Grid container justifyContent=' space-around' >
        <Grid item>
          <Typography>
            Copyright @SANTOON
          </Typography>
          <Typography>All right reserved</Typography>
        </Grid>

        <Grid item ml={20} sx={{ background: 'white', color: 'black', fontWeight: 'bold', padding: '5px' }}>
          <Typography>SAN</Typography>
          <Typography>TOON</Typography>
        </Grid>

        <Grid item ml={20}>
          <Typography >
          DMCA | Terms of Usage |
          </Typography>
          <Typography>Privacy Policy | Contact Us</Typography>
        </Grid>

      </Grid>

    </Container>
  );
}
