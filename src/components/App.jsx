import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = e => {
    switch (e.target.dataset.id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((good / countTotalFeedback()) * 100)}%`;
  };

  const statistics = [
    ...Object.entries({ good, neutral, bad }),
    ['total', countTotalFeedback()],
    ['positive feedback', countPositiveFeedbackPercentage()],
  ];
  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onClick}
        />
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

export default App;
