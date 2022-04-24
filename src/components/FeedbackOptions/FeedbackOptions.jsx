import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsKeys = [...Object.keys(options)];
  return (
    <div className={s.btnWrapper}>
      {optionsKeys.map(key => (
        <button
          key={key}
          type="button"
          onClick={onLeaveFeedback}
          data-id={key}
          className={s.button}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
