import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ statistics }) => {
  return (
    <ul>
      {statistics.map(arr => (
        <li key={arr[0]}>
          <span className={s.statName}>{arr[0]}</span>: {arr[1]}
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
};
export default Statistics;
