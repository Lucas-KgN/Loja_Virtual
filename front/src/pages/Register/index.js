import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e entre pra família 2LCommerce!!</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color='#e02041' />
                        Já possuo cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Endereço" />

                    <button className="button" type="submit"> Cadastrar </button>

                </form>
            </div>
        </div>
    );
}