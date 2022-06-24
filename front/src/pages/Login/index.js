import React, {useState} from "react";
import './styles.css';
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('login', {id});
            
            localStorage.setItem('userId', id);
            localStorage.setItem('userType', response.data.type);
                
            const type_client = localStorage.getItem('userType');
            
            if (type_client === '0') {
                history.push('/profile');
            } else if (type_client === '1') {
                history.push('/admin');
            } else {
                alert('Insira seu ID');
            }
            
        } catch(err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e=> setId(e.target.value)}
                    />
                    <button className="button" type="submit" > ENTRAR</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color='#e02041' />
                        Não possuo cadastro
                    </Link>
                </form>
            </section>


        </div>
    );
}