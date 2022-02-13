import React from "react";
import logo from "../assets/logoastronauta.png";
import logocarrinho from "../assets/logocarrinho.png";
import styled from "styled-components";

const Header = styled.header`
     @media screen and (max-width: 375px){
         background: #7E5185;
         width: 375px;
         display: flex;

         flex-direction: row-reverse;
        justify-content: flex-end;
     }
` 
const Logotitulo= styled.div`
    @media screen and (max-width: 375px) {
        display: flex;
        justify-content: center;
        padding-top: 15px;
        margin-left: 40px;
    }
`
const Logoastronauta = styled.img`
  @media screen and (max-width: 375px) {
    width: 64px;
    height: 64px;
    }
`
const Titulo = styled.h1`
  @media screen and (max-width: 375px) {
    color: #f3e2e2;
  }
`
const Linkcarrinho = styled.a`
 @media screen and (max-width: 375px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-left: 50px;
    margin-top: 15px;
    }
`
const Logocarrinho = styled.img`
 @media screen and (max-width: 375px){
     width: 29px;
     height: 27px;
 }
    
`
export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Linkcarrinho href="#">
            {" "}
            <Logocarrinho src={logocarrinho}  alt="" />{" "}
          </Linkcarrinho>
        <Logotitulo>
          <Logoastronauta src={logo} alt="ícone de astronauta" />
          <Titulo>labeSPACE</Titulo>
        </Logotitulo>
        </Header>
      </div>
    );
  }
}
