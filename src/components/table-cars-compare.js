import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  Paper  } from '@material-ui/core';


const styles = {
}

const TableCarsCompare = ({ classes, infoCompare }) => {  
  return (
    <div className={classes.root}>
        
            {infoCompare.map((item, index) => (
              <div className="car-compare">
                <p><span>Marca:</span> {item.marca}</p>
                <p><span>Veículo:</span> {item.name}</p>
                <p><span>Ano:</span> {item.ano_modelo}</p>
                <p><span>Combustível:</span> {item.combustivel}</p>
                <p><span>Ano referência:</span> {item.referencia}</p>
                <p className="preco" ><span>Preço:</span> {item.preco}</p>
              </div>
            ))} 
            {console.log(infoCompare)}  
      
    
    </div>
  );
}


export default withStyles(styles)(TableCarsCompare);