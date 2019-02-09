import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  Paper  } from '@material-ui/core';


const styles = {
}

const TableCars = ({ classes, info }) => {  
  return (
    <div className={classes.root}>
     
              
            {info.map((item, index) => (
              <div className="car">
                <p><span>Marca:</span> {item.marca}</p>
                <p><span>Veículo:</span> {item.name}</p>
                <p><span>Ano:</span> {item.ano_modelo}</p>
                <p><span>Combustível:</span> {item.combustivel}</p>
                <p><span>Ano referência:</span> {item.referencia}</p>
                <p className="preco" ><span>Preço:</span> {item.preco}</p>
              </div>
            ))} 
           
       
      
    </div>
  );
}


export default withStyles(styles)(TableCars);