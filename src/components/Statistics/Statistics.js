import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>Good: {state.good}</StatisticsItem>
        <StatisticsItem>Neutral: {state.neutral}</StatisticsItem>
        <StatisticsItem>Bad: {state.bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>Positive feedback: {positivePercentage}</StatisticsItem>
      </StatisticsList>
    </>
  );
};
