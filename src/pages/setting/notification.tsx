import Header from "components/layout/header";
import { useNavigate } from "react-router-dom";
import Switch from 'react-switch'

import {
    StyleBody,
    PageNav,
    FontStyle,
    PageBody,
    BodyTitle,
    MainTab2,
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
    // TabButton,
    SaveBtn,
    PartTitle,
    Noti_Child,
    Hr_image,
    Ver_image,
    Hide_part,
    Noti_1_3
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
            <MainTab2>
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
                    <PartTitle>
                        Bids
                    </PartTitle>
                    <FirstRow>
                        <Noti_Child>
                            <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                            <LabelNam htmlFor="">When someone bids on one of your items</LabelNam>
                        </Noti_Child>
                        <Noti_Child>
                            <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                            <LabelNam htmlFor="">The minimum percentage of list price that a bid must be to notify you</LabelNam>
                        </Noti_Child>
                        <FR_Child>
                            <LabelNam htmlFor="">When someone accepts your bid</LabelNam>
                            <Noti_Child>
                                <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                <LabelNam htmlFor="">Web</LabelNam>
                                <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                <LabelNam htmlFor="">Email</LabelNam>
                            </Noti_Child>
                        </FR_Child>
                    </FirstRow>
                    <Hr_image src="/images/bg/hr_line.svg" alt="" />
                    <FirstRow>
                        <Noti_1_3>
                            <PartTitle>
                                Items sold
                            </PartTitle>
                            <FR_Child style={{width: '100%', marginTop: '25px'}}>
                                <LabelNam htmlFor="">When someone purchases your items</LabelNam>
                                <Noti_Child>
                                    <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                    <LabelNam htmlFor="">Web</LabelNam>
                                    <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                    <LabelNam htmlFor="">Email</LabelNam>
                                </Noti_Child>
                            </FR_Child>
                        </Noti_1_3>
                        <Ver_image src="/images/bg/Vector4589.svg" alt="" />
                        <Hide_part>
                            <Hr_image src="/images/bg/hr_line.svg" alt="" />
                        </Hide_part>
                        <Noti_1_3>
                            <PartTitle>
                                Watchlist
                            </PartTitle>
                            <FR_Child style={{width: '100%', marginTop: '25px'}}>
                                <LabelNam htmlFor="">
                                    When a watchlist you follow has a floor price jump above your set threshold
                                </LabelNam>
                                <Noti_Child>
                                    <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                    <LabelNam htmlFor="">Web</LabelNam>
                                </Noti_Child>
                            </FR_Child>
                        </Noti_1_3>
                        <Noti_1_3>
                            <FR_Child style={{width: '100%'}}>
                                <LabelNam htmlFor="">
                                    When a watchlist you follow has a jump in the number of listings above your set threshold
                                </LabelNam>
                                <Noti_Child>
                                    <Switch onChange={handleChange} checked={state} height={28} width={56} uncheckedIcon={false} checkedIcon={false} onColor="#AF50BD" />
                                    <LabelNam htmlFor="">Web</LabelNam>
                                </Noti_Child>
                            </FR_Child>
                        </Noti_1_3>
                    </FirstRow>
                    <FirstRow>
                        <SaveBtn>
                            Save settings
                        </SaveBtn>
                    </FirstRow>
                </TabBody>
            </MainTab2>
        </PageBody>
    </StyleBody>
  )
}

export default Setting