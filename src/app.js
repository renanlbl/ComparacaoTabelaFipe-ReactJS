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
            currentIdVehicle: null,
            currentIdModel: null,
            currentIdVehicleFinal: null,
            marca: [],
            veiculo: [],
            modeloEAno: [],
            vehicleFinal: [],
            infoTable: []
        }      
     
    }   


    getMarca = (tipo) => {
        this.setState({ marca: [], veiculo: [], modeloEAno: [] })     
        axios.get(`http://fipeapi.appspot.com/api/1/${tipo}/marcas.json`)        
        .then((response) => {   
            response.data.map((item, index) => {
                let joined = this.state.marca.concat([{name: item.name, id: item.id}])
                this.setState({ marca: joined })
            })
        })           
    }    

    getVehicle = (idVehicle) => {
        this.setState({ veiculo: [], modeloEAno: [] })  
        axios.get(`http://fipeapi.appspot.com/api/1/${this.state.tipo}/veiculos/${idVehicle}.json`)
            .then((response) => {
                response.data.map((item, index) => {
                    let joined = this.state.veiculo.concat([{name: item.name, id: item.id}])
                    this.setState({ veiculo: joined })
                })
            })
    }    

    getModelAndYear = (idVehicle) => {
        this.setState({ modeloEAno: [] }) 
        axios.get(`http://fipeapi.appspot.com/api/1/${this.state.tipo}/veiculo/${this.state.currentIdVehicle}/${idVehicle}.json`)
        .then((response) => {
            response.data.map((item, index) => {
                let joined = this.state.modeloEAno.concat([{name: item.name, id: item.id}])
                this.setState({ modeloEAno: joined })
            })
        })
    }

   
    getVehicleFinal = (key) => {
        this.setState({ vehicleFinal: [] }) 
        axios.get(`http://fipeapi.appspot.com/api/1/${this.state.tipo}/veiculo/${this.state.currentIdVehicle}/${this.state.currentIdModel}/${key}.json`)
        .then((response) => {
            console.log(response.data)
            // response.data.map((item, index) => {
            //     let joined = this.state.vehicleFinal.concat([{name: item.name, id: item.key}])
            //     this.setState({ vehicleFinal: joined })
            // })
        })
    }
    

    handleChange = (e) => {       
        if (e.target.name === 'tipo') {
            this.setState({ tipo: e.target.value })
            this.getMarca(e.target.value)
        }
       

        if (e.target.name === 'marca') {
           const idVehicle = e.target.value
           this.getVehicle(idVehicle)
           this.setState({ currentIdVehicle: e.target.value })
        }

        if (e.target.name === 'veiculo') {
            const idVehicle = e.target.value
            this.getModelAndYear(idVehicle)
            this.setState({ currentIdModel: e.target.value })
         }

        if (e.target.name === 'modeloeano') {
            const key = e.target.value            
            this.setState({ currentIdVehicleFinal: key })
         }
    }

    handleSubmit = (e) => {
        this.getVehicleFinal(this.state.currentIdVehicleFinal)        
    }


    render() { 
        return (
            <AppContent               
                marca={this.state.marca}  
                veiculo={this.state.veiculo} 
                modelo={this.state.modeloEAno}
                veiculofinal={this.state.vehicleFinal}
                handleChange={this.handleChange}  
                handleSubmit={this.handleSubmit}    
                infoTable={this.state.infoTable}                      
            />          
        )
    }
}

export default App