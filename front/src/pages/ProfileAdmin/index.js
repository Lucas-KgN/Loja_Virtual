import React, {useEffect, useState} from "react";
import { FiPower } from "react-icons/fi"
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import api from '../../services/api';

export default function ProfileAdmin() {
    const history = useHistory();
    const [users, setUsers] = useState([]);

    function handleLogout(){
        localStorage.clear();

        history.push('/');

    }

    useEffect(() => {
        api.get('users', {
        }).then(response => {
            setUsers(response.data);
        })
    }, []);
    

    return (
        <div className="profile-admin-container">
            <header>
                <span>BEM VINDO ADMIN!!</span>
                <Link to="/products/new" className="button"> Novo Produto </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Usuários</h1>

            <ul>
            {users.map(user => (
                    <li key={user.id}>
                        <strong>Nome:</strong>
                             <p>{user.name}</p>
                
                        <strong>E-mail:</strong>
                            <p>{user.email}</p>
                
                        <strong>Endereço:</strong>
                            <p>{user.address}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}