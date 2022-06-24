import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import api from '../../services/api';

export default function Carrinho() {
    const products_list = localStorage.getItem('products_list');
    const userId = localStorage.getItem('userId');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products', {
        }).then(response => {
            setProducts(response.data);
        })
    }, []);



    return (
        <div className="carrinho-container">
            <header>
                <span>Meu Carrinho!!</span>
                <Link to="/profile" className="button"> Finalizar Pedido </Link>
            </header>
            <h1>Meus Produtos</h1>
            <ul>

            {products.map(product => (
                    <li key={product.id}>
                        <strong>Produto:</strong>
                             <p>{product.name}</p>
                
                        <strong>Quantidade:</strong>
                            <p>{products.length}</p>
                
                        <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.value)}</p>
                    </li>
                ))}
            </ul>
            <br></br>
            <ul>
                <li className="total">
                    <strong className="total">Valor Total:</strong>
                    <p className="total">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(1050.00)}</p>
                </li>
            </ul>
        </div>
    );
}


// function calculate(product_item) {
//     products_list.forEach(element => {
//         if (element === product_item.id) {
//             product_item => {
//                 <li key={product_item.id}>
//                 <strong>Produto:</strong>
//                     <p>{product_item.name}</p>

//                 <strong>Quantidade:</strong>
//                     <p>{product_item.length}</p>

//                 <strong>Valor:</strong>
//                      <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product_item.value)}</p>
//                  </li>
//             }
//         }
//     });
// }