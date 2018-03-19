import React from 'react';
import Time from './Time';
import Partida from './Partida';

export default class Contador extends React.Component {

    constructor(){
        super();
        this.state = {
            gol_casa : 0,
            gol_visitante: 0,
        }
    }

    marcarGolCasa(){
        this.setState({
            gol_casa: this.state.gol_casa + 1,
        });
    }

    marcarGolVisitante(){
        this.setState({
            gol_visitante: this.state.gol_visitante + 1,
        });
    }

    

    render() {
        const { partida, casa, visitante } = this.props;

        const style = {
                float:"left", 
                marginRight: "10px"
            }
            
        return (
            <div className="container jumbotron mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-header text-white text-center bg-primary">
                                <h3>Casa</h3>
                            </div>
                            <div className="card-body">
                                <Time nome={casa.nome} 
                                    gol={this.state.gol_casa}
                                    marcarGolo={this.marcarGolCasa.bind(this)}/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"> 
                        <Partida { ...partida }/> 
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3"> 
                            <div className="card-header text-center bg-warning">   
                                <h3>Visitante</h3>
                            </div>
                            <div className="card-body"> 
                                <Time nome={visitante.nome} 
                                    gol={this.state.gol_visitante}
                                    marcarGolo={this.marcarGolVisitante.bind(this)}/> 
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{clear:"both"}}></div>
            </div>
        );
    }
}