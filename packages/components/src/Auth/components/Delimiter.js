import React from 'react';
import styled from 'styled-components';

const Delimiter = () => {
    return (
        <Wrapper>
            <span>o</span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    text-align: center;
    overflow: hidden;
    margin-bottom: 20px;
    font-family: system-ui;
    span {
        position: relative;
        display: inline-block;
        padding: 0 10px;
        :before, :after {
            content: '';
            position: absolute;
            height: 1px;
            background: #cbcbcb;
            top: 50%;
        }
        :before {
            right: 100%;
            left: -999px;
        }
        :after {
            left: 100%;
            right: -999px;
        }
    }
`;


export default Delimiter;
