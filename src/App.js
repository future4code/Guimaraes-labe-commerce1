import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductCards from "./components/ProductCards";

const StyledHeader = styled.header`
  background-color: #7e5185;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Skranji", cursive;
  color: white;
  font-size: 2rem;
`;

export default class App extends React.Component {
  addCart = () => {
    alert("O produto foi adicionado ao carrinho");
  };
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
