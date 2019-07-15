import React, { Component } from 'react';


class Notas6 extends Component {

    constructor(props){
        super(props);

        this.como = props.como;
        this.comoId = props.comoId;



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
               <p>{this.como}</p>
            </div>
        </div>

        )
    }



}

export default Notas6;