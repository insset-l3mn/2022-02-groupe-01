import React from 'react'
 import '../../style/login.css'

import { Routes,Navigate } from "react-router-dom";

import {Alert} from 'react-bootstrap'
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        };

    
      }

    handleSubmit(event) {

        // Make a request for a user with a given ID
        axios.get(process.env.PUBLIC_URL +'/api/student-login.json')
        .then((response) => {
            
            localStorage.setItem('isStudentLoggedIn', true);

          
        })
        .catch((error) => {

            this.setState({error: true});
        })
        .then(function () {
        // always executed
        });


        
        event.preventDefault();

        return <Navigate to=""  replace={true}/>;
    }


    
    render () {

        const isError = this.state.error;
        return (

            <div className='login-page'>
                <main className="form-signin card shadow-sm px-4 py-4">
                {isError ? 
                    <Alert variant="danger">
                        <span>Erreur, e-mail ou mot de passe incorrect</span>
                    </Alert>
                    : ''  
                }
                    

                <form className='my-2' onSubmit={this.handleSubmit.bind(this)}>
                    <h1 className="h2 mb-3 fw-normal">Etudiant <small className='text-muted fw-normal h4'>Connexion</small></h1>

                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Adresse e-mail</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Mot de passe</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Souviens-toi de moi
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">Connexion</button>
                    <p className='text-center'>OU</p>
                    <button className="w-100 btn btn-lg btn-warning mt-1" type="submit">Inscrivez-vous</button>
                </form>
                </main>
            </div>
        );
    }
}

export default Login;