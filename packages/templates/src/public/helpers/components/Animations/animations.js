import { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const slideRight = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
from {
  transform: translateX(50px);
}
to {
  transform: translateX(0px);
}
`;

const slideUp = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
from {
  transform: translateY(50px);
}
to {
  transform: translateY(0px);
}
`;

const slideLeft = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
from {
  transform: translateX(-50px);
}
to {
  transform: translateX(0px);
}
`;

const scaleByY = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
from {
  transform: scaleY(0);
}
to {
  transform: scaleY(1);
}
`;

const scaleByYText = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
from {
  transform: scaleY(0.25);
}
to {
  transform: scaleY(1);
}
`;

const animations = {
  fadeIn: css`
    will-change: opacity;
    animation: ${fadeIn} 1.1s cubic-bezier(0.52, 0.01, 0.16, 1) forwards;
  `,
  slideRight: css`
    will-change: transform, opacity;
    animation: ${slideRight} 1s cubic-bezier(0.52, 0.01, 0.16, 1) forwards;
  `,
  slideLeft: css`
    will-change: transform, opacity;
    animation: ${slideLeft} 1s cubic-bezier(0.52, 0.01, 0.16, 1) forwards;
  `,
  slideUp: css`
    will-change: transform, opacity;
    animation: ${slideUp} 1s cubic-bezier(0.52, 0.01, 0.16, 1) forwards;
  `,
  scaleByY: css`
    will-change: transform, opacity;
    animation: ${scaleByY} 0.7s cubic-bezier(0.7, 0.3, 0, 1) forwards;
    p {
      will-change: transform, opacity;
      animation: ${scaleByYText} 0.8s cubic-bezier(0.7, 0.3, 0, 1) forwards;
    }
  `,
};

export default animations;
