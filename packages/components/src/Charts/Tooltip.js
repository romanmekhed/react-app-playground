import React from 'react';
import styled from 'styled-components';

const Tooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    let d = label;
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let formatLabel = ` ${mo} ${day}, ${ye}`;

    const val = Intl.NumberFormat('en-US').format(payload[0].value);

    return (
      <Wrapper>
        <DateLabel>{formatLabel}</DateLabel>
        <PriceLabel>
          Price: <b>{`${val}`}</b>
        </PriceLabel>
      </Wrapper>
    );
  }

  return null;
};

const Wrapper = styled.div`
  padding: 7px 10px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 5px 32px rgb(0, 0, 0, 15%);
`;

const DateLabel = styled.div`
  font-weight: bold;
`;

const PriceLabel = styled.div`
  b {
    font-weight: bold;
  }
`;

export default Tooltip;
