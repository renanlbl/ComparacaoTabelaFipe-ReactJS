import React from 'react'
import Search from './search'

const AppContent = () => (
    <div className="app">
        <div className="content">   
            <form>   
                <select>
                    <option>Carro</option>
                    <option>Moto</option>
                    <option>Caminhões</option>                 
                </select>      
                <select>
                    <option>BMW</option>
                    <option>Ford</option>
                    <option>Ferrari</option>
                    <option>Porche</option>
                </select> 
                <select>
                    <option>Palio</option>
                    <option>Adventure</option>
                    <option>Civic</option>
                    <option>Corolla</option>
                </select>      
                <select>
                    <option> Palio 1.0 ECONOMY Fire Flex 8V 4p:</option>                    
                    <option> Palio 2.0 ECONOMY Fire Flex 8V 4p:</option>                    
                    <option> Palio 3.0 ECONOMY Fire Flex 8V 4p:</option>                    
                </select>      
                <table>
                    <thead>
                        tabela
                    </thead>    
                </table>      
               
            </form>
        </div>
    </div>
)


export default AppContent