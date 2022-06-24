import React, {useState} from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import api from '../../services/api'

export default function NewProduct() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    async function handleNewProduct(e) {
        e.preventDefault();

        const data = {
            name,
            value,
            description,
        };

        try {
            await api.post('products', data)
            
            history.push('/admin');
        } catch (err) {
            alert('Erro ao cadastrar produto, tente novamente.');
        }
    }

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

                <form onSubmit={handleNewProduct}>
                    <input 
                        placeholder="Nome do produto"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <button className="button" type="submit"> Cadastrar </button>

                </form>
            </div>
        </div>
    );
}
