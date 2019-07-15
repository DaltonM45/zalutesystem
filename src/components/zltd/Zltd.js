import React, { Component } from 'react';

import swal from 'sweetalert';
import {db_config } from '../config/Config';
import firebase from 'firebase';

// CSS
import './zltd.css';


class Zltd extends Component {

    
    constructor(){
        super();



       
        

      

         this.app = firebase.initializeApp(db_config);
         this.ingresando = this.ingresando.bind(this);
         this.addBackground = this.addBackground.bind(this);
        
        this.comprobar = this.comprobar.bind(this);

    }
    


    addBackground = () => {
        document.body.style.backgroundColor = 'rgba(233, 235, 238, 0.616)';
    }
    
    componentDidMount = () => {
        this.addBackground(this);
        
       
    }

    componentWillMount = () =>{
     this.comprobar(this);
    }
    

    

    comprobar = () =>{
        firebase.auth().onAuthStateChanged(function (user){
          if(user){
            window.location.replace("/respuestas");
          }
      })
      }

     


    ingresando = () => {
        var email = document.getElementById('input-email').value;
        var pass = document.getElementById('input-pass').value;
      
        // console.log("ingresando");
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(success => {
            console.log('klk')
            window.location.replace("/respuestas");
        })
        .catch( error => {
            console.log(error);
        });

      

    }

    


    render() {
        return(

           <div className="login"> 
             <div className="formul-enter">
                <div className="tm">
                    <h1>inicio de sesion</h1>
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="usuario"
                        className="form-control ipt" 
                        id="input-email"
                        // ref={x => {this.txt1 = x;}}
                        />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="contraseña"
                        className="form-control ipt" 
                        id="input-pass"
                        // ref={x => {this.txt2 = x;}}
                        />
                </div>
                <div className="ig-e">
                     <input 
                        className="bt-e"
                        type="button" 
                        value="Ingresar"
                        // href="/respuestas"
                        onClick= {this.ingresando}
                        />
                </div>
                     
             </div>

             
           </div>
        )
    }

}

export default Zltd;