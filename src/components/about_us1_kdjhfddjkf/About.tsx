import styled from "styled-components";
import { GradientButton } from "components/buttons";
import avatar from "../../assets/about.png";

const AboutContainer = styled.div`
  display: flex;
  max-width: 1440px;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    width: 327px;
  }
`;

const Box = styled.div`
  max-width: 1440px;
  height: 646px;
  padding: 40px 100px;
  flex-shrink: 0;
  border-radius: 1000px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 768px) {
    height: 542px;
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
  @media (max-width: 768px) {
    padding: 60px 30px;
    overflow: hidden;
    text-align: center;
    padding: 0;
  }
`;

const Content = styled.div`
  width: 537px;
  color: #fff;
  font-family: Black Han Sans;
  font-size: 24px;
  font-style: normal;
  line-height: 123%; /* 29.52px */
  text-transform: uppercase;
  padding: 10px;
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
  border-radius: 1000px;
  right: 0;
  flex-shrink: 0;
  fill: rgba(184, 128, 255, 0.04);
  stroke-width: 3px;
  stroke: #5d3068;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(50px);
`;

const Avatar = styled.img`
  width: 450px;
  height: 414px;
  position: absolute;
  bottom: 0;
  left: 140px;
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
