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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
                    <h1>Cadastrar Novo Produto</h1>
                    <p>Cadastre um novo produto para ser exibido no e-commerce!</p>
                    <Link to="/admin" className="back-link">
                        <FiArrowLeft size={16} color='#e02041' />
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewProduct}>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nome do produto</label>
                        <input class="form-control" id="exampleFormControlInput1" placeholder="Aspirador de pó" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Valor</label>
                        <input class="form-control" id="exampleFormControlInput1" placeholder="1200.00" value={value} onChange={e => setValue(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
                        <input class="form-control" id="exampleFormControlInput1" placeholder="Produto bão" value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        </div>
    );
}
