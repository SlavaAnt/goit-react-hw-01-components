import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {transactions.map(transaction => (
          <tbody key={transaction.id}>
            <Transaction transaction={transaction} />
          </tbody>
        ))}
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
