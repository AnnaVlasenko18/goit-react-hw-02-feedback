import { ContainerTitle, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <ContainerTitle>
      {title && <Title>{title}</Title>} {children}
    </ContainerTitle>
  );
};
