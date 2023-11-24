import Header from "components/layout/header";

import {
    StyleBody,
    PageNav,
    FontStyle,
    PageBody,
    BodyTitle,
    CommonText,
    CommonTitle,
    CardBox,
    Card,
} from './index.styled';

const Airdrop = () => {

  return (
    <StyleBody>
        <Header />
        <PageNav>
            <FontStyle style={{fontSize: '20px'}}>
                Main
            </FontStyle>
            <img src="/images/icons/Vector4587.svg" style={{borderRadius: '24px'}} alt="" />
            <FontStyle style={{fontSize: '16px'}}>
                AIRDROP
            </FontStyle>
        </PageNav>
        <PageBody>
            <BodyTitle>
                AIRDROP
            </BodyTitle>

            <CardBox>
                <Card>
                    <CommonTitle>0</CommonTitle>
                    <CommonText>You are eligible to claim O HOMI</CommonText>
                </Card>
            </CardBox>
        </PageBody>
    </StyleBody>
  )
}

export default Airdrop