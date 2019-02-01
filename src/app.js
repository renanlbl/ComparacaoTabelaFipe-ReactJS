import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'
/*FAZER URL SER PUXADA ATRAVÉS DO TIPO (CARRO, MOTO OU CAMINHAO) */
class App extends Component {
    constructor() {
        super()

        this.state = {
            tipo: null,
            marca: []
        }      
     
    }   


    getMarca = (tipo) => {
        this.setState({ marca: [] })     
        axios.get(`http://fipeapi.appspot.com/api/1/${tipo}/marcas.json`)        
        .then((response) => {   
            response.data.map((item, index) => {
                let joined = this.state.marca.concat(item.name)
                this.setState({ marca: joined })
            })
        })           
    }   

    handleChange = (e) => {
        const value = e.target.value
        this.getMarca(value)
    }


    render() { 
        return (
            <AppContent               
                options={this.state.marca}   
                handleChange={this.handleChange}                            
            />          
        )
    }
}

export default App