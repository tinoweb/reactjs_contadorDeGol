import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanan/RJ",
        data: "15/03/2018",
        horario: "19h",
    },
    casa: {
        nome: "Vasco",
    },
    visitante: {
        nome: "Flamengos",
    }
}

export default class App extends React.Component {

    render(){
        return(
            <PlacarContainer {...dados}/>
        ) ;
    }
    
}