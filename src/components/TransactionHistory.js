import { Tbody, Column } from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) => {
    const keys = Object.keys(items[0]).slice(1)
     return (
        <table>
            <thead>
            <tr>
                {keys.map(key =>
                    <Column key={keys.indexOf(key)}>{key}</Column>
                )
                }
            </tr>
            </thead>
            <Tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}

            </Tbody>
        </table> 
) 
}
