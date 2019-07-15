import React, { Component } from 'react';

import './notas.css'

class Notas extends Component {

    constructor(props){
        super(props);

        this.quienes = props.quienes;
        this.quienesId = props.quienesId;



    }

    handleRemove = () =>{

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
               <p>{this.quienes}</p>
            </div>
        </div>

        )
    }



}

export default Notas;