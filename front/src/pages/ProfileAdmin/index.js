import React from "react";
import { FiPower } from "react-icons/fi"
import { Link } from "react-router-dom";
import "./styles.css";

export default function ProfileAdmin() {
    return (
        <div className="profile-admin-container">
            <header>
                <span>BEM VINDO ADMIN!!</span>
                <Link to="/products/new" className="button"> Novo Produto </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Usuários</h1>

            <ul>
                <li>
                    <strong>Nome:</strong>
                    <p>Produto teste</p>

                    <strong>E-mail:</strong>
                    <p>Descrição teste</p>

                    <strong>Endereço:</strong>
                    <p>R$ 30,00</p>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Produto teste</p>

                    <strong>E-mail:</strong>
                    <p>Descrição teste</p>

                    <strong>Endereço:</strong>
                    <p>R$ 30,00</p>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Produto teste</p>

                    <strong>E-mail:</strong>
                    <p>Descrição teste</p>

                    <strong>Endereço:</strong>
                    <p>R$ 30,00</p>
                </li>
                <li>
                    <strong>Nome:</strong>
                    <p>Produto teste</p>

                    <strong>E-mail:</strong>
                    <p>Descrição teste</p>

                    <strong>Endereço:</strong>
                    <p>R$ 30,00</p>
                </li>
            </ul>
        </div>
    );
}