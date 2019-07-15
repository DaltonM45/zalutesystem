import React, { Component } from 'react';


class Notas3 extends Component {

    constructor(props){
        super(props);

        this.linea = props.linea;
        this.lineaId = props.lineaId;



    }

    render(){
        return(

        <div className="notas-n">
            <div className="note-head">
                <span>
                <i className="fas fa-times-circle icon-x"></i>
                </span>
            </div>
            <div className="note-body">
               <p>{this.linea}</p>
            </div>
        </div>

        )
    }



}

export default Notas3;