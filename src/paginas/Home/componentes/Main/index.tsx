import React from 'react';
import ProfilePage from '../ProfilePage/index';

import {
    Container,
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    BellIcon, 
    EmailIcon,
    SearchIcon  
} from './estilo';

const Main: React.FC = () =>{
    return (
        <Container>
           <Header>
               <button>
                   <BackIcon />
               </button>
               <ProfileInfo>
                   <strong>Jessé Kanhoca</strong>
                   <span>15 Htur's</span>
                   
                   
                    
               </ProfileInfo>
           </Header>
           <ProfilePage/>

          
            <BottomMenu>
               <HomeIcon className="active"/>
               <SearchIcon />
               <BellIcon />
               <EmailIcon />
           </BottomMenu> 
          

      
           
        </Container>

    );

}
export default Main;