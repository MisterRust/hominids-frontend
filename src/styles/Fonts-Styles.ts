import { styled } from "styled-components";

interface FontProps {
  $weight: number;
  $color: string;
  $style?: string;
  $align?: string;
}

interface SpanProps {
  $color: string;
}

export const H1 = styled.h1<FontProps>`
  font-size: 64px;
  line-height: 78px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  font-family: ${(props) =>
    props.$style === "Actay"
      ? "Actay"
      : props.$style === "Black"
      ? "'Black Han Sans', sans-serif"
      : ""};
  text-align: ${(props) => props.$align};
`;

export const H2 = styled.h2<FontProps>`
  font-size: 48px;
  line-height: 56px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  font-family: ${(props) =>
    props.$style === "Actay"
      ? "Actay"
      : props.$style === "Black"
      ? "'Black Han Sans', sans-serif"
      : ""};
  text-align: ${(props) => props.$align}
`;

export const H3 = styled.h3<FontProps>`
  font-size: 40px;
  line-height: 40px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  font-family: ${(props) =>
    props.$style === "Actay"
      ? "Actay"
      : props.$style === "Black"
      ? "'Black Han Sans', sans-serif"
      : ""};
  text-align: ${(props) => props.$align}
`;

export const H4 = styled.h2<FontProps>`
  font-size: 24px;
  line-height: 28px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  font-family: ${(props) =>
    props.$style === "Actay"
      ? "Actay"
      : props.$style === "Black"
      ? "'Black Han Sans', sans-serif"
      : ""};
  text-align: ${(props) => props.$align};
   @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const H5 = styled.h5<FontProps>`
  font-size: 20px;
  line-height: 28px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  font-family: ${(props) =>
    props.$style === "Actay"
      ? "Actay"
      : props.$style === "Black"
      ? "'Black Han Sans', sans-serif"
      : ""};
  text-align: ${(props) => props.$align}n
`;

export const LH6 = styled.h6<FontProps>`
  font-size: 18px;
  line-height: 22px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  font-family: ${(props) =>
    props.$style === "Actay"
      ? "Actay"
      : props.$style === "Black"
      ? "'Black Han Sans', sans-serif"
      : ""};
  text-align: ${(props) => props.$align}n
`;

export const H6 = styled.h6<FontProps>`
  font-size: 16px;
  line-height: 20px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  text-align: ${(props) => props.$align};
`;

export const SH6 = styled.h6<FontProps>`
  font-size: 12px;
  line-height: 14px;
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  text-align: ${(props) => props.$align};
`;

export const Span = styled.span<SpanProps>`
  color: ${(props) => props.$color};
`;
