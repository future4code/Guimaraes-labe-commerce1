import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
export default class App extends React.Component {
  addCart = () => {
    alert("O produto foi adicionado ao carrinho");
  };
  render() {
    return (
      <div>
        <header>
          <nav>
            <a href="#">
              {" "}
              <img
                /* src='' ícone do CARRINHO DE COMPRAS*/ alt="ícone de carrinho de compras"
              />{" "}
            </a>
          </nav>
          <img /* src='' ícone do astronauta*/ alt="ícone de astronauta" />
          <p>labeSPACE</p>
        </header>
        <main></main>
      </div>
    );
  }
}
