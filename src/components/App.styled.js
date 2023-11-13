import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 24px;
  padding: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
`;
