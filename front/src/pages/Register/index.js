import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault(); 

        const data = {
            name,
            email,
            address,
        };

        try {
            const response = await api.post('users', data)
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }

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

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome" 
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                    <input type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Endereço" 
                    value={address}
                    onChange={e=> setAddress(e.target.value)}
                    />

                    <button className="button" type="submit"> Cadastrar </button>

                </form>
            </div>
        </div>
    );
}