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
            tipoCompare: null,
            currentIdVehicle: null,
            currentIdVehicleCompare: null,
            currentIdModel: null,
            currentIdModelCompare: null,
            currentIdVehicleFinal: null,
            currentIdVehicleFinalCompare: null,
            marca: [],
            marcaCompare: [],
            veiculo: [],
            veiculoCompare: [],
            modeloEAno: [],
            modeloEAnoCompare: [],
            vehicleFinal: [],
            infoTable: [],
            infoTableCompare: []
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

    getMarcaCompare = (tipo) => {
        this.setState({ marcaCompare: [], veiculoCompare: [], modeloEAnoCompare: [] })     
        axios.get(`http://fipeapi.appspot.com/api/1/${tipo}/marcas.json`)        
        .then((response) => {   
            response.data.map((item, index) => {
                let joined = this.state.marcaCompare.concat([{name: item.name, id: item.id}])
                this.setState({ marcaCompare: joined })
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
       
    getVehicleCompare = (idVehicle) => {
        this.setState({ veiculoCompare: [], modeloEAnoCompare: [] })  
        axios.get(`http://fipeapi.appspot.com/api/1/${this.state.tipoCompare}/veiculos/${idVehicle}.json`)
            .then((response) => {
                response.data.map((item, index) => {
                    let joined = this.state.veiculoCompare.concat([{name: item.name, id: item.id}])
                    this.setState({ veiculoCompare: joined })
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

    getModelAndYearCompare = (idVehicle) => {
        this.setState({ modeloEAnoCompare: [] }) 
        axios.get(`http://fipeapi.appspot.com/api/1/${this.state.tipoCompare}/veiculo/${this.state.currentIdVehicleCompare}/${idVehicle}.json`)
        .then((response) => {
            response.data.map((item, index) => {
                let joined = this.state.modeloEAnoCompare.concat([{name: item.name, id: item.id}])
                this.setState({ modeloEAnoCompare: joined })
            })
        })
    }

   
    getVehicleFinal = (key) => {
        this.setState({ infoTable: [] })         
        if (this.state.tipo === null || this.state.currentIdVehicle === null || this.state.currentIdModel === null || key === null) {
            return false
        }
       
        axios.get(`http://fipeapi.appspot.com/api/1/${this.state.tipo}/veiculo/${this.state.currentIdVehicle}/${this.state.currentIdModel}/${key}.json`)
        .then((response) => {
            console.log(response.data)
            this.setState({ infoTable: [response.data]})
            console.log(this.state.infoTable)           
        })
      
    }

    getVehicleFinalCompare = (key) => {
        this.setState({ infoTableCompare: [] })         
        if (this.state.tipoCompare === null || this.state.currentIdVehicleCompare === null || this.state.currentIdModelCompare === null || key === null) {
            return false
        }
        axios.get(`http://fipeapi.appspot.com/api/1/${this.state.tipoCompare}/veiculo/${this.state.currentIdVehicleCompare}/${this.state.currentIdModelCompare}/${key}.json`)
        .then((response) => {
            console.log(response.data)
            this.setState({ infoTableCompare: [response.data]})
            console.log(this.state.infoTableCompare)
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
    
        if (e.target.name === 'tipoCompare') {
            this.setState({ tipoCompare: e.target.value })
            this.getMarcaCompare(e.target.value)           
        }
       

        if (e.target.name === 'marca') {
           const idVehicle = e.target.value
           this.getVehicle(idVehicle)
           this.setState({ currentIdVehicle: e.target.value })
        }

        if (e.target.name === 'marcaCompare') {
           const idVehicle = e.target.value
           this.getVehicleCompare(idVehicle)
           this.setState({ currentIdVehicleCompare: e.target.value })
        }

        if (e.target.name === 'veiculo') {
            const idVehicle = e.target.value
            this.getModelAndYear(idVehicle)
            this.setState({ currentIdModel: e.target.value })
        }

        if (e.target.name === 'veiculoCompare') {
            const idVehicle = e.target.value
            this.getModelAndYearCompare(idVehicle)
            this.setState({ currentIdModelCompare: e.target.value })
         }

        if (e.target.name === 'modeloeano') {            
            const key = e.target.value            
            this.setState({ currentIdVehicleFinal: key })
        }

        if (e.target.name === 'modeloeanoCompare') {            
            const key = e.target.value            
            this.setState({ currentIdVehicleFinalCompare: key })
        }
    }

    
    handleSubmit = (e) => {
        this.getVehicleFinal(this.state.currentIdVehicleFinal)        
        this.getVehicleFinalCompare(this.state.currentIdVehicleFinalCompare)        
    }

    handleClear = (e) => {
        this.setState( {
            tipo: null,
            tipoCompare: null,
            currentIdVehicle: null,
            currentIdVehicleCompare: null,
            currentIdModel: null,
            currentIdModelCompare: null,
            currentIdVehicleFinal: null,
            currentIdVehicleFinalCompare: null,
            marca: [],
            marcaCompare: [],
            veiculo: [],
            veiculoCompare: [],
            modeloEAno: [],
            modeloEAnoCompare: [],
            vehicleFinal: [],
            infoTable: [],
            infoTableCompare: []
        } )
    }


    render() { 
        return (
            <AppContent               
                marca={this.state.marca}  
                marcaCompare={this.state.marcaCompare}
                veiculo={this.state.veiculo} 
                veiculoCompare={this.state.veiculoCompare}
                modelo={this.state.modeloEAno}
                modeloCompare={this.state.modeloEAnoCompare}
                veiculofinal={this.state.vehicleFinal}
                handleChange={this.handleChange}  
                handleSubmit={this.handleSubmit}    
                handleClear={this.handleClear}
                infoTable={this.state.infoTable} 
                infoTableCompare={this.state.infoTableCompare}  
            />          
        )
    }
}

export default App