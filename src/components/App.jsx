import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Section/Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 24px;
  padding: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
`;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = option =>
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
    );
  }

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>

        <Section title="Statistic">
          {total ? (
            <Statistics
              state={this.state}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification />
          )}
        </Section>
        <GlobalStyle />
      </Wrapper>
    );
  }
}

export default App;
