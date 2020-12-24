import React from 'react';

import { Container, Avatar,Info, Seguir } from './estilo';


interface Props{
    name:string;
    nickname: string;


}

const Sugestions: React.FC<Props> = ({
    name,
    nickname
}) => {
  return (

    <Container>
        <div className="">
            <Avatar /> 
            <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
            </Info>
            
        </div>
        <Seguir outlined>Seguir</Seguir>
    </Container>
  );
}

export default Sugestions;