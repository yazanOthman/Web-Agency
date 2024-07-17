import React from "react";
import styled from "styled-components";

const ContentContainer = ({ children, textColor, width, showThreeGrids }) => {
  return (
    <StyledContainer
      $color={textColor}
      $width={width}
      $showThreeGrids={showThreeGrids}
    >
      {children}
    </StyledContainer>
  );
};

export default ContentContainer;

const StyledContainer = styled.div`
  max-width: ${(props) => props.$width || "90vw"};
  margin: 0 auto;
  color: ${(props) => props.$color || ""};

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  ${(props) =>
    props.$showThreeGrids
      ? `@media screen and (min-width:  992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }`
      : ""}
`;
