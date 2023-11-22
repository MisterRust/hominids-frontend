import { styled } from "styled-components";
import { H2, H3, H5, H6, LH6, SH6, Span } from "styles";
import { NameBox, User, UserAvatar } from "./Card";

const StyleMain = styled.div`
  width: 1373px;
  height: 567px;
  border-radius: 40px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 34px;
`;

const StyleLeft = styled.div`
  padding: 46px 0 46px 64px;
  display: flex;
  flex-direction: column;
  gap: 29px;
`;

const StyleDetail = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 29px;
`;

const StyleCurrent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 28px 48px;
  border-radius: 40px;
  background-color: #492072;
`;

const StyleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyleTimer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const AcutionCard = ({ userImg }: { userImg: string }) => {
  return (
    <StyleMain>
      <StyleLeft>
        <H3 $color="white" $weight={400} $style="Black">
          The Breaker by Kirin Labs
        </H3>
        <StyleDetail>
          <User>
            <UserAvatar src={userImg}></UserAvatar>
            <NameBox>
              <H6 $color="#9D9999" $weight={400}>
                Created by
              </H6>
              <H6 $color="#FFF" $weight={400}>
                Hominids
              </H6>
            </NameBox>
          </User>
          <H5 $color="white" $weight={400}>
            The Breaker - The time and space disruptor, weaving reality to their
            enigmatic will. Let's welcome… "THE BREAKER" One-of-a-kind art, but
            benefits too?…
          </H5>
        </StyleDetail>
        <StyleInfo>
          <StyleCurrent>
            <StyleInfo>
              <LH6 $color="#9D9999" $weight={400}>
                Current mint
              </LH6>
              <H2 $color="#AF50BD" $weight={800}>
                1672 SUI
              </H2>
              <LH6 $color="#9D9999" $weight={400}>
                ~$736.43
              </LH6>
            </StyleInfo>
            <StyleInfo>
              <LH6 $color="#9D9999" $weight={400}>
                Auction ended
              </LH6>
              <StyleTimer>
                <StyleInfo>
                  <H2 $color="#AF50BD" $weight={800}>
                    08
                  </H2>
                  <LH6 $color="#9D9999" $weight={400}>
                    Hours
                  </LH6>
                </StyleInfo>
                <StyleInfo>
                  <H2 $color="#AF50BD" $weight={800}>
                    23
                  </H2>
                  <LH6 $color="#9D9999" $weight={400}>
                    Minutes
                  </LH6>
                </StyleInfo>
                <StyleInfo>
                  <H2 $color="#AF50BD" $weight={800}>
                    06
                  </H2>
                  <LH6 $color="#9D9999" $weight={400}>
                    Seconds
                  </LH6>
                </StyleInfo>
              </StyleTimer>
            </StyleInfo>
          </StyleCurrent>
          <SH6 $color="white" $weight={400}>
            LAST BID BY <Span $color="white">JDHWSJ_01</Span>
          </SH6>
        </StyleInfo>
      </StyleLeft>
    </StyleMain>
  );
};
