import React, { Component } from 'react';


class Notas5 extends Component {

    constructor(props){
        super(props);

        this.razon = props.razon;
        this.razonId = props.razonId;



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
               <p>{this.razon}</p>
            </div>
        </div>

        )
    }



}

export default Notas5;