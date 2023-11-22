import styled from "styled-components";
import { H4, H2 } from "styles";

const ListContainer = styled.div`
  display: flex;
  max-width: 1500px;
  /* padding: 0 30px; */
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  padding: 18px;
  justify-content: space-between;
  align-items: center;
  border-radius: 1000px;
  background: #fff;
  cursor: pointer;
  &:hover {
    background-color: #aaa;
  }
  &:active {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 10px;
  }
`;

const SvgIcon = styled.svg`
  width: 30px;
  height: 30px;
  stroke: #111012;
`;

const H4WithFlex = styled(H2)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    color: #fff;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 116%; /* 20.88px */
    margin-right: 30px;
  }
`;

const H6WithMargin = styled(H4)`
  font-size: 24px;
  padding: 0 30px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Index = styled.span`
  margin-right: 12px;
  margin-left: -30px;
`;

export default function List({
  onBtnClick,
  visible,
  title,
  content,
  index,
}: {
  onBtnClick: (index: number) => void;
  visible: boolean;
  title: string;
  content: string;
  index: number;
}) {
  return (
    <ListContainer>
      <H4WithFlex $color="white" $weight={500}>
        <span style={{ marginLeft: 30 }}>
          <Index>{"0" + (index + 1)}</Index>
          {title}
        </span>
        <Button onClick={(e) => onBtnClick(index)}>
          {visible ? (
            <SvgIcon
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M13.9961 28.4561L14.0061 3.00021M14.0061 3.00021L26.729 15.7332M14.0061 3.00021L1.2732 15.7231"
                stroke="#111012"
                strokeWidth="3"
              />
            </SvgIcon>
          ) : (
            <SvgIcon
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M14.0039 0.456055L13.9939 25.9119M13.9939 25.9119L1.27096 13.1789M13.9939 25.9119L26.7268 13.189"
                stroke="#111012"
                strokeWidth="3"
              />
            </SvgIcon>
          )}
        </Button>
      </H4WithFlex>
      {visible && (
        <H6WithMargin $color="white" $weight={400}>
          {content}
        </H6WithMargin>
      )}
    </ListContainer>
  );
}
