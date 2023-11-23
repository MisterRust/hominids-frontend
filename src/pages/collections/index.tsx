// import { CollectionBg } from "components/lpbanner/CollectionBg";
import { useState } from "react";
import { styled } from "styled-components";
import FancyGoo from "components/svg/Fancy-Goo";
import Header from "components/layout/header";
import { H1, H2 } from "styles";
import userImg from "../../assets/cards/hominids_mark.png";

const Img = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${userImg});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

const COLLECTION = (
  <>
    <Img /> <span>Hominids</span>
  </>
);

const TABLE_DATA = [
  {
    collection: "",
    floor: 1672,
    offer: 1672,
    hVol: 1672,
    percent: 0.76,
    sales: 888,
    total: 1672,
    owners: 888,
    supply: 888,
  },
  {
    collection: COLLECTION,
    floor: 1672,
    offer: 1672,
    hVol: 1672,
    percent: 0.76,
    sales: 888,
    total: 1672,
    owners: 888,
    supply: 888,
  },
  {
    collection: COLLECTION,
    floor: 1672,
    offer: 1672,
    hVol: 1672,
    percent: 0.76,
    sales: 888,
    total: 1672,
    owners: 888,
    supply: 888,
  },
  {
    collection: COLLECTION,
    floor: 1672,
    offer: 1672,
    hVol: 1672,
    percent: 0.76,
    sales: 888,
    total: 1672,
    owners: 888,
    supply: 888,
  },
  {
    collection: COLLECTION,
    floor: 1672,
    offer: 1672,
    hVol: 1672,
    percent: 0.76,
    sales: 888,
    total: 1672,
    owners: 888,
    supply: 888,
  },
];

const FullDiv = styled.div`
  width: 100%;
`;

const TblContainer = styled.div`
  position: relative;
  max-width: 90vw;
  height: 100vh;
  margin: 0 auto;
  @media (min-width: 1500px) {
    max-width: 1440px;
  }
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`;

const StyleMain = styled.div`
  filter: url("#fancy-goo");
  width: 100%;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  top: 0;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CollectionBgStyle = styled.div<{ $reversed: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-clip-path: polygon(
    0 0,
    45% 0,
    55% 156px,
    100% 156px,
    100% 100%,
    0 100%
  );
  clip-path: polygon(0 0, 45% 0, 55% 15%, 100% 15%, 100% 100%, 0 100%);
  background: #b880ff;
  backdrop-filter: blur(30px);
  border: 3px solid #5d3068;
  transform: scaleX(${(props) => (props.$reversed ? -1 : 1)});
`;

const Space = styled.div<{ $height: number; $mdH?: number; $smH?: number }>`
  width: 100%;
  height: ${(props) => props.$height}px;
  @media (max-width: 768px) {
    height: ${(props) => props.$mdH}px;
  }
  @media (max-width: 500px) {
    height: ${(props) => props.$smH}px;
  }
`;

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="2"
    viewBox="0 0 40 2"
    fill="none"
  >
    <path d="M0 1L40 1" stroke="url(#paint0_linear_644_287)" />
    <defs>
      <linearGradient
        id="paint0_linear_644_287"
        x1="0"
        y1="0.5"
        x2="40"
        y2="0.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111012" />
        <stop offset="0.395833" stopColor="#AF50BD" />
        <stop offset="0.583333" stopColor="#AF50BD" />
        <stop offset="1" stopColor="#121013" />
      </linearGradient>
    </defs>
  </svg>
);

const MenuItem = styled.div`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`;

const MenuBox = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  gap: 24px;
  @media (max-width: 1080px) {
    gap: 0;
    justify-content: center;
  }
`;

const FlexDiv = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 500px) {
    padding: 0 12px;
  }
`;

const H2_24 = styled(H2)`
  margin-top: 28px;
  font-size: 24px;
  cursor: pointer;
  transition: 0.1s all ease-in-out;
  &:hover {
    font-weight: 600;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: flex;
    width: 200px;
    padding: 12px 5%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    border: 1px solid #5d3068;
    background: rgba(18, 16, 19, 0.6);
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
    backdrop-filter: blur(30px);
    &:hover {
      background-color: #af50bd;
    }

    @media (max-width: 500px) {
      width: 150px;
      font-size: 14px;
      padding: 0px 0%;
    }
  }
`;
const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 500px) {
    padding: 0 12px;
  }
`;
const Search = styled.input`
  display: flex;
  max-width: 627px;
  min-width: 360px;
  height: 62px;
  padding: 16px 36px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 40px;
  background-color: transparent;
  color: white;
  border: 1px solid #5d3068;
  &:hover {
    backdrop-filter: blur(30px);
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  }
  @media (max-width: 500px) {
    width: 100%;
    min-width: unset;
  }
`;

const DivGap = styled.div`
  display: flex;
  gap: 26px;
  justify-content: space-between;
`;

const BtnTransp = styled.div`
  display: inline-flex;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 1px solid #5d3068;
  cursor: pointer;
  color: white;
  font-size: 24px;
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
    backdrop-filter: blur(30px);
  }
  @media (max-width: 1050px) {
    font-size: 20px;
    padding: 16px 25px;
  }
  @media (max-width: 768px) {
    flex-grow: 5;
  }
  @media (max-width: 500px) {
    padding: 16px 10px;
    font-size: 16px;
  }
