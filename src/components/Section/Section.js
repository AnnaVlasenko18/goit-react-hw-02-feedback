import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Container, ContainerTitle } from './Section.styled';

export const Section = () => {
  return (
    <Container>
      <ContainerTitle>Please leave feedback</ContainerTitle>
      <FeedbackOptions />
      <>
        <Statistics />
      </>
    </Container>
  );
};
