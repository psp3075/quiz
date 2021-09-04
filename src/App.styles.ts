import styled,{createGlobalStyle} from 'styled-components';
import Bimage from './assets/pencil.jpg';

export const GlobalStyle=createGlobalStyle `
html{
    height:100%;
}

body{
    background-image:url(${Bimage});
    background-size:cover;
    margin:0;
    padding :0 20px;
    display:flex;
    justify-content:center;
}

*{
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}
`

export const Wrapper=styled.div `
display:flex;
flex-direction:column;
align-items:center;

>p{
    color:#fff
}

.app__score{
    color:#FFF8E5;
    font-size:2rem;
    margin-top:10px;
    margin-bottom:10px;
}

h1{
    font-size:80px;
    text-align:center;
    margin:30px;
}

.app__start,.app__next{
    cursor:pointer;
    border:2px solid #fff;
    box-shadow:0px 5px 10px rgba(0,0,0,0.25);
    border-radius:20px;
    height:40px;
    margin:20px 0;
    padding:0 40px;

    :hover{
        transform:scale(0.95);
    }
}

.app__start{
    max-width:200px;
    
}
`