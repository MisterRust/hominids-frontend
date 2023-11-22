import styled from "styled-components";

const Button = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  padding: 22px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10000px;
  border: 3px solid rgba(175, 80, 189, 0.4);
  transition: 0.1s all ease-in-out;
  &:hover {
    background: #af50bd;
  }
  &:active {
    transform: translate(4px, 4px);
  }
`;

const Span = styled.div`
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actay;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */
  letter-spacing: 0.72px;
  text-transform: uppercase;
`;

const Span1 = styled(Span)`
  font-size: 0.7em;
  display: inline;
`;

const ControlBox = styled.div`
  display: flex;
  width: 260px;
  justify-content: space-between;
  align-items: center;
`;

export const ControlButton = ({
  currInd,
  total,
}: {
  currInd: number;
  total: number;
}) => {
  return (
    <ControlBox>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M27.957 13.9998L2.50119 13.9998M2.50119 13.9998L15.2291 1.27184M2.50119 13.9998L15.2291 26.7277"
            stroke="white"
            strokeOpacity={0.6}
            strokeWidth="3"
          />
        </svg>
      </Button>
      <Span>
        {currInd + " / "} <Span1>{total + " "}</Span1>
      </Span>
      <Button>
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector 311"
            d="M0.957031 14L26.4129 14M26.4129 14L13.685 26.7279M26.4129 14L13.685 1.27208"
            stroke="white"
            strokeOpacity={0.6}
            strokeWidth="3"
          />
        </svg>
      </Button>
    </ControlBox>
  );
};
