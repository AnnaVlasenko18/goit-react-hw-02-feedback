import styled from 'styled-components';

export const FeedbackOptionsList = styled.div`
  display: flex;
`;

export const FeedbackButton = styled.button`
  height: 34px;
  margin-right: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.backgroundBtn};
  border-radius: ${props => props.theme.radii.sm};
  border: 1.5px solid ${props => props.theme.colors.backgroundBorder};

  &:hover {
    background: ${props => props.theme.colors.backgroundBorder};
    color: ${props => props.theme.colors.accentColorBtn};
  }
`;
