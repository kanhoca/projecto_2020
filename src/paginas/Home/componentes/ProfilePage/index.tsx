import React from 'react';
import Feed from '../Feed';

 import { 
     Container, 
     Banner, 
     Avatar, 
     ProfileData, 
     LocationIcon, 
     CakeIcon,
     EditButton, 
     Followage } from './estilo';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
             <EditButton outlined>Editar Perfil</EditButton>
              <h1>Jessé Kanhoca</h1>
              <h2>@jkkanhoca</h2>
              <p>
                  Developer at <a href="http:://Mussole.com">@Mussole</a>
              </p>
              <ul>
                  <li>
                      <LocationIcon />
                      Luanda - Viana
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 09 de Setembro de 2000  
                  </li>
              </ul>
              <Followage>
                  <span>
                      seguindo <strong>60</strong>
                  </span>
                  <span>
                    <strong>600 </strong> seguidores 
                  </span>
              </Followage>
          </ProfileData>

          <Feed />


      </Container>


  );
}

export default ProfilePage;