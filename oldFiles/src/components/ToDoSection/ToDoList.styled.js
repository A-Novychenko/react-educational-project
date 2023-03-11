import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  gap: 24px; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;
export const Item = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 16px;

  border: 3px solid
    ${props => (props.complited ? 'rgb(0, 255, 0)' : 'rgb(255, 0, 0)')};
  background-color: ${props =>
    props.complited ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)'};

  width: 300px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: white;
  color: ${({ typeBtn }) => {
    switch (typeBtn) {
      case 'add':
        return 'green';
      case 'del':
        return 'red';

      default:
        return 'black';
    }
  }};
`;
