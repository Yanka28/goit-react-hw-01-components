import PropTypes from 'prop-types';
import {
  Table,
  TitleTrHist,
  Tbody,
  Column,
  Cell,
  CellType,
  Row,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const keys = Object.keys(items[0]).slice(1);
  return (
    <Table>
      <TitleTrHist>
        <tr>
          {keys.map(key => (
            <Column key={keys.indexOf(key)}>{key}</Column>
          ))}
        </tr>
      </TitleTrHist>
      <Tbody>
        {items.map(item => (
          <Row key={item.id} boole={(items.indexOf(item) % 2).toString()}>
            <CellType>{item.type}</CellType>
            <Cell>{item.amount}</Cell>
            <Cell>{item.currency}</Cell>
          </Row>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
