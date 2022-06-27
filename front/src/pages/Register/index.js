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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e entre pra família 2LCommerce!!</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color='#e02041' />
                        Já possuo cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nome</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Pafuncio Silva" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Endereço</label>
                        <input type="adress" class="form-control" id="exampleFormControlInput1" placeholder="Rua da Esquina" value={address} onChange={e => setAddress(e.target.value)} />
                    </div>
                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        </div>
    );
}