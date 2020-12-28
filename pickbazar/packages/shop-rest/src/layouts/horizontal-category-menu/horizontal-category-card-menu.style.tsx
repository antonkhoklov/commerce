import styled from "styled-components";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";

export const CategoryWrapper = styled.div<any>(
  css({
    maxWidth: "90%",
    margin: "25px auto",
    background: '#FFF'
  })
);

export const CategoryInner = styled.div<any>({
  position: "relative",
  padding: "15px 30px 15px 30px"
});

export const ProductName = styled.h5<any>({
  fontSize: "16px",
  padding: "10px",
  fontWeight: 500,
  color: "#505050",
  textTransform: "uppercase",
  borderBottom: "1px solid #F4F4F4",
});

export const SliderInnerItem = styled.div<any>({
  padding: "10px 15px",
});

export const ItemCard = styled.div<any>((props) =>
  css({
    textAlign: "center",
    width: "185px",
    height: "170px",
    borderRadius: 2,
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    border: props.active ? "2px solid" : "2px solid #fff",
    borderColor: props.active ? "primary.regular" : "#fff",
  })
);
export const ItemCard1 = styled.div<any>((props) =>
  css({
    textAlign: "center",
    width: "185px",
    height: "40px",
    borderRadius: 6,
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    border: props.active ? "2px solid" : "2px solid #fff",
    borderColor: props.active ? "primary.regular" : "#fff",
    marginTop: "15px",
  })
);

export const ItemCard2 = styled.div<any>((props) =>
  css({
    textAlign: "center",
    // height: '100px',
    width: "100px",
    borderRadius: "20px",
    padding: "2px",
    marginLeft: "5px",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    border: props.active ? "2px solid" : "2px solid #fff",
    borderColor: props.active ? "primary.regular" : "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  })
);

export const ItemCard3 = styled.div<any>((props) =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    // height: '100px',
    borderRadius: "10px",
    marginLeft: "15px",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    border: props.active ? "2px solid" : "2px solid #fff",
    borderColor: props.active ? "primary.regular" : "#fff",
  })
);

export const ImageWrapperb = styled.div<any>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100px",
  width: "100px",
  position: "relative",
  marginBottom: 3,
  borderRadius: '50%',
  overflow: "hidden",
  border: "2px solid #FFF",
  boxShadow: "0 2px 8px 0 rgba(0,0,0,.06)",
  backgroundColor: "#FFF",
  boxSizing: "border-box",
  img: {
    height: "100%",
  },
});

export const ImageWrappersb = styled.div<any>({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  width: "100px",
  position: "relative",
  overflow: "hidden",
  marginBottom: 3,
  // borderRadius: '50%',
  border: "2px solid #FFF",
  // boxShadow: "0 2px 8px 0 rgba(0,0,0,.06)",
  backgroundColor: "#FFF",
  img: {
    // height: '100%',
    width: "100%",
  },
});

export const ImageWrapper = styled.div<any>({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 120,
  width: 200,
  position: "relative",
  overflow: "hidden",
  marginBottom: 3,

  img: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});
export const Title = styled.span<any>(
  css({
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#818181",
    textAlign: "center",
    padding: "0 0 0",
    display: "block",
    fontSize: 11,
    paddingTop: "10px",
    lineHeight: "10px",
  })
);

export const Divider = styled.div`
  padding: 2px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    font-family: ${themeGet("fonts.body", "Lato")};
    font-size: ${themeGet("fontSizes.base", "15")}px;
    font-weight: ${themeGet("fontWeights.regular", "400")};
    color: ${themeGet("colors.text.bold", "#0D1136")};
    line-height: 1;
    background-color: ${themeGet("colors.white", "#ffffff")};
    z-index: 1;
    position: relative;
    padding: 0 10px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${themeGet("colors.black", "#000000")};
    position: absolute;
    top: 50%;
  }
`;
export const SliderNav = styled.button({
  width: 30,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "text.bold",
  backgroundColor: "white",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
  outline: 0,
  padding: 0,
  border: 0,
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  marginTop: "-15px",
  zIndex: 1,
  cursor: "pointer",

  svg: {
    width: 18,
    maxHeight: 18,
  },

  "&.swiper-button-disabled": {
    display: "none",
  },

  "&.banner-slider-prev": {
    left: -15,
  },

  "&.banner-slider-next": {
    right: -15,
  },
});
