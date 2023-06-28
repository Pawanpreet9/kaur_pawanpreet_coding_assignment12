import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImg.types";



const StyledHeroImage = styled.div<HeroImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#cccccc" : props.backgroundColor)};
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled, backgroundColor }) => {
  return <StyledHeroImage data-testid="hero-image" src={src} alt={alt} disabled={disabled} backgroundColor={backgroundColor} />;
};

export default HeroImage;
