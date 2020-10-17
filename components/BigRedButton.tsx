// Adapted from https://codepen.io/JoeHastings/pen/MwoOeW

import styled from '@emotion/styled';
import { CSSProperties } from 'react';

const Button = styled.div(({ size }: { size: number }) => {
  const dropSize = 15;
  const color = '#f74d4d';
  const color2 = '#f86569';
  const dropColor = '#e24f4f';

  return {
    width: size,
    height: size - (size / 10),
    lineHeight: size,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
    background: color,
    backgroundImage: `-webkit-gradient(linear, left top, left bottom, color-stop(0%, ${color}), color-stop(100%, ${color2}))`,
    boxShadow: `0 ${dropSize}px ${dropColor}`,
    ':active': {
      boxShadow: `0 0  ${dropColor}`,
      transform: `translate(0px, ${dropSize}px)`,
      transition: 'transition(0.1s all ease-out)',
    },
  }
});

interface Props {
  onClick: () => void;
  size?: number;
  style?: CSSProperties;
}

const BigRedButton = ({ onClick, size, style }: Props) => (
  <Button onClick={onClick} size={size || 200} style={style}/>
);

export default BigRedButton;
