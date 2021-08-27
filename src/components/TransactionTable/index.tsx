import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposit">€1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>27/08/2021</td>
                    </tr>
                    <tr>
                        <td>Fatura NOS</td>
                        <td className="withdraw">- €100,00</td>
                        <td>Casa</td>
                        <td>27/08/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}