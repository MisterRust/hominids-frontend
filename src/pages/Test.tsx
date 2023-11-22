import styled from "styled-components";
import Header from "../components/layout/header";

// import { TabButton } from "components/buttons";
// import { AcutionCard, Card, NftCard2 } from "components/cards";
// import { AboutUs } from "components/about_us";
// import { Seller } from "components/sellers";
// import userImg from "../assets/cards/user_avatar.png";
// import bgImg from "../assets/cards/card_avatar.png";
// import nftImg from "../assets/cards/nft_avatar.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #111012;
`;
export default function Test() {
  return (
    <Container>
      {/* <TabButton text={"Title"} hover={true} active={true} />
      <Card
        userImg={userImg}
        name={"Homininds"}
        timeRemained={"12H:23M:02S"}
        cardBgImg={bgImg}
        mint={1672}
      />
      <AcutionCard userImg={userImg} />
      <AboutUs />
      <Seller
        number={1}
        sellerName={"@dajfs"}
        balance={21887}
        avatar={userImg}
      /> */}
      <Header />
    </Container>
  );
}
