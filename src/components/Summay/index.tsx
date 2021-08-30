import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {

    const {transactions} = useTransactions();
    
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeSvg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-PT', {
                                        style: 'currency',
                                        currency: 'EUR',

                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeSvg} alt="saídas" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-PT', {
                                        style: 'currency',
                                        currency: 'EUR',

                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalSvg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-PT', {
                                        style: 'currency',
                                        currency: 'EUR',

                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}