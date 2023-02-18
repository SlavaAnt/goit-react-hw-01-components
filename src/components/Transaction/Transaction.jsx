import PropTypes from 'prop-types';
import css from './Transaction.module.css';
export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <tr className={css.table}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};
Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
