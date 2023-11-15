import { useState } from 'react';
import axios from 'axios';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import {EstiloCep} from "../css/EstiloCep.jsx";

function Sobre() {
    const [cep, setCep] = useState('08587-290');
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);

    const cepRegex = /^\d{5}-\d{3}$/; // Regex para o formato de CEP "12345-678"

    const formatCep = (inputCep) => {
        const formattedCep = inputCep.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        if (formattedCep.length > 5) {
            return `${formattedCep.slice(0, 5)}-${formattedCep.slice(5, 8)}`;
        } else {
            return formattedCep;
        }
    };

    const handleCepChange = (e) => {
        const inputCep = e.target.value;
        const formattedCep = formatCep(inputCep);

        setCep(formattedCep);
    };

    const fetchCepData = async () => {
        if (!cepRegex.test(cep)) {
            setError('CEP inválido. O formato deve ser "12345-678".');
            setAddress(null);
            return;
        }

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
            setAddress(response.data);
            setError(null); // Limpa qualquer erro anterior
        } catch (error) {
            setError('Endereço não encontrado. Verifique o CEP digitado.');
            console.error('Erro ao buscar informações de CEP:', error);
            setAddress(null); // Limpa os dados em caso de erro
        }
    };

    return (

        <div>
            <p>Olá! Me chamo Thiago Alves de Melo, e criei esse site para a atividade da fase 7 do curso de Sistemas para internet na FIAP.</p>
            <label>Consultar o meu CEP:</label>

            <InputGroup className="mb-3" size="lg">
            <FormControl
                type="text"
                value={cep}
                onChange={handleCepChange}
                placeholder="Digite o CEP"
            />
            <Button variant="outline-success" id="button-addon2" onClick={fetchCepData}>Consultar CEP</Button>{' '}
            </InputGroup>

            {error ? (
                <p className="error">{error}</p>
            ) : address ? (

                <div>
                    <EstiloCep>
                    <h3>Informações do CEP:</h3>
                    <p>CEP: {address.cep}</p>
                    <p>Logradouro: {address.logradouro}</p>
                    <p>Bairro: {address.bairro}</p>
                    <p>Localidade: {address.localidade}</p>
                    <p>UF: {address.uf}</p>
                    <p>DDD: {address.ddd}</p>
                    </EstiloCep>
                </div>
            ) : null}

        </div>
    );
}

export default Sobre;
