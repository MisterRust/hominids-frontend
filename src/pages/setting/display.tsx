import Header from "components/layout/header";
import { useNavigate } from "react-router-dom";
import Switch from 'react-switch'

import {
    StyleBody,
    PageNav,
    FontStyle,
    PageBody,
    BodyTitle,
    MainTab3,
    TabHeader,
    HeaderChild,
    TabBody,
    FirstRow,
    FR_Child,
    SC_Child,
    LabelNam,
    TabInput,
    TabTextArea,
    NotiText,
    TabButton,
    SaveBtn
} from './index.styled';
import { useState } from "react";

const Setting = () => {

    const navigate = useNavigate();

    const [state, setState] = useState(false);

    const handleChange = () => {
        setState(!state)
    }

  return (
    <StyleBody>
        <Header />
        <PageNav>
            <FontStyle style={{fontSize: '20px'}}>
                Main
            </FontStyle>
            <img src="/images/icons/Vector4587.svg" style={{borderRadius: '24px'}} alt="" />
            <FontStyle style={{fontSize: '16px'}}>
                Setting
            </FontStyle>
        </PageNav>
        <PageBody>
            <BodyTitle>
                Settings
            </BodyTitle>
            <MainTab3>
                <TabHeader>
                    <HeaderChild onClick={() => navigate('/settings')}>
                        Profile
                    </HeaderChild>
                    <HeaderChild onClick={() => navigate('/settings/notification')}>
                        Notifications
                    </HeaderChild>
                    <HeaderChild onClick={() => navigate('/settings/display')}>
                        Display
                    </HeaderChild>
                </TabHeader>
                <TabBody>
                    <FirstRow>
                        <FR_Child>
                            <LabelNam htmlFor="">Username</LabelNam>
                            <TabInput type="text" />
                            <NotiText>Your pofile link homi...</NotiText>
                        </FR_Child>
                        <FR_Child>
                            <LabelNam htmlFor="">Display name</LabelNam>
                            <TabInput type="text" />
                        </FR_Child>
                        <FR_Child>
                            <LabelNam htmlFor="">Email</LabelNam>
                            <TabInput type="text" />
                            <NotiText>Your email for marketplace notifcations</NotiText>
                        </FR_Child>
                    </FirstRow>
                    <FirstRow>
                        <SC_Child>
                            <LabelNam htmlFor="">Short bio</LabelNam>
                            <TabTextArea placeholder="Tell us about yourself in a few words?" />
                        </SC_Child>
                        <FR_Child>
                            <LabelNam htmlFor="" style={{display:'flex', alignItems: 'center', gap: '8px'}}>
                                Anti-Phishing Code
                                <img src="/images/icons/free-icon-font-interrogation-39166931.svg" alt="" />
                             </LabelNam>
                            <TabInput type="text" />
                        </FR_Child>
                    </FirstRow>
                    <FirstRow>
                        <FR_Child>
                            <LabelNam htmlFor="">Short bio</LabelNam>
                            <TabButton>Link Twitter</TabButton>
                        </FR_Child>
                        <FR_Child>
                            <LabelNam htmlFor="">Short bio</LabelNam>
                            <TabButton>Link Twitter</TabButton>
                            <div style={{display: 'flex',  gap: '5px', marginTop: '10px'}}>
                                <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                <NotiText>
                                    Show Discord
                                </NotiText>
                            </div>
                        </FR_Child>
                        <FR_Child>
                            <LabelNam htmlFor="">Short bio</LabelNam>
                            <TabButton>Link Twitter</TabButton>
                        </FR_Child>
                    </FirstRow>
                    <FirstRow>
                        <SaveBtn>
                            Save settings
                        </SaveBtn>
                    </FirstRow>
                </TabBody>
            </MainTab3>
        </PageBody>
    </StyleBody>
  )
}

export default Setting