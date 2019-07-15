import React, { Component } from 'react';


// importando firebase
import firebase from 'firebase';
import {db_config } from '../config/Config';
import 'firebase/database';

import swal from 'sweetalert';

// CSS
import './home.css';


class Home extends Component {

  constructor(){
    super();
      this.state={
        // comentarios:{
        //   asw1:null,
        //   asw2:null,
        //   asw3:null,
        //   asw4:null,
        //   asw5:null,
        //   asw6:null
        // }
      }


     // Inicializando firebase, requiriendo la conexion.
     this.app = firebase.initializeApp(db_config);

     this.db = this.app.database().ref('respuestas');
     this.db2 = this.app.database().ref('respuestas2');
     this.db3 = this.app.database().ref('respuestas3');
     this.db4 = this.app.database().ref('respuestas4');
     this.db5 = this.app.database().ref('respuestas5');
     this.db6 = this.app.database().ref('respuestas6');
     this.addBackground = this.addBackground.bind(this);
     this.sendAnswer2 = this.sendAnswer2.bind(this);
     this.sendAnswer3 = this.sendAnswer3.bind(this);
     this.sendAnswer4 = this.sendAnswer4.bind(this);
     this.sendAnswer5 = this.sendAnswer5.bind(this);
     this.sendAnswer6 = this.sendAnswer6.bind(this);
     this.viewtime = this.viewtime.bind(this);

     this.messageSuccess = this.messageSuccess.bind(this);
     this.messageError = this.messageError.bind(this);

  }


  viewtime = () =>{
    var fecha = new Date();
    var dia = fecha.getDay();
    var diames = fecha.getDate();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();
    var meses = [
      'Enero',
      'Feb',
      'Mar',
      'Abril',
      'Mayo',
      'Jun',
      'Jul',
      'Agost',
      'Sept',
      'Oct',
      'Nov',
      'Dic'
    ]
    var diasSemanas = [
      'Domingo',
      'Lunes',
      'Mart',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ]

    var fechactual = diames+"" + " de " + meses[mes]+ " - " + year;
    console.log(diames);
    console.log(diasSemanas[dia]);
    console.log(meses[mes]);


    console.log(fechactual);

  }



  addImagenEl = () => {
    // document.getElementById("banner").innerHTML='background-image: url("img/portada_oficial.png");';
    // document.getElementById("banner").style.property="background-color: #000;"
  }

  // addBootstrap = () => {
  //   var pre = document.createElement('pre');
  //   pre.innerHTML = '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <link rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous""> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>';
  //   document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
  // }

  addBackground = () => {
    document.body.style.backgroundColor = 'rgba(233, 235, 238, 0.616)';

    
    // console.log(year);

    
  }

  componentDidMount = () => {
    this.addBackground();


    // this.addBootstrap();
  }

   messageSuccess = () => {
    swal("Recibido", "Tomaremos en cuenta tu comentario", "success");
   }
   messageError = () =>{
     swal({
        text: "Debes escribir algo valido",
        icon: "info",
        button: "Entendido",
      });
   }

  //  Metodos de respuestas
   sendAnswer = () => {
    var quienes = this.campo1.value;
  //  var time = this.viewtime().fechactual;
    if(quienes.length == 0 || quienes==null ){
      this.messageError();
    }else{
       this.db.child(new Date().getTime()).set({
        quienes:quienes,
        //time:time
       })
       this.campo1.value='';
       this.messageSuccess();
    }
   }

   sendAnswer2 = () => {
    var systems = this.campo2.value;
    if(systems.length == 0 || systems==null ){
      this.messageError();
    }else{
      this.db2.child(new Date().getTime()).set({
            systems:systems
      })
      this.campo2.value='';
      this.messageSuccess();
    }
   }

