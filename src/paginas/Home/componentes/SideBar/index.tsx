import React from 'react';
import Lista from '../Lista';
import Sugestions from '../Sugestions';
import News from '../News';
import StickyBox from 'react-sticky-box';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
 } from './estilo';


const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Pesquisar no Htur"/>
              <SearchIcon />
          </SearchWrapper>
          <StickyBox>

          <Body>
             <Lista 
             
             title="Talvez Goste"
             elements={[
                 <Sugestions name="Adelino Ribeiro" nickname="@ribeiro90"/>,

                 <Sugestions 
                 name="Buana Paulo"
                 nickname="@buanapaulo"
                 />,

                 <Sugestions 
                 name="Aurio Evanilson"
                 nickname="@Evanilson"
                 />

                 
             ]}
             />

             <Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

             
<Lista
             title="Talvez Você Goste"
             elements={[
                 <News />,
                 <News />,
                 <News />
             ]}
             />

                 
          </Body>

          </StickyBox>
          
      </Container>
  );
}

export default SideBar;