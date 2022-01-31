import { createGlobalStyle } from 'styled-components';

const IconAnimations = createGlobalStyle`
  @keyframes wave-animation {
    0% {
      opacity: 0.1;
      transform: scale(1);
    }

    10% {
      opacity: 0.2;
      transform: scale(1.025);
    }

    20% {
      opacity: 0.3;
      transform: scale(1.05);
    }

    30% {
      opacity: 0.25;
      transform: scale(1.075);
    }

    40% {
      opacity: 0.5;
      transform: scale(1.1);
    }

    50% {
      opacity: 0.6;
      transform: scale(1.125);
    }

    60% {
      opacity: 0.7;
      transform: scale(1.15);
    }

    70% {
      opacity: 0.55;
      transform: scale(1.175);
    }

    80% {
      opacity: 0.9;
      transform: scale(1.2);
    }

    90% {
      opacity: 0.95;
      transform: scale(1.225);
    }

    100% {
      opacity: 1;
      transform: scale(1.25);
    }
  }

  @keyframes phone-animation {
    0% {
      -webkit-transform: rotate(0) scale(0.85) skew(1deg);
      transform: rotate(0) scale(0.85) skew(1deg);
    }

    10% {
      -webkit-transform: rotate(-25deg) scale(0.9) skew(1deg);
      transform: rotate(-25deg) scale(0.9) skew(1deg);
    }

    20% {
      -webkit-transform: rotate(25deg) scale(0.92) skew(1deg);
      transform: rotate(25deg) scale(0.92) skew(1deg);
    }

    30% {
      -webkit-transform: rotate(-25deg) scale(0.93) skew(1deg);
      transform: rotate(-25deg) scale(0.93) skew(1deg);
    }

    40% {
      -webkit-transform: rotate(25deg) scale(0.95) skew(1deg);
      transform: rotate(25deg) scale(0.95) skew(1deg);
    }

    50% {
      -webkit-transform: rotate(0) scale(0.93) skew(1deg);
      transform: rotate(0) scale(0.93) skew(1deg);
    }

    100% {
      -webkit-transform: rotate(0) scale(0.9) skew(1deg);
      transform: rotate(0) scale(0.9) skew(1deg);
    }
  }

  .animated {
    display: block;
    overflow: visible;
    &__waves {
      transform-box: fill-box;
      -webkit-animation: wave-animation 1.2s infinite;
      -moz-animation: wave-animation 1.2s infinite;
      -o-animation: wave-animation 1.2s infinite;
      animation: wave-animation 1.2s infinite;
      -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    &__phone {
      transform-box: fill-box;
      -webkit-animation: phone-animation 1.5s infinite ease-in-out;
      -moz-animation: phone-animation 1.5s infinite ease-in-out;
      -o-animation: phone-animation 1.5s infinite ease-in-out;
      animation: phone-animation 1.5s infinite ease-in-out;
      transition: all 0.5s;
      -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: rotate(0) scale(0.95) skew(1deg);
      transform: rotate(0) scale(0.95) skew(1deg);
    }
  }
`;

export default IconAnimations;
