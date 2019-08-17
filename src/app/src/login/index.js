import './styles.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const TelaLogin = () => (
    
    <div class="row">
        <div id='principal' class="col s12 m8 l9">
        <br></br><br></br>
        <div>
            <h1 class="grey-text text-lighten-2">Conecte-se</h1>
            <br></br>
            <form>
                <div class="row">
                    <div class="col s2"></div>
                    <input className="input grey-text text-lighten-2 col s8" type='email' placeholder='E-mail'></input>
                </div>

                <div class="row">
                    <div class="col s2"></div>
                    <input className="input grey-text text-lighten-2 col s8" type='password' placeholder='Senha'></input>
                </div>
                <br></br>

                <div class="row">
                    <div class="col s2"></div><a class="waves-effect orange darken-3 btn-large col s8 black-text">Entrar</a><div class="col s2"></div>
                </div>

                <div class="row">
                    <div class="col s2"></div><a class="waves-effect grey darken-3 btn-large col s8 ">Cadastrar</a><div class="col s2"></div>
                </div>
                
            </form>
            <br></br><br></br>
            
            <a class="orange-text darken-3-text" href="#">Esqueci minha senha</a>
            <br></br>
            <a class="orange-text darken-3-text" href="#">Preciso de ajuda</a>
        </div>
    </div>
    </div>
    
)

export default TelaLogin