import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import CloseSvg from '../../assets/close.svg';
import IncomeSvg from '../../assets/income.svg';
import OutcomeSvg from '../../assets/outcome.svg';
import { api } from '../../services/api';

import { Container, RadioButton, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose
}: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {
            title, 
            amount, 
            type, 
            category,
            createdAt: new Date()
        };

        api.post('/transactions', data);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={CloseSvg} alt="Close" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Registar transação</h2>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioButton 
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeSvg} alt="Entradas" />
                        <span>Entrada</span>
                    </RadioButton>

                    <RadioButton 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeSvg} alt="Saída" />
                        <span>Saída</span>
                    </RadioButton>        
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />  

                <button type="submit">
                    Registar
                </button>              
            </Container>
        </Modal>
    );

}