import React from "react";
import { FiPower } from "react-icons/fi"
import { BsCartPlus } from "react-icons/bs"
import { Link } from "react-router-dom";
import "./styles.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <span>BEM VINDO!!</span>
                <Link to="/carrinho" className="button"> Carrinho </Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Produtos</h1>

            <ul>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>

                    <button type="button">
                        <BsCartPlus size={30} color="#a8a8b3"></BsCartPlus>
                    </button>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>

                    <button type="button">
                        <BsCartPlus size={30} color="#a8a8b3"></BsCartPlus>
                    </button>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>

                    <button type="button">
                        <BsCartPlus size={30} color="#a8a8b3"></BsCartPlus>
                    </button>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>

                    <button type="button">
                        <BsCartPlus size={30} color="#a8a8b3"></BsCartPlus>
                    </button>
                </li>
            </ul>
        </div>
    );
}