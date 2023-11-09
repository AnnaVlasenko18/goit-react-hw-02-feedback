import { FeedbackOptionsList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = () => {
  return (
    <FeedbackOptionsList>
      <FeedbackButton>Good</FeedbackButton>
      <FeedbackButton>Neutral</FeedbackButton>
      <FeedbackButton>Bad</FeedbackButton>
    </FeedbackOptionsList>
  );
};
