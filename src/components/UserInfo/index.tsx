import React from "react";

import { Container,
     Profile,
     Avatar,
     UserData,
     Icons,
     MicIcon,
     HeadphoneIcon,
     SettingsIcon  
} from './Style';



const UserInfo: React.FC = () => {
    return (
       
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                 <strong> Username </strong>
                 <span>#0000</span>   
                </UserData>
            </Profile>

        <Icons>
            
            <MicIcon />
            <HeadphoneIcon />
            <SettingsIcon />
        </Icons>                

        </Container>
    );

};

export default UserInfo;