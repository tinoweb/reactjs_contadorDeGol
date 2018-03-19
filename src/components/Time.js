import React from 'react';
import BotaoGol from './BotaoGol';

export default class Time extends React.Component {
    render(){
        return(
            <div>
            <h1 className="text-primary text-center">{this.props.nome}</h1>
            <h2 className="text-success text-center">{this.props.gol}</h2>
            <BotaoGol marcaGol={this.props.marcarGolo}/>   
        </div>
        );
    }
} 