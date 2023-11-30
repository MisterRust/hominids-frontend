import styled from "styled-components";
import { GradientButton } from "components/buttons";
import avatar from "../../assets/about.png";

const AboutContainer = styled.div`
  display: flex;
  max-width: 1440px;
  padding: 0 30px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    width: 327px;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 346px;
  padding: 40px 100px;
  flex-shrink: 0;
  border-radius: 1000px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 1366px) {
    height: 420px;
  }
  @media (max-width: 768px) {
    height: 642px;
    width: 327px;
    padding: 60px 30px;
    overflow: hidden;
  }
`;
const Heading = styled.div`
  color: #fff;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%; /* 24.6px */
  padding: 10px;
  position: relative;
  z-index: 5;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  width: 537px;
  position: relative;
  z-index: 5;
  color: #fff;
  font-family: Black Han Sans;
  font-size: 24px;
  font-style: normal;
  line-height: 123%; /* 29.52px */
  text-transform: uppercase;
  padding: 10px;
  @media (max-width: 1366px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 320px;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 110%;
    text-align: center;
  }
`;

const AvatarBox = styled.div`
  width: 704px;
  height: 346px;
  position: absolute;
  z-index: 1;
  border-radius: 250px;
  right: 30px;
  flex-shrink: 0;
  fill: rgba(184, 128, 255, 0.04);
  stroke-width: 3px;
  stroke: #5d3068;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(50px);
  @media (max-width: 1366px) {
    height: 420px;
    width: 550px;
  }
  @media (max-width: 1000px) {
    backdrop-filter: unset;
    
  }
  @media (max-width: 768px) {
    visibility: hidden;
    backdrop-filter: unset;
    overflow: hidden;
    border-radius: 0;
    bottom: 0;
    right: 0;
    
  }
`;

const Avatar = styled.img`
  width: 450px;
  height: 414px;
  position: absolute;
  bottom: 0;
  left: 140px;
  @media (max-width: 1366px) {
    left: 70px;
  }
  @media (max-width: 768px) {
    visibility: visible;
    bottom: 4px;
    width: 300px;
    left: 222px;
    width: 327px;
    height: 300px;
    border-radius: 150px;
  }
`;

export const AboutUs = () => {
  return (
    <AboutContainer>
      <Box>
        <Heading>Dive into the Era-Homi metaverse!</Heading>
        <Content>
          Enjoy a never-before-seen social and artistic experience within our
          connected metaverse
        </Content>
        <GradientButton
          title={"READ MORE ABOUT US"}
          width={325}
          height={87}
          marginTop={20}
        />
      </Box>
      <AvatarBox>
        <Avatar src={avatar} />
      </AvatarBox>
    </AboutContainer>
  );
};
