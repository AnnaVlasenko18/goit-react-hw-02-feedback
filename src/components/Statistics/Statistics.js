import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = () => {
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsList>
        <StatisticsItem>Good: </StatisticsItem>
        <StatisticsItem>Neutral: </StatisticsItem>
        <StatisticsItem>Bad: </StatisticsItem>
        <StatisticsItem>Total: </StatisticsItem>
        <StatisticsItem>Positive feedback: </StatisticsItem>
      </StatisticsList>
    </div>
  );
};
