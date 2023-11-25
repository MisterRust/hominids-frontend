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
    LabelNam,
    SaveBtn,
    PartTitle,
    Hr_image,
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
                <FontStyle style={{ fontSize: '20px' }}>
                    Main
                </FontStyle>
                <img src="/images/icons/Vector4587.svg" style={{ borderRadius: '24px' }} alt="" />
                <FontStyle style={{ fontSize: '16px' }}>
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
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                                <PartTitle>
                                    Fees display
                                </PartTitle>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                    <LabelNam htmlFor="">
                                        Inclusive of all fees
                                    </LabelNam>
                                    <img src="/images/icons/free-icon-font-interrogation-39166931.svg" alt="" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                                <PartTitle>
                                    Marketplace Logo Display
                                </PartTitle>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                    <LabelNam htmlFor="">
                                        Show marketplace logos
                                    </LabelNam>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                                <PartTitle>
                                    Rarity Source
                                </PartTitle>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <input type="radio" id="MoonRank" name="rarity" checked />
                                        <LabelNam htmlFor="#MoonRank">MoonRank</LabelNam>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <input type="radio" id="HowRare" name="rarity" />
                                        <LabelNam htmlFor="#HowRare">HowRare</LabelNam>
                                    </div>
                                </div>
                            </div>
                        </FirstRow>
                        <Hr_image src="/images/bg/hr_line.svg" alt="" />

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