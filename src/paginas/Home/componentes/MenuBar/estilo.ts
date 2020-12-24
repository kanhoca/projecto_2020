import styled, {css} from 'styled-components';
import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
     
} from '../icons';

export const Container = styled.div`


display: none;

@media(min-width:500px){
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    position:sticky;
    top:0;
    left:0;
    padding: 9px 19px 20px;
    max-height:100vh;
    overflow-y: auto;
}
  
`;


export const TopSide = styled.div`


display: flex;
flex-direction:column;
align-items:center;


@media(min-width:1280px){
    align-items:flex-start;

}
  
`;

export const Logo = styled.div`

width:41px;
height: 41px;
background: var(--like);
border: 1px solid darkorange;
border-radius: 100px;

>path{
    color: var(--like);
}
  
`;

export const MenuButton = styled.button`


display: flex;
align-items: center;
flex-shrink:0;

> span{
    display: none;
    padding: 5px;
}

@media(min-width: 1280px){

    > span{
        display: inline;
        scroll-margin-left:19px;
        font-weight:bold;
        font-size: 14px;
    }
    padding: 15px;
}


padding: 8.25px 0;
outline: 0;


& + button{
    margin-top:16.5px;


}

& + button:last-child{
    margin-top: 33px;
    height: 40px;
    width:40px;

    > span{

        display: none;
    }

    @media(min-width: 1280px){
        width: 100%;
        height: unset;

        >span{
            display: inline;
        }
    }
    

}

cursor: pointer;
border-radius: 25px;

&:hover{
    opacity: 0.7;

}

&:hover, &.active{
    span, svg{
        color: darkorange;
        fill: darkorange;
    }
}

  
`;



/**ESTILIZAÇÃO DE ICONS */

const iconCSS = css`

flex-shrink:0;
height: 30px;
width: 30px;
color: var(--white)

`;

export const HomeIcon = styled(Home)`

${iconCSS};
  
`;

export const BellIcon = styled(Notifications)`

${iconCSS};
  
`;

export const EmailIcon = styled(Email)`

${iconCSS};
  
`;

export const FavoriteIcon = styled(FavoriteBorder)`

${iconCSS};
  
`;

export const ProfileIcon = styled(Person)`

${iconCSS};
  
`;



export const BotSide= styled.div`

margin-top: 20px;
display: flex;
align-items: center;
`;

export const Avatar = styled.div`

height: 39px;
width: 39px;
flex-shrink: 0;
border-radius: 50%;
background: var(--like);
margin-right: 10px;

  
`;

export const ProfileData = styled.div`

display: none;
@media(min-width: 1280px){
    display: flex;
    flex-direction: column;
    scroll-margin-left: 10px;
    font-size: 14px;

    > span{
        color: var(--gray);

    }
}

  
`;








export const ExitIcon = styled(ExitToApp)`
display: none;
@media(min-width: 1280px){
    display: inline-block;
    height: 25px;
    widows: 25px;
    color: var(--white);
    margin-left: 30px;
    
    cursor: pointer;

    &:hover{
        >path{
            color: var(--like);
        }
    }
}


  
`;

