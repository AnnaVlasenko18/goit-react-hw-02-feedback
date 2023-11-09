import styled from 'styled-components';

export const StatisticsList = styled.ul`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const StatisticsItem = styled.li`
  margin-bottom: ${props => props.theme.spacing(3)};
  font-size: 20px;
`;
