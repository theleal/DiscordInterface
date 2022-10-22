import React from "react";

import { Container, Category, AddCategoryIcon } from './Style';

import ChannelButton from '../ChannelButton';



const ChannelList: React.FC = () => {
    return <Container> 
           
            <Category> 
                <span>Canais de texto </span>
                <AddCategoryIcon />
            </Category>
        
            <ChannelButton  ChannelName="chat livre"/>
            <ChannelButton  ChannelName="trabalho"/>
            <ChannelButton  ChannelName="jogos"/>
            <ChannelButton  ChannelName="arquivos"/>
            <ChannelButton  ChannelName="ajuda"/>


        </Container>;
    
};

export default ChannelList;