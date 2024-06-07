import styled from "styled-components";

export const Main = styled.main`
display:flex;

`

export const Container = styled.section`
flex-direction: column;
display:flex;
width: 90%;


h2{
    text-align: center;
    height:1.4em;
    margin-bottom:20%;

}
p{
    text-align: center;
    height: 1.1em;
    
   
}
a{
    text-align: center;
    padding: 10px;
    font-weight: 700;
    text-decoration:none;
    color:var(--primary)
}
.Information{
    margin-top:10%;
    display: grid;
}
`

export const Imag= styled.img`
width:20%;
margin-left:40%;


`
