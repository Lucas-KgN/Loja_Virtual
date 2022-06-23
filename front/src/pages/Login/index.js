import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <form>
                    <h1>Login</h1>
                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit" > ENTRAR</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color='#e02041' />
                        Não possuo cadastro
                    </Link>
                </form>
            </section>


        </div>
    );
}