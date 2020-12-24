import React from 'react';
import Htur from '../Htur';

 import { Container, Tab, Hturs } from './estilo';

const Feed: React.FC = () => {
  return (

    <Container>
        <Tab>Htur's</Tab>
        
        <Hturs>        
            <Htur />
            <Htur />
            <Htur />
            <Htur />
            <Htur />
        </Hturs>
         

    </Container>
  );
}

export default Feed;