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
    padding-bottom: 30px;
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: visible;
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
    @media screen and (max-width: 550px) {
      transition: all .3s;
      &:not(.slick-active) {
        transform: scale(0.95);
        filter: grayscale(1);
      }
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
  .slick-prev,
  .slick-next {
    position: absolute;
    display: block;
    height: 20px;
    width: 20px;
    line-height: 0px;
    font-size: 0px;
    cursor: pointer;
    background: transparent;
    color: transparent;
    top: 50%;
    margin-top: -10px;
    padding: 0;
    border: none;
    outline: none;
    &:hover,
    &:focus {
      outline: none;
      background: transparent;
      color: transparent;
      &:before {
        opacity: 1;
      }
    }
    &.slick-disabled:before {
      opacity: 0.25;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    line-height: 1;
    color: white;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-prev {
    left: -25px;
    [dir="rtl"] & {
      left: auto;
      right: -25px;
    }
    &:before {
      content: "←";
      [dir="rtl"] & {
        content: "→";
      }
    }
  }
  .slick-next {
    right: -25px;
    [dir="rtl"] & {
      left: -25px;
      right: auto;
    }
    &:before {
      content: "→";
      [dir="rtl"] & {
        content: "←";
      }
    }
  }
  .slick-dots {
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    width: 100%;
    margin: 20px 0;
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
          height: 16px;
          width: 16px;
          box-sizing: border-box;
          border-radius: 50%;
          background: #d6d6d6;
          transition: all 0.1s ease;
        }
      }
      &:not(.slick-active) {
        button:hover {
          &:before {
            background: #869791;
          }
        }
      }
    }
  }
`;
export default CarouselStyles;
