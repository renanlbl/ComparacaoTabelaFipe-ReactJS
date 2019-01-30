import React from 'react';
import { NativeSelect } from '@material-ui/core';


const Select = ({ name, placeholder, options, classe }) => (    
        <NativeSelect                 
            name={name} 
            defaultValue="placeholder"
            className={classe}  
            onChange={(e) => console.log(e.target.value)}         
        >
            <option name="placeholder" value="placeholder" disabled>
                {placeholder}
            </option>
            
            { options.map((option, index) => (
                <option key={index} name={option} value={option}>
                    {option}
                </option> 
            ))}             
        </NativeSelect> 
    
)



export default Select

