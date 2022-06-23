import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Carrinho() {
    return (
        <div className="carrinho-container">
            <header>
                <span>Meu Carrinho!!</span>
                <Link to="/profile" className="button"> Finalizar Pedido </Link>
            </header>
            <h1>Meus Produtos</h1>

            <ul>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Quantidade:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Quantidade:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Quantidade:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>
                </li>
                <li>
                    <strong>Produto:</strong>
                    <p>Produto teste</p>

                    <strong>Quantidade:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$ 30,00</p>
                </li>
            </ul>
            <br></br>
            <ul>
                <li className="total">
                    <strong className="total">Valor Total:</strong>
                    <p className="total">R$: 1000,00</p>
                </li>
            </ul>
        </div>
    );
}