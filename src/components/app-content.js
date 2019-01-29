import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Paper, Button, Typography, Toolbar, AppBar, FormControl, NativeSelect, MenuItem  } from '@material-ui/core';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  select: {
    width: '100%',
    height: 40,
    margin: '10px 0'
  }, 
  formControl: {
    width: '100%'
  }, 
  paper: {
    padding: '20px 10px',
    margin: '10px 0'
  },
  button: {
    marginRight: 10
  }
};

const AppContent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>          
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>     
      <Grid container className={classes.root} spacing={16}>
        <Grid item className={classes.flex} xs={12}>
          <Grid item xs={8}>
              <Paper className={`${classes.paper} ${classes.flex}`}>
                <Grid container spacing={16}>
                  <Grid item xs={12} md={6}>               
                    <FormControl className={classes.formControl}>                  
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Tipo de veículo
                        </option>
                        <option value={10}>Carros</option>
                        <option value={20}>Caminhões</option>
                        <option value={30}>Motos</option>
                      </NativeSelect>
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Marca
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Marca
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Marca
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                    </FormControl>   
                  </Grid>                 
                  <Grid item xs={12} md={6}>               
                    <FormControl className={classes.formControl}>                  
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Tipo de veículo
                        </option>
                        <option value={10}>Carros</option>
                        <option value={20}>Caminhões</option>
                        <option value={30}>Motos</option>
                      </NativeSelect>
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Marca
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Marca
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                      <NativeSelect 
                        className={classes.select}
                        name="age"                  
                      >
                        <option value="" disabled selected>
                          Marca
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>                      
                    </FormControl>   
                  </Grid>
                  <Grid item xs={12}>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Comparar
                  </Button>
                  <Button variant="contained" color="default" className={classes.button}>
                    Limpar
                  </Button>
                  </Grid>  
                </Grid>                
              </Paper>
          </Grid>         
        </Grid>
      </Grid> 
    </div>
  );
}


export default withStyles(styles)(AppContent);