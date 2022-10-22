import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon, Icones} from './Style';

export interface Props {
    ChannelName: String;
    selected?: boolean;


}


const ChannelButton: React.FC<Props> = ({
    ChannelName,
    selected

}) => {
    return (
       
        <Container className={selected ?  'active' : ''}>
        <div>
            <HashtagIcon />
            <span>{ChannelName}</span>
        </div>

        <Icones>
            <InviteIcon />
            <SettingsIcon />

        </Icones >
        </Container>
    );

};

export default ChannelButton;