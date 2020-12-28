import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { ArrowNext } from "assets/icons/ArrowNext";
import { ArrowPrev } from "assets/icons/ArrowPrev";
import { useLocale } from "contexts/language/language.provider";
import CustomSlider from "./carousel-scroll-bar";

const ButtonPrev = styled("button")`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet("colors.white", "#ffffff")};
  color: ${themeGet("colors.primary.regular", "#009E7F")};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet("shadows.base", "0 3px 6px rgba(0, 0, 0, 0.16)")};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 40px;
  z-index: 99;
`;

const ButtonNext = styled("button")`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${themeGet("colors.primary.regular", "#009E7F")};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet("shadows.base", "0 3px 6px rgba(0, 0, 0, 0.16)")};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 40px;
  z-index: 99;
`;

const ButtonGroupWrapper = styled("div")``;

const PrevButton = ({ onClick, children }: any) => {
  return (
    <ButtonPrev
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="prevButton"
    >
      {children}
    </ButtonPrev>
  );
};
const NextButton = ({ onClick, children }: any) => {
  return (
    <ButtonNext
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="nextButton"
    >
      {children}
    </ButtonNext>
  );
};

const ButtonGroup = ({ next, previous }: any) => {
  const { isRtl }: any = useLocale();

  return (
    <ButtonGroupWrapper>
      {isRtl ? (
        <>
          <NextButton onClick={() => next()} className="rtl">
            <ArrowPrev />
          </NextButton>
          <PrevButton onClick={() => previous()}>
            <ArrowNext />
          </PrevButton>
        </>
      ) : (
        <>
          <PrevButton onClick={() => previous()}>
            <ArrowPrev />
          </PrevButton>
          <NextButton onClick={() => next()}>
            <ArrowNext />
          </NextButton>
        </>
      )}

      {/* if prop isRtl true swap prev and next btn */}
    </ButtonGroupWrapper>
  );
};

type Props = {
  data: any[] | undefined;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  props?: any;
  component?: any;
  autoPlay?: boolean;
  infinite?: boolean;
  isRtl?: boolean;
  customLeftArrow?: React.ReactElement;
  customRightArrow?: React.ReactElement;
  itemClass?: string;
  customButtonGroup?: string;
};
const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CustomCarousel({
  data,
  deviceType: { mobile, tablet, desktop },
  component,
  autoPlay = false,
  infinite = true,
  customLeftArrow,
  customRightArrow,
  itemClass,
  isRtl,
  customButtonGroup,
  ...props
}: Props) {
  const ref = useRef();
  return (
    <div dir="ltr">
      <Carousel
        ref={ref}
        arrows={false}
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        infinite={infinite}
        itemClass={itemClass}
        autoPlay={autoPlay}
        autoPlaySpeed={5000}
        renderButtonGroupOutside={true}
        additionalTransfrom={0}
        // customButtonGroup={<ButtonGroup />}
        customButtonGroup={
          customButtonGroup == "buttons" ? (
            <ButtonGroup />
          ) : customButtonGroup == "range" ? (
            <CustomSlider carouselState={ref.current} />
          ) : null
        }
        {...props}
        // use dir ltr when rtl true
      >
        {data.map((item: any, index: number) => {
          if (component) return component(item);
          return (
            <div
              style={{
                padding: desktop ? "0 10px" : "0 15px",
                overflow: "hidden",
                height: "100%",
                marginTop: 10
              }}
              key={index}
            >
              <a
                href={item.link}
                style={{ display: "flex", cursor: "pointer", height: '100%' }}
              >
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    position: "relative",
                  }}
                />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
