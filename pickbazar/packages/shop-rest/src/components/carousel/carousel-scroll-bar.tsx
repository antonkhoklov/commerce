import styled from "styled-components";

const Container = styled("div")`
  width: 87%;
  margin: 0 auto;
`;

export default function CustomSlider({ carouselState }) {
  let value = 0;
  let carouselItemWidth = 0;
  if (carouselState) {
    carouselItemWidth = carouselState.itemWidth;
    const maxTranslateX = Math.round(
      carouselItemWidth *
        (carouselState.totalItems - carouselState.slidesToShow) +
        150
    );
    value = maxTranslateX / 100;
  }
  const { transform } = carouselState;

  return (
    <Container>
      <input
        type="range"
        className="input"
        value={Math.round(Math.abs(transform) / value)}
        defaultValue={0}
        max={
          (carouselItemWidth *
            (carouselState.totalItems - carouselState.slidesToShow) +
            (carouselState.additionalTransfrom === 150 ? 0 : 150)) /
          value
        }
        style={{
          width: "100%",
        }}
      />
    </Container>
  );
}
