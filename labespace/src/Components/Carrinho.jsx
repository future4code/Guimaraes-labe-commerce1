import React from "react";
import styled from "styled-components";


export const ContainerProdutos = styled.div`
  display: inline-flex;
  margin: 0 auto;
  text-align: center;
  // background-image: ;
`;

export const Item = styled.div`
  display: flex;
  margin: auto 1vw;
  gap: 3vh;
  justify-items: center;

  // background-image: ;
`;

const ImagemItem = styled.img`
  width: 10vw;
  height: 10vh;
//   &:hover {
//     transform: scale(1.1);
//   }
`;

export class Carrinho extends React.Component {
  render() {
    return (
      <ContainerProdutos>
        <Item>
          <ImagemItem src={this.props.imagemProdutos} alt={""} />
          <p>{this.props.nome}</p>
          <p>{"R$" + this.props.preco}</p>
          <br />
          
        </Item>
      </ContainerProdutos>
    );
  }
}
