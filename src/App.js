import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductCards from "./components/ProductCards";

export default class App extends React.Component {
  addCart = () => {
    alert("O produto foi adicionado ao carrinho");
  };
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <Home />
        </main>
      </div>
    );
  }
}
