import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  Paper  } from '@material-ui/core';


const styles = {
}

const TableCars = ({ classes, info }) => {  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>      
            {info.map((item, index) => (
              <div>
                <p>{item.name}</p>
                <p>{item.preco}</p>
              </div>
            ))}
      </Paper>
    </div>
  );
}


export default withStyles(styles)(TableCars);