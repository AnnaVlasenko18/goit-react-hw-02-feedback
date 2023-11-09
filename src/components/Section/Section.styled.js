import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 24px;
  padding: ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.radii.sm};
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
`;

export const ContainerTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(6)};
`;