`;
const H1Top = styled(H1)`
  @media (max-width: 500px) {
    font-size: 38px;
    line-height: 48px;
  }
`;

const Table = styled.table`
  border: none;
  width: 100%;
  /* overflow: auto; */
  @media (max-width: 1020px) {
    width: 950px;
  }
`;

const DivIn = styled.div`
  width: calc(100% - 40px);
  padding: 0 30px;
  overflow: auto;
`;

const Tr = styled.tr`
  height: 60px;
`;

const Th = styled.th`
  color: #fff;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-align: center;
  @media (max-width: 1050px) {
    font-size: 18px;
  }
`;

const Td = styled.td<{ $color?: string }>`
  color: ${(props) => (props.$color ? props.$color : "white")};
  text-align: right;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  @media (max-width: 1050px) {
    font-size: 14px;
  }
`;

const TdBox = styled(Td)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1000px) {
    min-width: 250px;
    justify-content: flex-start;
    gap: 20px;
  }
`;

const SpanNum = styled.div`
  margin-right: 5px;
`;

const SpaceWhenLg = styled(Space)`
  @media (max-height: 1100px) {
    display: none;
  }
`;

const Th1 = styled(Th)`
  @media (min-width: 1000px) {
    text-align: left;
    padding-left: 50px;
  }
`;

export default function Collections() {
  const [isMyPage, setToMyPage] = useState(false);

  return (
    <FullDiv>
      <Container>
        <Space $height={100} $mdH={30} />
        <Header />
        <Space $height={60} $mdH={45} />
        <MenuBox>
          <MenuItem>MAIN</MenuItem>
          {Svg}
          <MenuItem>MARKETPLACE</MenuItem>
          {Svg}
          <MenuItem>AUCTIONS</MenuItem>
        </MenuBox>
      </Container>
      <Space $height={80} $mdH={30} />
      <H1Top $style="Black" $color="white" $align="center" $weight={900}>
        POPULAR COLLECTIONS
      </H1Top>
      <Space $height={40} $mdH={30} />
      <TblContainer>
        <StyleMain>
          <CollectionBgStyle $reversed={isMyPage} />
          <FancyGoo />
        </StyleMain>
        <FlexDiv>
          <H2_24
            $weight={300}
            $color="white"
            onClick={() => {
              setToMyPage(false);
            }}
          >
            All collections
          </H2_24>
          <H2_24
            $weight={300}
            $color="white"
            onClick={() => {
              setToMyPage(true);
            }}
          >
            My watchlist
          </H2_24>
        </FlexDiv>
        <Space $height={90} $mdH={30} />
        <SpaceWhenLg $height={200} />

        <SearchBox>
          <Search placeholder="Search"></Search>
          <DivGap>
            <BtnTransp>Filters</BtnTransp>
            <BtnTransp>Last 24 hours</BtnTransp>
          </DivGap>
        </SearchBox>
        <Space $height={55} $mdH={30} />
        <DivIn>
          <Table>
            <thead>
              <Tr>
                <Th1>Collection</Th1>
                <Th>Floor</Th>
                <Th>Offer</Th>
                <Th>24h Vol</Th>
                <Th>24h % Vol</Th>
                <Th>Sales</Th>
                <Th>Total Vol</Th>
                <Th>Owners</Th>
                <Th>Supply</Th>
              </Tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((data, index) => {
                return (
                  <Tr key={index}>
                    <TdBox>
                      <SpanNum>{index + 1}</SpanNum>
                      {COLLECTION}
                    </TdBox>
                    <Td $color="#50BD75">{data.floor}SUI</Td>
                    <Td $color="#AF50BD">{data.offer}SUI</Td>
                    <Td>{data.hVol}SUI</Td>
                    <Td $color="#F8B22A">
                      <svg
                        style={{ marginRight: 10 }}
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Play">
                          <path
                            id="Vector"
                            d="M16.1219 11.7368C14.1129 15.2603 13.1084 17.022 11.797 17.6132C10.6531 18.1289 9.34687 18.1289 8.203 17.6132C6.89157 17.022 5.88708 15.2603 3.87809 11.7368C1.86911 8.2134 0.864613 6.45168 1.01467 5.00606C1.14555 3.74512 1.79868 2.59964 2.81167 1.8544C3.97304 0.999999 5.98203 0.999999 10 1C14.018 1 16.027 1 17.1883 1.8544C18.2013 2.59964 18.8544 3.74512 18.9853 5.00606C19.1354 6.45168 18.1309 8.2134 16.1219 11.7368Z"
                            stroke="#F8B22A"
                            stroke-width="1.5"
                          />
                        </g>
                      </svg>
                      {data.percent}%
                    </Td>
                    <Td>{data.sales}</Td>
                    <Td>{data.total}SUI</Td>
                    <Td>{data.owners}</Td>
                    <Td>{data.supply}</Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </DivIn>
      </TblContainer>
      <Space $height={60} $mdH={30} />
    </FullDiv>
  );
}
