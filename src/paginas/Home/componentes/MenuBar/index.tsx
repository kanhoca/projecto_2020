import React from 'react';
import Button from '../Button/index';

import { 
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon
    
 } from './estilo';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <TopSide>
              <Logo />
              <strong>HTUR</strong>

              <MenuButton>
                  <HomeIcon />
                  <span>Pagina Inicial</span>
              </MenuButton>

              <MenuButton>
                  <BellIcon />
                  <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon />
                  <span>Menssagens</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon />
                  <span>Favoritos</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon />
                  <span>Perfil</span>
              </MenuButton>
              <Button>
                  <span>Nova Publicação</span>
              </Button>



          </TopSide>

          <BotSide>
              <Avatar />
              <ProfileData>
                  <strong>Jessé Kanhoca</strong>
                  <span>@jkkamhoca</span>
              </ProfileData>
              <ExitIcon />
          </BotSide>
      </Container>



  );
}

export default MenuBar;