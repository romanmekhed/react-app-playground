import { createGlobalStyle } from 'styled-components';

const GraphStyles = createGlobalStyle`
  .recharts-cartesian-axis-tick-value {
    font-size: 12px;
  }
  .recharts-cartesian-axis-tick-line {
    stroke: none;
  }
  .recharts-cartesian-grid-horizontal {
    opacity: .3
  }
  .recharts-xAxis {
    .recharts-cartesian-axis-line {
      opacity: 0;
    }
  }
`;

export default GraphStyles;
