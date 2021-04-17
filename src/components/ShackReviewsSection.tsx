import React from "react";
import { styled } from "../utils/theme";

interface ShackReviewsSectionProps {
  readonly headline?: string;
  readonly reviews?: React.ReactNode;
}

const StyledReviewsSection = styled.div`
  font-size: 1.2rem;
  grid-area: reviews;
`;

const StyledReviewsHeadline = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledReviews = styled.div`
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
`;

export const ShackReviewsSection: React.SFC<ShackReviewsSectionProps> = ({
  headline,
  reviews,
  children,
}) => (
  <StyledReviewsSection>
    {headline && <StyledReviewsHeadline>{headline}</StyledReviewsHeadline>}
    {reviews && <StyledReviews>{reviews}</StyledReviews>}
    {children}
  </StyledReviewsSection>
);

const StyledShackFormRatingSlider = styled.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  padding: 1rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${(props) => props.theme.colors.colorSecondary};
    cursor: pointer;
    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  &::-moz-range-thumb {
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${(props) => props.theme.colors.colorSecondary};
    cursor: pointer;
  }

  &:focus {
    outline: none; /* Removes the blue border. */
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: ${(props) => props.theme.colors.colorSecondaryLight};
    border-radius: 1.3px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.colors.colorSecondary};
  }

  &::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: ${(props) => props.theme.colors.colorSecondaryLight};
    border-radius: 1.3px;
  }
`;

export interface ShackFormRatingSliderProps {
  readonly name: string;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value?: string | number | undefined;
  readonly min?: string;
  readonly max?: string;
}

export const ShackFormRatingSlider: React.FC<ShackFormRatingSliderProps> = ({
  name,
  onChange,
  min,
  max,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <StyledShackFormRatingSlider
      type="range"
      name={name}
      onChange={handleChange}
      min={min}
      max={max}
    />
  );
};

interface ShackFormRatingSliderWrapperProps {
  readonly slider: JSX.Element;
  readonly value: string;
}

const StyledShackFormRatingSliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledFormRatingValue = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.colorSecondary};
  font-weight: 600;
`;

export const ShackFormRatingSliderWrapper: React.FC<ShackFormRatingSliderWrapperProps> = ({
  slider,
  value,
}) => {
  return (
    <StyledShackFormRatingSliderWrapper>
      {slider}
      <StyledFormRatingValue>{value ? value : "?"}</StyledFormRatingValue>
    </StyledShackFormRatingSliderWrapper>
  );
};
