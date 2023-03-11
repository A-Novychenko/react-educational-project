import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px;
`;

export const Section = styled.section`
  padding: 30px;
  background-color: ${props => props.bgColor && 'rgb(255, 255, 183)'};
`;
