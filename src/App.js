import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductCards from "./components/ProductCards";
import Carrinho from "./pages/Carrinho";

const StyledHeader = styled.header`
  background-color: #7e5185;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: "Skranji", cursive;
  color: white;
  font-size: 2rem;
`;

export default class App extends React.Component {
    render() {    
    return (
      <div>
        <StyledHeader>
          <Nav />
        </StyledHeader>
        <main>
          <Home />
          
        </main>
      </div>
    );
  }
}
