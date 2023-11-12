// import { startTransition } from 'react';
import { FeedbackOptionsList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(options[0])}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(options[1])}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" onClick={() => onLeaveFeedback(options[2])}>
        Bad
      </FeedbackButton>
    </FeedbackOptionsList>
  );
};
