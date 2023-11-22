import styled from "styled-components";

const Container = styled.div`
  /* width: 300px; */
  /* margin: 20px 10px; */
  display: flex;
  align-items: center;
  margin: 30px 0;

  @media (max-width: 768px) {
    /* transform: scale(0.5);
    margin: -25px; */
    flex-direction: column;
    margin: 12px 0;
  }
`;
const Number = styled.div`
  color: #fff;
  font-family: Lato;
  font-size: 24.342px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 34.079px */
  margin-right: 20px;
  @media (max-width: 768px) {
    color: #fff;
    font-family: Black Han Sans;
    font-size: 8.956px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 12.539px */
  }
`;

const SellerBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
`;

const Avatar = styled.div<{ $avatar: string }>`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 1521.39px;
  background-image: url(${(props) => props.$avatar});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    width: 36.792px;
    height: 36.792px;
  }
`;

const InfoBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UpperText = styled.div`
  color: #fff;
  font-family: Lato;
  font-size: 24.342px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 34.079px */
  @media (max-width: 768px) {
    color: #fff;
    font-family: Lato;
    font-size: 8.956px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 12.539px */
  }
`;

const Balance = styled.div`
  color: #717171;
  font-family: Lato;
  font-size: 24.342px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 34.079px */
  @media (max-width: 768px) {
    color: #717171;
    font-family: Lato;
    font-size: 8.956px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 12.539px */
  }
`;

export const Seller = ({
  number,
  sellerName,
  balance,
  avatar,
}: {
  number: number;
  sellerName: string;
  balance: number;
  avatar: string;
}) => {
  return (
    <Container>
      <Number>{number}</Number>
      <SellerBox>
        <Avatar $avatar={avatar} />
        <InfoBox>
          <UpperText>{sellerName}</UpperText>
          <Balance>{balance} SUI</Balance>
        </InfoBox>
      </SellerBox>
    </Container>
  );
};
