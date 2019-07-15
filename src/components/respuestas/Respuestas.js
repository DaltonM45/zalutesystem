import React, { Component } from 'react';

import './respuestas.css';

// importando firebase
import firebase from 'firebase';
import {db_config } from '../config/Config';
import 'firebase/database';

// components
import Notas from '../notas/Notas';
import Notas2 from '../notas/Notas2';
import Notas3 from '../notas/Notas3';
import Notas4 from '../notas/Notas4';
import Notas5 from '../notas/Notas5';
import Notas6 from '../notas/Notas6';

class Respuestas extends Component {

    constructor(props){
        super(props);
        this.state = {
          respuestas:[

          ],
          respuestas2:[

          ],
          respuestas3:[

          ],
          respuestas4:[

          ],
          respuestas5:[

          ],
          respuestas6:[

          ]
        }


      this.app = firebase.initializeApp(db_config);

      this.db = this.app.database().ref('respuestas');
      this.db2 = this.app.database().ref('respuestas2');
      this.db3 = this.app.database().ref('respuestas3');
      this.db4 = this.app.database().ref('respuestas4');
      this.db5 = this.app.database().ref('respuestas5');
      this.db6 = this.app.database().ref('respuestas6');

      this.comprobar = this.comprobar.bind(this);
      this.cerrarSesion = this.cerrarSesion.bind(this);


    }


    componentDidMount = () => {

    

      const {respuestas} = this.state;
      const {respuestas2} = this.state;
      const {respuestas3} = this.state;
      const {respuestas4} = this.state;
      const {respuestas5} = this.state;
      const {respuestas6} = this.state;

      this.db.on('child_added', snap => {
        respuestas.push({
            quienesId:snap.key,
            quienes: snap.val().quienes,
        })
         // actualizando el estado
         this.setState({respuestas});
    })

    this.db2.on('child_added', snap => {
      respuestas2.push({
          systemsId:snap.key,
          systems: snap.val().systems,
      })
       // actualizando el estado
       this.setState({respuestas2});
    })

    this.db3.on('child_added', snap => {
      respuestas3.push({
          lineaId:snap.key,
          linea:snap.val().linea,
      })
       // actualizando el estado
       this.setState({respuestas3});
    })

    this.db4.on('child_added', snap => {
      respuestas4.push({
          impactoId:snap.key,
          impacto:snap.val().impacto,
      })
       // actualizando el estado
       this.setState({respuestas4});
    })

    this.db5.on('child_added', snap => {
      respuestas5.push({
          razonId:snap.key,
          razon:snap.val().razon,
      })
       // actualizando el estado
       this.setState({respuestas5});
    })

    this.db6.on('child_added', snap => {
      respuestas6.push({
          comoId:snap.key,
          como:snap.val().como,
      })
       // actualizando el estado
       this.setState({respuestas6});
    })



   
    }

    componentWillMount = () =>{
        this.comprobar(this);
    }

    cerrarSesion = () =>{
      firebase.auth().signOut()
      .then(function (){
          console.log("se termino la session")
          window.location.replace("/Zltd");
      }, function (error) {
          console.log(error);
      })
    }

    comprobar = () =>{
      firebase.auth().onAuthStateChanged(function (user){
        if(user){
          // window.location.replace("/respuestas");
        }else{
          window.location.replace("/Zltd");
        }
    })
    }

    


    render(){
        return(

          <div>
          <div className="tem">
          <div className="topic">
            <div className="zs">
              <h2>Zalute Systems</h2>
            </div>
            <div className="bt">
              <button 
              onClick={this.cerrarSesion}
              className="cs">
              Cerrar Sesion
              </button>
            </div>
          </div>
          </div>
      <div className="xnx-f">
      <div className="contenido-respuestas">
      <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#primero" aria-expanded="true" aria-controls="primero">
              ¿Quienes somos?
            </button>
          </h5>
        </div>
        <div id="primero" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body">
          {
               this.state.respuestas.map( z => {
                  return(
                        <Notas
                          quienes={z.quienes}
                          quienesId={z.quienesId}
                        />
                  )
               })
                

          }
                
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#segundo" aria-expanded="false" aria-controls="segundo">
             Zalute Systems
            </button>
          </h5>
        </div>
        <div id="segundo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">
          {
               this.state.respuestas2.map( x => {
                  return(
                         <Notas2
                          systems={x.systems}
                          systemsId={x.systemsId}
                        />
                  )
               })
          }
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#tercero" aria-expanded="false" aria-controls="tercero">
             Linea de tiempo
            </button>
          </h5>
        </div>
        <div id="tercero" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">
          {
               this.state.respuestas3.map( y => {
                  return(
                         <Notas3
                          linea={y.linea}
                          lineaId={y.lineaId}
                        />
                  )
               })
          }
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#cuarto" aria-expanded="false" aria-controls="cuarto">
             Impacto territorial
            </button>
          </h5>
        </div>
        <div id="cuarto" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">
          {
               this.state.respuestas4.map( y => {
                  return(
                         <Notas4
                          impacto={y.impacto}
                          impactoId={y.impactoId}
                        />
                  )
               })
          }
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#quinto" aria-expanded="false" aria-controls="quinto">
             Razon social
            </button>
          </h5>
        </div>
        <div id="quinto" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">
          {
               this.state.respuestas5.map( y => {
                  return(
                         <Notas5
                          razon={y.razon}
                          razonId={y.razonId}
                        />
                  )
               })
          }
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#sexto" aria-expanded="false" aria-controls="sexto">
             ¿Como lo hacemos?
            </button>
          </h5>
        </div>
        <div id="sexto" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">
          {
               this.state.respuestas6.map( y => {
                  return(
                         <Notas6
                          como={y.como}
                          comoId={y.comoId}
                        />
                  )
               })
          }
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
        )
    }

}

export default Respuestas;