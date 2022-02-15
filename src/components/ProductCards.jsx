import React from "react";
import styled from "styled-components";

/* import imagem1 from "../assets/pedra1.jpg";
import imagem2 from "../assets/pedra2.jpg";
import imagem3 from "../assets/pedra3.jpg";
import imagem4 from "../assets/pedra4.jpg"; */

const StyledMain = styled.main`
  background-color: #061826;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* align-content: center;
  align-items: center; */
  border: 1px solid #ff2e00;
  border-radius: 10px;
  padding: 3.2vh 0.7320644216691069vw;
  margin-bottom: 0.7320644216691069vw;
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

export default class ProductCards extends React.Component {
  render() {
    return (
      <StyledMain>
        <ProductContainer>
          <StyledH3>{this.props.produto}</StyledH3>
          <StyledImg src={this.props.imagem} />
        </ProductContainer>
      </StyledMain>
    );
  }
}
