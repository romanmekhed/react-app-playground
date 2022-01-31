import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CarouselStyles = createGlobalStyle`
.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-track,
.slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}
.slick-track:before,
.slick-track:after {
  display: table;
  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slide {
  display: none;
  float: left;

  height: 100%;
  min-height: 1px;
  transition: all .3s, opacity .5s;
  @media screen and (max-width: 767px) {
    transition: all .3s, opacity .3s;
  }
  &:not(.slick-active), &:not(.slick-current) {
    opacity: 0;
  }
  &.slick-cloned:not(.slick-active) {
    opacity: 1;
  }
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
.slick-track {
  margin: auto;
}

.slick-arrow {
  position: absolute;
  top: calc(50% - 17px);
  width: 34px;
  height: 34px;
  border-radius: 100%;
  background: #000;
  cursor: pointer;
  z-index: 2;
  border: 0;
  outline: none;
  font-size: 0;
  &:after {
    content: '';
    display: block;
    width: 11px;
    height: 19px;
    margin: auto;
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='19' viewBox='0 0 11 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.01307 0.8547C1.30776 0.557304 1.7158 0.397169 2.12383 0.397169C2.53186 0.397169 2.91722 0.557304 3.23458 0.8547L10.4885 8.1752C11.1005 8.79287 11.1005 9.77656 10.4885 10.3942L3.23458 17.7147C2.62253 18.3324 1.62512 18.3324 1.01307 17.7147C0.401027 17.0971 0.401027 16.1134 1.01307 15.4957L7.15622 9.29615L1.01307 3.07373C0.401027 2.45606 0.401027 1.44949 1.01307 0.8547Z' fill='white'/%3E%3C/svg%3E%0A");
  }
}

.slick-prev {
  left: 10px;
  &:after {
    transform: scaleX(-1);
  }
}
.slick-next {
  right: 10px;
}
.slick-dots {
  margin: 0;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0;
  width: 100%;
  li {
    position: relative;
    display: inline-block;
    cursor: pointer;
    button {
      display: block;
      padding: 0 5px;
      background: none;
      outline: none;
      line-height: 0px;
      font-size: 0px;
      color: red;
      cursor: pointer;
      border: 0;
      outline: 0;
      &:before {
        content: "";
        display: block;
        height: 13px;
        width: 13px;
        border: 1px solid #fff;
        box-sizing: border-box;
        border-radius: 50%;
        background: transparent;
        transition: all 0.1s ease;
      }
    }
    &.slick-active {
      button:before {
        background: #fff;
      }
    }
    &:not(.slick-active) {
      button:hover {
        &:before {
          background: transparent;
        }
      }
    }
  }
}
${({ customCss }) => (customCss ? customCss : '')};
`;
export default CarouselStyles;
