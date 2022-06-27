import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import api from '../../services/api';

export default function Carrinho() {
    const products_list = localStorage.getItem('products_list'); // Lista de IDS
    const userId = localStorage.getItem('userId');
    let [products, setProducts] = useState([]);
    const counts = {};
    const history = useHistory();

    useEffect(() => {
        api.get('products', {
        }).then(response => {
            setProducts(response.data);
        })
    }, []);
  
    products = products.filter(person => products_list.includes(person.id));
    

    function countproducts(){
        for (const num of products_list) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        console.log(counts)
    }

    function verify(id){
        return counts[id];
    }

    function finalValue() {
        let sum = 0.0;

        products.forEach(element => {
            sum += element.value * verify(element.id);
        });

        return sum;
    }

    async function handleRegister(e){
        e.preventDefault(); 
        const user_id = userId;
        const value = finalValue();
        const closed = true;
        const productsclient = products;

        const data = {
            user_id, 
            value,
            closed,
            productsclient,
        };

        try {
            const response = await api.post('orders', data)
            alert('Deu certo!');

            history.push('/profile');
        } catch(err){
            alert('Erro no pedido, tente novamente.');
        }
    }
    
    return (
        <div className="carrinho-container">
            <header>
                <span>Meu Carrinho!!</span>
                <Link onClick={handleRegister} className="button"> Finalizar Pedido </Link>
            </header>
            <h1>Meus Produtos</h1>
            <ul>
            {countproducts()}
            {products.map(product => (
                    <li key={product.id}>
                        <strong>Produto:</strong>
                             <p>{product.name}</p>
                
                        <strong>Quantidade:</strong>
                            <p>{verify(product.id)}</p>
                
                        <strong>Valor Final:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.value * verify(product.id))}</p>
                    </li>
                ))}
            </ul>
            <br></br>
            <ul>
                <li className="total">
                    <strong className="total">Valor Total:</strong>
                    <p className="total">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(finalValue())}</p>
                </li>
            </ul>
        </div>
    );
}
