import styled, {css} from 'styled-components';
import {Chat, Share, Favorite,} from '../icons';

export const Container = styled.div`

display:flex;
flex-direction:column;
padding: 14px 16px;
border-bottom: 1px solid var(--outline);
max-width: 100%;
  
`;

export const Body = styled.div`

display: flex;
margin-top: 3px;
position:relative;
  
`;

export const Avatar = styled.div`
  
  width: 49px;
  height: 49px;

  border-radius: 50%;
  flex-shrink: 0;
  background: var(--twitter);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`


display:flex;
flex-direction:column;
width: 100%;
margin-top: 2px;
padding-left: 59px;
  
`;

export const Header = styled.div`
display:flex;
align-items:center;
font-size: 15px;
white-space: nowrap;

> strong{
    margin-left: 5px;
}

> span, time {
    color: darkorange;
}

> strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 5px;

}
  
`;

export const Dot = styled.div`

background: var(--twitter);
height: 2px;
width: 2px;
margin: 0 10px;
  
`;

export const Description = styled.p`

font-size: 14 px;
margin-top:14px;
  
`;

export const ImageContent = styled.div`
margin-top: 12px;
width: 100%;
height: min(285px, max(175px, 41vw));
background: var(--Branco);
border-radius: 14px;
cursor: pointer;

&:hover{
    opacity: 0.7;
}
  
`;

export const Icons = styled.div`

display: flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
margin: 11px auto 0;
width: 100%; /** PARA MOBLIE */

@media(min-width: 330px){
    width:63%; /**PARA TABLET */

    > div{
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
    }
}
  
`;

export const Status = styled.div`

display:flex;
align-items:center;

font-size:15px;
color: var(--gray);
>svg{
    margin-right:5px;
}

&:nth-child(1){
    &,
    >svg path{
        color: var(--twitter);
    }
}


&:nth-child(2){
    &,
    >svg path{
        color: var(--retweet);
    }
}


&:nth-child(3){
    color: var(--like);
    >svg{
        fill: var(--like);
    }
}
  
  
`;

const iconcSS = css`
height: 19px;
width: 19px;

`;


export const ComentIcon = styled(Chat)`
${iconcSS};
  
`;

export const ShareIcon = styled(Share)`
${iconcSS};
  
`;
export const LikeIcon = styled(Favorite)`
${iconcSS};
  
`;
