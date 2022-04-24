import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { useState } from 'react';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClick = ({ target }) => {
    setState(state => {
      return {
        ...state,
        [target.dataset.option]: state[target.dataset.option] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, cur) => acc + cur, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((state.good / countTotalFeedback()) * 100)}%`;
  };

  const statistics = [
    ...Object.entries(state),
    ['total', countTotalFeedback()],
    ['positive feedback', countPositiveFeedbackPercentage()],
  ];
  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={state} onLeaveFeedback={onClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics statistics={statistics} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
