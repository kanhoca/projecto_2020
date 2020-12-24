import React from 'react';

import { 
    Container, 
    Body, 
    Avatar, 
    Content, 
    Header,
    Dot, 
    Description, 
    ImageContent,
    Icons,
    Status,
    ComentIcon,
    ShareIcon,
    LikeIcon


  } from './estilo';

const Htur: React.FC = () => {
  return (
      <Container>

          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>MUSSOLE</strong>
                      <span>@mussole</span>
                      <Dot />
                      <time>17 de Dezembro</time>
                     
                  </Header>
                  <Description>
                      Atracção Turística 🪐💞</Description>
                  <ImageContent />

                  <Icons>
                      <Status>
                          <ComentIcon />
                          8
                      </Status>
                      <Status>
                          <ShareIcon />
                          90
                      </Status>
                      <Status>
                          <LikeIcon />
                          450
                      </Status>

                      
                  </Icons>
              </Content>
          </Body>

      </Container>



  );
}

export default Htur;