   sendAnswer3 = () => {
    var linea = this.campo3.value;
    if(linea.length == 0 || linea==null ){
      this.messageError();
    }else{
      this.db3.child(new Date().getTime()).set({
        linea:linea
      })
      this.campo3.value='';
      this.messageSuccess();
    }
   }
  sendAnswer4 = () => {
    var impacto = this.campo4.value;
    if(impacto.length == 0 || impacto==null ){
      this.messageError();
    }else{
      this.db4.child(new Date().getTime()).set({
        impacto:impacto
      })
      this.campo4.value='';
      this.messageSuccess();
    }
  }
  sendAnswer5 = () => {
    var razon = this.campo5.value;
    if(razon.length == 0 || razon==null ){
      this.messageError();
    }else{
      this.db5.child(new Date().getTime()).set({
        razon:razon
      })
      this.campo5.value='';
      this.messageSuccess();
    }
  }
  sendAnswer6 = () => {
    var como = this.campo6.value;
    if(como.length == 0 || como==null ){
      this.messageError();
    }else{
      this.db6.child(new Date().getTime()).set({
        como:como
      })
      this.campo6.value='';
      this.messageSuccess();
    }
  }

    render() {
      return (
        <div>

      <header className="cabecera">
        <div className="banner clearfix" id="banner">
          <div className="info-cuad">
            <div className="intro">
              <div className="cabecera">
                <h1>Zalute <i className="fas fa-heartbeat" /> </h1>
                <h2><span>Bienvenidos a la</span> Revolución</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        {/* <div className="menu clearfix sticky-top">
          <div className="navegador">
            <a  id="enl_a" href="#Quienes somos" >¿Quienes somos?</a>
            <a id="enl_b" href="#Zalute Systems">Zalute Systems</a>
            <a id="enl_c" href="#Linea de tiempo">Linea de tiempo</a>
            <a id="enl_d" href="#Impacto territorial">Impacto territorial</a>
            <a id="enl_e" href="#razon social" >Razon social</a>
            <a id="enl_f" href="#Como lo hacemos">¿Como lo hacemos?</a>
          </div>
        </div> */}
      </header>
      <nav className="navbar navbar-expand-lg navbar-light  nv-top sticky-top">
                <div className="zalt">
                  <a className="" href="#">ZALUTE</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse nv-pri navbar-collapse form-inline" id="navbarNav">
                  <div className="navbar-nav nv-seg">
                      <div className="opc-menu">
                        <a className="" href="#">Lorem1</a>
                      </div>
                      <div className="opc-menu">
                        <a className="" href="#">Lorem2</a>
                      </div>
                      <div className="opc-menu">
                        <a className="" href="#">Lorem3</a>
                      </div>
                      <div className="opc-menu">
                        <a className="" href="#">Lorem4</a>
                      </div>
                      <div className="opc-menu">
                        <a className="" href="#">Lorem5</a>
                      </div>
                      <div className="opc-menu">
                        <a className="" href="#">Lorem6</a>
                      </div>
                  </div>
                </div>
          </nav>

        <div className="atajo clearfix">
          <div className="atajo2">
            <div className="colum_1">
                <div className="atj">
                  <a  id="enl_a" href="#Quienes somos" data-scroll>¿Quienes somos?</a>
                </div>
                <div className="atj">
                  <a   id="enl_b" href="#Zalute Systems" data-scroll> Zalute Systems</a>
                </div>
                <div className="atj">
                  <a  id="enl_c" href="#Linea de tiempo" data-scroll>Linea de tiempo</a>   
                </div>
            </div>
            <div className="colum_2">
              <div className="atj">
                <a  id="enl_d" href="#Impacto territorial" data-scroll>Impacto territorial</a>
              </div>
                <div className="atj">
                  <a  id="enl_e" href="#razon social" data-scroll>Razon social</a>
                </div>
                <div className="atj">
                  <a  id="enl_f" href="#Como lo hacemos" data-scroll>¿Como lo hacemos?</a>
                </div>
            </div>
          </div>
        </div>





 <div data-spy="scroll" data-target="#navbar-example3" className="tps">

        <div className="zalut-a ctn-box clearfix">
          <div className="ctn-box2">
          <div className="contenido" id="Quienes somos">
            <div className="zalut-tile">
              <h3>¿Quienes somos?</h3>
            </div>
            <div className="small-info">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellat laborum modi 
                quaerat exercitationem at iure reprehenderit
                id quod voluptas, provident dolorem quas debitis 
                aliquid eos saepe quasi dignissimos nesciunt.
                Aliquam!</p>
            </div>
            <div className="pre">
              <iframe 
                className="video-show"
                src="https://www.youtube.com/embed/94RborlSzsI" 
                frameBorder={0} 
                allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
          <div className="comentarios">
            <div className="comen-hijo">
              <div className="dej">
                <h4>Dejanos saber que piensas!</h4>
              </div>
              <div className="coment">
                <textarea 
                 ref={d => {this.campo1 = d;}}
                className="form-control textt" 
                placeholder="Comenta aqui..." 
                defaultValue={""} />
              </div>
              <div className="env">
                  <button 
                  onClick={this.sendAnswer}
                  className="btn-env">
                  Enviar</button>
              </div>    
            </div>
          </div> 
          </div>    
        </div>


        <div className="zalut-b ctn-box clearfix">
         <div className="ctn-box2">
          <div className="contenido" id="Zalute Systems">
            <div className="zalut-tile">
              <h3> Zalute Systems</h3>
            </div>
            <div className="small-info">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellat laborum modi 
                quaerat exercitationem at iure reprehenderit
                id quod voluptas, provident dolorem quas debitis 
                aliquid eos saepe quasi dignissimos nesciunt. 
                Aliquam!</p>
            </div>
            <div className="video-preview">
              <div className="pre">
                <iframe 
                className="video-show"
                width={720} 
                height={480} 
                src="https://www.youtube.com/embed/94RborlSzsI" 
                frameBorder={0} 
                allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>
          </div>           
          <div className="comentarios">
            <div className="comen-hijo">
              <div className="dej">
                <h4>Dejanos saber que piensas!</h4>
              </div>
              <div className="coment">
                <textarea 
                ref={x => {this.campo2 = x;}}
                className="form-control textt" 
                placeholder="Comenta aqui..." 
                defaultValue={""} />
                <div className="env">
                  <button 
                  onClick={this.sendAnswer2}
                  className="btn btn-primary  btn-env">
                  Enviar</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>


        <div className="zalut-c ctn-box clearfix">
         <div className="ctn-box2">
          <div className="contenido" id="Linea de tiempo">
            <div className="zalut-tile">
              <h3>Linea de tiempo</h3>
            </div>
            <div className="small-info">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellat laborum modi 
                quaerat exercitationem at iure reprehenderit
                id quod voluptas, provident dolorem quas debitis 
                aliquid eos saepe quasi dignissimos nesciunt. 
                Aliquam!</p>
            </div>
            <div className="video-preview">
              <div className="pre">
                <iframe 
                className="video-show"
                width={720} 
                height={480} 
                src="https://www.youtube.com/embed/94RborlSzsI" 
                frameBorder={0} 
                allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>
          </div>           
          <div className="comentarios">
            <div className="comen-hijo">
              <div className="dej">
                <h4>Dejanos saber que piensas!</h4>
              </div>
              <div className="coment">
               <textarea 
                ref={d => {this.campo3 = d;}}
                className="form-control textt" 
                placeholder="Comenta aqui..." 
                defaultValue={""} />
                <div className="env">
                  <button 
                   onClick={this.sendAnswer3}
                  className="btn btn-primary btn-env">
                  Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="zalut-d ctn-box clearfix">
         <div className="ctn-box2">
          <div className="contenido" id="Impacto territorial">
            <div className="zalut-tile">
              <h3>Impacto territorial</h3>
            </div>
            <div className="small-info">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellat laborum modi 
                quaerat exercitationem at iure reprehenderit
                id quod voluptas, provident dolorem quas debitis 
                aliquid eos saepe quasi dignissimos nesciunt. 
                Aliquam!</p>
            </div>
            <div className="video-preview">
              <div className="pre">
                <iframe 
                className="video-show"
                width={720} 
                height={480}
                 src="https://www.youtube.com/embed/94RborlSzsI" 
                 frameBorder={0} 
                 allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>
          </div>            
          <div className="comentarios">
            <div className="comen-hijo">
              <div className="dej">
                <h4>Dejanos saber que piensas!</h4>
              </div>
              <div className="coment">
                <textarea 
                ref={d => {this.campo4 = d;}}
                className="form-control textt" 
                placeholder="Comenta aqui..." 
                defaultValue={""} />
                <div className="env">
                  <button 
                  onClick={this.sendAnswer4}
                  className="btn btn-primary btn-env">
                  Enviar</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>


        <div className="zalut-e ctn-box clearfix">
        <div className="ctn-box2">
          <div className="contenido" id="razon social">
            <div className="zalut-tile">
              <h3>Razon social</h3>
            </div>
            <div className="small-info">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellat laborum modi 
                quaerat exercitationem at iure reprehenderit
                id quod voluptas, provident dolorem quas debitis 
                aliquid eos saepe quasi dignissimos nesciunt. 
                Aliquam!</p>
            </div>
            <div className="video-preview">
              <div className="pre">
                <iframe 
                className="video-show"
                width={720} 
                height={480}
                 src="https://www.youtube.com/embed/94RborlSzsI" 
                 frameBorder={0} 
                 allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>
          </div>            
          <div className="comentarios">
            <div className="comen-hijo">
              <div className="dej">
                <h4>Dejanos saber que piensas!</h4>
              </div>
              <div className="coment">
               <textarea 
                ref={d => {this.campo5 = d;}}
                className="form-control textt" 
                placeholder="Comenta aqui..." 
                defaultValue={""} />
                <div className="env">
                  <button 
                  onClick={this.sendAnswer5}
                  className="btn btn-primary btn-env">
                  Enviar</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="zalut-f ctn-box clearfix">
         <div className="ctn-box2">
          <div className="contenido" id="Como lo hacemos">
            <div className="zalut-tile">
              <h3>¿Como lo hacemos?</h3>
            </div>
            <div className="small-info">
              <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellat laborum modi 
                quaerat exercitationem at iure reprehenderit
                id quod voluptas, provident dolorem quas debitis 
                aliquid eos saepe quasi dignissimos nesciunt. 
                Aliquam!</p>
            </div>
            <div className="video-preview">
              <div className="pre">
                <iframe 
                className="video-show"
                width={720}
                height={480}
                src="https://www.youtube.com/embed/94RborlSzsI" 
                frameBorder={0}
                 allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>
          </div>         
          <div className="comentarios">
            <div className="comen-hijo">
              <div className="dej">
                <h4>Dejanos saber que piensas!</h4>
              </div>
              <div className="coment">
               <textarea 
                ref={d => {this.campo6 = d;}}
                className="form-control textt" 
                placeholder="Comenta aqui..." 
                defaultValue={""} />
                <div className="env">
                  <button 
                  onClick={this.sendAnswer6}
                  className="btn btn-primary btn-env">
                  Enviar</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>             
      </div> 


      <div className="tt" id="equipo">
        <h6>Equipo de desarrollo</h6>
        <div className="equipo">
          <center>
            <img src="img/equipo_desarrollo.png" alt="Imagen del equipo" />
          </center>
        </div>
      </div>


       <footer>
         <div>
           <h4 className="logo">Zalute</h4>
         </div>
        <div className="pie clearfix">
          <section className="sec_1">
            <aside>
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fas fa-envelope" /></a>
              <a href="#"><i className="fas fa-phone" /></a>
            </aside>
          </section>
          <div className="sec_2">
           <div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua.Santiago. No. 108, Gazcue DN</p>
           </div>
          </div>
        </div>
        <div className="der-res">
          <p className="derechos">Todos los derechos reservados ©</p>
        </div>
      </footer>


            
        </div>
      );
    }
  }
  
  export default Home;