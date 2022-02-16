import React from "react";
import logo from "../assets/logoastronauta.png";
import logocarrinho from "../assets/logocarrinho.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #7e5185;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  min-height: 5vh;
  max-height: 35vh;

  @media screen and (max-width: 375px) {
    width: 375px;
  }
`;
const Logotitulo = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 375px) {
    padding-top: 50px;
    margin-left: 40px;
    align-items: end;
  }
`;
const Logoastronauta = styled.img`
  @media screen and (max-width: 375px) {
    width: 64px;
    height: 64px;
  }
`;
const Titulo = styled.h1`
  color: #f3e2e2;
  font-size: 4rem;
  @media screen and (max-width: 375px) {
    font-size: 3rem;
    margin-block-end: auto;
  }
`;
const Linkcarrinho = styled.a`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-left: 10vw;
  margin-top: 5vh;

  @media screen and (max-width: 375px) {
    margin-left: 5px;
    margin-top: 15px;
  }
`;
const Logocarrinho = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (max-width: 375px) {
    width: 29px;
    height: 27px;
  }
`;
export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <StyledHeader>
          <Linkcarrinho href="#">
            {" "}
            <Logocarrinho src={logocarrinho} alt="" />{" "}
          </Linkcarrinho>
          <Logotitulo>
            <Logoastronauta src={logo} alt="ícone de astronauta" />
            <Titulo>labeSpace</Titulo>
          </Logotitulo>
        </StyledHeader>
      </div>
    );
  }
}
