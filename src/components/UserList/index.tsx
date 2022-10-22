import React from "react";

import { Container, Role, User, Avatar } from './Style';

interface UserProps {
    nickname: string;
    isBot?: boolean;

}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong> {nickname} </strong>
            
            {isBot && <span>BOT</span>}
        </User>

    );
};


const UserList: React.FC = () => {
    return (
       
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname = "IXTHGuoviscky" />

            <Role>Offline - 18</Role>
            <UserRow nickname = "Thierry Henry" isBot />
            <UserRow nickname = "Teste 1" />
            <UserRow nickname = "Teste 2" />
            <UserRow nickname = "Teste 3" />
            <UserRow nickname = "Teste 4" />
            <UserRow nickname = "Teste 1" />
            <UserRow nickname = "Teste 2" />
            <UserRow nickname = "Teste 3" />
            <UserRow nickname = "Teste 4" />
            <UserRow nickname = "Teste 1" />
            <UserRow nickname = "Teste 2" />
            <UserRow nickname = "Teste 3" />
            <UserRow nickname = "Teste 4" />
            <UserRow nickname = "Teste 1" />
            <UserRow nickname = "Teste 2" />
            <UserRow nickname = "Teste 3" />
            <UserRow nickname = "Teste 4" />
            <UserRow nickname = "Teste 1" />
            <UserRow nickname = "Teste 2" />
            <UserRow nickname = "Teste 3" />
            <UserRow nickname = "Teste 4" />
            <UserRow nickname = "Teste 1" />
            <UserRow nickname = "Teste 2" />
            <UserRow nickname = "Teste 3" />
            <UserRow nickname = "Teste 4" />

  
        </Container>
    );

};

export default UserList;