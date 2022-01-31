import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import CarouselStyles from './CarouselStyles';
import Card from './Card';

const Carousel = ({
  slides,
  primaryColor,
  buttonText,
  cardInfo,
  cardSize,
  handleClick,
  autoplay = false,
  autoplaySpeed = 3000,
  swipe = true,
  buttonStyles,
  profitStyles,
  titleStyles,
  headStyles,
  contentStyles,
  infoStyles,
  bodyStyles,
  footerStyles,
  wrapperStyles,
  cardWrapperStyles,
  customSettings,
}) => {
  const cardItem = useRef(null);
  const carouselWrapper = useRef(null);
  let [pos, setPos] = useState(0);

  let updatePositionOfSlider = (activeIndex) => {
    const windowWidth = window.outerWidth;
    const cardWidth = cardItem.current.clientWidth;
    if (windowWidth < 600) {
      let position = (windowWidth - cardWidth) / 2 - 10;

      if (activeIndex > 0 && activeIndex < slides.length - 1) {
        setPos(0);
      } else if (activeIndex === 0) {
        setPos(-Math.abs(position));
      } else if (activeIndex === slides.length - 1) {
        setPos(position);
      }
    }
  };

  useEffect(() => {
    if (carouselWrapper !== null) {
      updatePositionOfSlider(0);
    }
  }, [carouselWrapper]);

  const defaultSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    autoplay,
    autoplaySpeed,
    swipe,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    speed: 500,
    slidesToShow: slides.length,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <DotsList color={primaryColor} pos={pos}>
        {dots}
      </DotsList>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          centerPadding: '0px',
        },
      },
    ],
    beforeChange(oldIndex, newIndex) {
      updatePositionOfSlider(newIndex);
    },
  };

  const settings = Object.assign(defaultSettings, customSettings);

  return (
    <Wrapper slidesAmount={slides.length} wrapperStyles={wrapperStyles}>
      <CarouselStyles />
      <InnerWrapper ref={carouselWrapper} pos={pos}>
        <Slider {...settings}>
          {slides.map((item, index) => (
            <Card
              key={index}
              number={index + 1}
              {...item}
              size={cardSize}
              cardInfo={cardInfo}
              buttonText={buttonText}
              primaryColor={primaryColor}
              handleClick={handleClick}
              forwardedRef={index === 0 ? cardItem : null}
              buttonStyles={buttonStyles}
              profitStyles={profitStyles}
              titleStyles={titleStyles}
              headStyles={headStyles}
              contentStyles={contentStyles}
              infoStyles={infoStyles}
              bodyStyles={bodyStyles}
              footerStyles={footerStyles}
              cardWrapperStyles={cardWrapperStyles}
            />
          ))}
        </Slider>
      </InnerWrapper>
    </Wrapper>
  );
};

const InnerWrapper = styled.div`
  .slick-track {
    opacity: 0;
  }
  .slick-slider .slick-list {
    transition: transform 0.3s;
    transform: ${({ pos }) => `translateX(${pos}px)`};
  }
`;

const Wrapper = styled.div`
  width: ${({ slidesAmount }) => (slidesAmount === 5 ? '1300px' : '1200px')};
  margin: 0 auto;
  max-width: 100%;
  font-family: inherit;
  overflow: hidden;
  padding: 25px 10px 0;

  ${({ wrapperStyles }) => wrapperStyles};
`;

const DotsList = styled.ul`
  li {
    &.slick-active {
      button {
        &:before {
          background: ${({ color }) => (color ? color : '#09C148')};
        }
      }
    }
  }
`;

export default Carousel;
