import React from 'react';
import {Wrapper, Container} from './estilo';
import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';
const layout: React.FC =() =>{
    return (
        <Container>
            <Wrapper>
                <MenuBar />
            
                <Main />

               <SideBar />
            </Wrapper>
        </Container>

    );

}
export default layout;



