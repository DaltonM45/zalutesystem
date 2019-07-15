import React, { Component } from 'react';


class Notas4 extends Component {

    constructor(props){
        super(props);

        this.impacto = props.impacto;
        this.impactoId = props.impactoId;



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
               <p>{this.impacto}</p>
            </div>
        </div>

        )
    }



}

export default Notas4;