import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'
/*FAZER URL SER PUXADA ATRAVÉS DO TIPO (CARRO, MOTO OU CAMINHAO) */
/*TRABALHAR NO ON CHANGE - PODE USAR IFS PARA VERIFCAR O NAME DOS INPUTS*/
/*PROVAVELMENTE TEREI QUE FAZER OUTROS SELECTS (P/ COMPARAÇÃO) PARA TRABALHAR FAZER OUTROS REQUEST (NOS SELECTS DE COMPARAÇÃO)*/
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
                let joined = this.state.marca.concat([{name: item.name, id: item.id}])
                this.setState({ marca: joined })
            })
        })           
    }    
    

    handleChange = (e) => {       
        if (e.target.name === 'tipo') {
            const value = e.target.value
            this.getMarca(value)
        }

        if (e.target.name === 'marca') {
            console.log(e.target.value)
        }
    }

    handleClick = (e) => {
        this.getMarca('carros')
        console.log(this.state.marca)
    }


    render() { 
        return (
            <AppContent               
                options={this.state.marca}   
                handleChange={this.handleChange}  
                handleClick={this.handleClick}                          
            />          
        )
    }
}

export default App