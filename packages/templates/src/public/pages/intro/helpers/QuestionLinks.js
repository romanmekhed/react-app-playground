import React from 'react';
import styled from 'styled-components';

import { TO_DESKTOP } from 'helpers/styles/media';

const QuestionLinks = ({ links }) => {
  return (
    <>
      {links && (
        <QuestionWrap>
          {links.map(({ label, link }, idx) => (
            <ListItem key={idx}>
              <a target='_blank' href={link} rel='noopener noreferrer'>
                {label}
              </a>
            </ListItem>
          ))}
        </QuestionWrap>
      )}
    </>
  );
};

const QuestionWrap = styled.ul`
  display: block;
  padding-left: 0px;
`;

const ListItem = styled.li`
  display: block;
  font-size: 15px;

  @media ${TO_DESKTOP} {
    font-size: 13px;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default QuestionLinks;
