import React, { Component } from 'react'
import AppContent from './components/app-content'
import axios from 'axios'


class App extends Component {
    constructor() {
        super()

        this.state = {
            tipo: [],
            marca: []
        }      
     
    }   


    getMarca(e) {        
        axios.get('http://fipeapi.appspot.com/api/1/carros/marcas.json')
        .then((response) => {   
            response.data.map((item, index) => {
                let joined = this.state.marca.concat(item.name)
                this.setState({ marca: joined })
            })
        })    
    }   

    componentDidMount() {
        this.getMarca()
    }


    render() { 
        return (
            <AppContent               
                options={this.state.marca}                               
            />          
        )
    }
}

export default App