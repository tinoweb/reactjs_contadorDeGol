import React from 'react';

export default class BotaoGol extends React.Component {
    
    handleClick(event){
        event.preventDefault();
        this.props.marcaGol();
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary btn-block" onClick={this.handleClick.bind(this)}>Gol</button>
            </div>
        );
    }
} 