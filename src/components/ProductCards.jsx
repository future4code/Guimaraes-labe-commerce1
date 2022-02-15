import React from "react";
import styled from "styled-components";
import imagem1 from "../assets/pedra1.jpg"
import imagem2 from "../assets/pedra2.jpg"
import imagem3 from "../assets/pedra3.jpg"
import imagem4 from "../assets/pedra4.jpg"



export default class ProductCards extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Produto do Carrinho</h3>
          <img src={imagem1}/> 
          <h3>Produto do Carrinho</h3>
          <img src={imagem2}/> 
          <h3>Produto do Carrinho</h3>
          <img src={imagem3}/> 
          <h3>Produto do Carrinho</h3>
          <img src={imagem4}/>                
        </div>
      </div>
    );
  }
    
  };

  

