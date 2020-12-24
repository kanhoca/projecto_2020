import React from 'react';

import { Container, Item, Title } from './estilo';


interface Props{
    title: string;
    elements: React.ReactNode[];
}

const Lista: React.FC<Props> = (
    {title,elements}
) => {
  return (
      
    <Container>
        <Item>
            <Title>{title}</Title>
        </Item>

         {/**Estudar melhor o funcionamento de listas e element com React JS */}

        {elements.map((element, index)=>
        (<Item key={index}>
        {element}</Item>))}




    </Container>





  );
}

export default Lista;