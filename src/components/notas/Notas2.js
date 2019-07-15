import React, { Component } from 'react';


class Notas2 extends Component {

    constructor(props){
        super(props);

        this.systems = props.systems;
        this.systemsId = props.systemsId;



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
               <p>{this.systems}</p>
            </div>
        </div>

        )
    }



}

export default Notas2;