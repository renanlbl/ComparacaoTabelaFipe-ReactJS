import React from 'react';
import { NativeSelect } from '@material-ui/core';


const Select = ({ name, placeholder, options, classe, handleChange }) => ( 
        <NativeSelect                 
            name={name} 
            defaultValue="placeholder"
            className={classe}  
            onChange={handleChange}         
        >
            <option name="placeholder" value="placeholder" disabled>
                {placeholder}
            </option>   
            { options.map((option, index) => (                
                <option key={index} name={option.name} value={ option['name'] === 'Caminhão' ? 'caminhao' : option.id || option['name'].toLowerCase() }>
                    {option.name}
                </option>                
            ))}             
        </NativeSelect> 
    
)



export default Select

