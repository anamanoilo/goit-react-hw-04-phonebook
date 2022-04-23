import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = ({ target }) => {
    this.setState(state => {
      return {
        ...state,
        [target.dataset.option]: state[target.dataset.option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, cur) => acc + cur, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };

  render() {
    const {
      onClick,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      state,
    } = this;
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
}
