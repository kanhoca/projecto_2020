import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
> div{
    display:flex;
    align-items: center;

}
  
`;


export const Avatar = styled.div`
height: 49px;
width:49;
background: var(--white);
border-radius: 50%;
scroll-margin-right: 10px;
  
`;

export const Info = styled.div`

display: flex;
align-items: center;

> strong{
    font-size: 14px;
}
> span{
    font-size: 14px;
    color: var(--white);
}
  
`;

export const Seguir = styled(Button)`
  
  padding: 6px 16px;
`;


