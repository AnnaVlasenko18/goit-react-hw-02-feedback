import styled from 'styled-components';

export const FeedbackOptionsList = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const FeedbackButton = styled.button`
  margin-right: ${props => props.theme.spacing(2)};
  font-size: 20px;
  background: ${props => props.theme.colors.backgroundBtn};
  border-radius: ${props => props.theme.radii.sm};
  border: 1.5px solid ${props => props.theme.colors.backgroundBorder};
`;
