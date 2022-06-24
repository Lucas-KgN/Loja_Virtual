import React, {useEffect, useState} from "react";
import { FiPower } from "react-icons/fi"
import { BsCartPlus } from "react-icons/bs"
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import api from '../../services/api';

export default function Profile() {
    const userId = localStorage.getItem('userId');
    localStorage.setItem('userId', userId);
    const [products, setProducts] = useState([]);
    const history = useHistory();
    let products_user = [];
    
    

    function addProduct(id_product){
        try {
            products_user.push(id_product);
            localStorage.setItem('products_list', products_user);
        } catch (err) {
            alert('Erro ao adicionar produto, tente novamente.');
        }

    }

    useEffect(() => {
        api.get('products', {
        }).then(response => {
            setProducts(response.data);
        })
    }, []);
    
    function handleLogout(){
        localStorage.clear();

        history.push('/');

    }

    return (
        <div className="profile-container">
            <header>
                <span>Seja Bem Vindo!!</span>
                <Link to="/carrinho" className="button"> Carrinho </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower  size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Produtos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <strong>Produto:</strong>
                             <p>{product.name}</p>
                
                        <strong>Descrição:</strong>
                            <p>{product.description}</p>
                
                        <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.value)}</p>

                        <button onClick={() => addProduct(product.id)} type="button">
                            <BsCartPlus size={30} color="#a8a8b3"></BsCartPlus>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}