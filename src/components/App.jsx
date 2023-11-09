import { GlobalStyle } from './GlobalStyle';
import React, { PureComponent } from 'react';
import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends PureComponent {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section />
        <GlobalStyle />
      </>
    );
  }
}

// export default App;
