import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"

export default function NewProduct() {
    return (
        <div className="new-product-container">
            <div className="content">
                <section>
                    <h1>Cadastrar Novo Produto</h1>
                    <p>Cadastre um novo produto para ser exibido no e-commerce!</p>
                    <Link to="/admin" className="back-link">
                        <FiArrowLeft size={16} color='#e02041' />
                        Voltar para Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome do produto" />
                    <input placeholder="Valor" />
                    <textarea placeholder="Descrição" />

                    <button className="button" type="submit"> Cadastrar </button>

                </form>
            </div>
        </div>
    );
}
