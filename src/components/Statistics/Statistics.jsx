import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <div>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
