import React from "react";
import Title from "./Title";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";

const Section = ({
  children,
  title,
  bgImg,
  textColor,
  showGradient = false,
  bgColor,
  titleColor,
  className,
  showThreeGrids,
}) => {
  return (
    <StyledSection
      $bgImg={bgImg}
      $showGradient={showGradient}
      $bgColor={bgColor}
      className={className}
    >
      <Title title={title} titleColor={titleColor} />
      <ContentContainer textColor={textColor} showThreeGrids={showThreeGrids}>
        {children}
      </ContentContainer>
    </StyledSection>
  );
};

export default Section;

const StyledSection = styled.section`
  background: ${(props) =>
      props.$showGradient
        ? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),"
        : ""}
    ${(props) => (props.$bgImg ? `url(${props.$bgImg})` : props.$bgColor)};
  min-height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 20px 0 80px 0;
`;
