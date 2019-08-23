import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img src="https://raw.githubusercontent.com/CristianoRC/FaltaUm-CSGO/develop/imagens/gun.png" alt="Logo do Falta um CSGO"></img>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Falta Um - CSGO
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
