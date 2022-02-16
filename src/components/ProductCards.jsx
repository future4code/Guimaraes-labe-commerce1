import React from "react";
import styled from "styled-components";

/* import imagem1 from "../assets/pedra1.jpg";
import imagem2 from "../assets/pedra2.jpg";
import imagem3 from "../assets/pedra3.jpg";
import imagem4 from "../assets/pedra4.jpg"; */

const StyledMain = styled.main`
  background-color: #061826;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const ProductContainer = styled.div`
   grid-area: 1 / 1 / 2 / 2 
  /* align-content: center;
  align-items: center; */
  border: 1px solid #ff2e00;
  border-radius: 10px;
  padding: 3.2vh 0.7320644216691069vw;
  margin-bottom: 3.2vh;
  margin-left: 1.6vh;
  margin-right: 1.6vh;
  height: 32vh;
`;

const StyledImg = styled.img`
  height: 32vh;
  width: 7.320644216691069vw;
  margin: 10px;
  padding: 5px;
`;
const StyledH3 = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  color: white;
`;

const StyledButton = styled.button`
  color: ##ff2e00;
  font-size: 0.8rem;
  padding: 0.2rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
  border: 0.1rem #404040 solid;
  background-color: #ff2e00;
  width: 100%;
  cursor: pointer;
`;

export default class ProductCards extends React.Component {
  render() {
    return (
      <StyledMain>
        <ProductContainer>
          <StyledH3>{this.props.produto}</StyledH3>
          <StyledImg src={this.props.imagem} />
          <button src={this.props.botao} />
        </ProductContainer>
      </StyledMain>
    );
  }
}
