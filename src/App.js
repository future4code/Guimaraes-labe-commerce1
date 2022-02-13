import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Home from "./pages/Home";

export default class App extends React.Component {
  addCart = () => {
    alert("O produto foi adicionado ao carrinho");
  };
  render() {
    return (
      <div>
        
          <Nav/>
           
          
          
          
       
        
      </div>
    );
  }
}
