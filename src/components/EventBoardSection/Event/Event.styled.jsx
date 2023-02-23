import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: ${props => `2px dashed ${props.theme.colors.black}`};
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
`;
export const EventName = styled.h2`
  margin-top: 0;
  max-width: 160px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: ${props => props.theme.colors.secondaryText};
  }
`;

const setBgColor = ({
  eventType,
  theme: {
    colors: { black, green, red, blue },
  },
}) => {
  switch (eventType) {
    case 'free':
      return green;
    case 'paid':
      return blue;
    case 'vip':
      return red;
    default:
      return black;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  background-color: ${setBgColor};
`;
