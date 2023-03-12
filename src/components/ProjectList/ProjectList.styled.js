import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardLink = styled(NavLink)`
  text-decoration: none;
  color: green;
`;
export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding-top: 40px;
  padding-bottom: 40px;
`;
export const Title = styled.h2`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Item = styled.li`
  padding: 24px;
  flex-basis: calc((100% - 60px) / 3);
  border: 1px solid green;
  border-radius: 8px;

  min-height: 280px;
  background-color: ${({ backgroundColorDone, backgroundColorPriority }) => {
    if (backgroundColorDone) {
      return 'rgba(0, 0, 0, 0.5)';
    } else if (backgroundColorPriority) {
      return 'rgba(255, 192, 98, 0.5)';
    } else {
      return 'transparent';
    }
  }};
  list-style: none;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  -webkit-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  -moz-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  transform: scale(1);
  transition: transform 200ms linear;

  img {
    display: block;
    height: 100%;
    width: 100%;

    object-fit: contain;
    object-position: center;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
