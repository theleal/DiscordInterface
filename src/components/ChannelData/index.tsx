import React from "react";
import ChannelMessage from "../ChannelMessage";
import {Mention} from "../ChannelMessage"

import { Container, Messages, InputWrapper, Input, InputIcon } from './Style';



const ChannelData: React.FC = () => {
    return (
        <Container>
          <Messages>
            <ChannelMessage
              author="Pankracio"
              date="07/06/2022"
              content="Mensagem"
            />

            <ChannelMessage
              author="Breno Santos"
              date="07/06/2022"
              content="Mensagem"
            />

            <ChannelMessage
              author="Rodrigo Rebelo"
              date="07/06/2022"
              content={
                <>
                  <Mention>@Leal</Mention> Mensagem automática
                </>
              }
              hasMention
            />

            <ChannelMessage
              author="Guilherme"
              date="07/06/2022"
              content="Mensagem"
            />

            <ChannelMessage
              author="Pai do Palinkas"
              date="07/06/2022"
              content="Mensagem"
            />

            <ChannelMessage
              author="Carol"
              date="07/06/2022"
              content="Mensagem"
            />
            

         

            <ChannelMessage
              author="Monark"
              date="07/06/2022"
              content="Mensagem?"
            />

            <ChannelMessage
              author="Shaquille o'neal"
              date="07/06/2022"
              content="Understandable, have a nice day"
            />

            <ChannelMessage
              author="BOT"
              date="07/06/2022"
              content={
                <>
                  <Mention>@Leal</Mention> Mensagem automática
                </>
              }
              hasMention
              isBot
            />

            <ChannelMessage
              author="Renan"
              date="07/06/2022"
              content="Mensagem"
            />

            <ChannelMessage
              author="Omar"
              date="07/06/2022"
              content="kkkk tragico"
            />

            <ChannelMessage
              author="Joao"
              date="07/06/2022"
              content="Mensagem"
            />

            <ChannelMessage
              author="Chris"
              date="07/06/2022"
              content="Sabe como é, né?"
            />

            <ChannelMessage
              author="Rochelle"
              date="07/06/2022"
              content=" eu não preciso disso, meu marido tem 2 empregos"
            />

            <ChannelMessage
              author="Drew"
              date="07/06/2022"
              content="Cara, ainda bem que não sou você"
            />

            <ChannelMessage
              author="Chris"
              date="07/06/2022"
              content="Sabe como é, né?"
            />

            <ChannelMessage
              author="Julius"
              date="07/06/2022"
              content="Se eu não comprar o desconto é maior"
            />
          

            
          </Messages>

          <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>
            <InputIcon />
          </InputWrapper>

        </Container>
    );

};

export default ChannelData;