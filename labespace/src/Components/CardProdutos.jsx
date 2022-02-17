import React from "react";
import styled from "styled-components";

export const ContainerProdutos = styled.div`
display: inline-flex;
margin: 0 auto;
text-align: center;
// background-image: ;
`;

export const Item = styled.div`
display: grid;
margin: auto 1vw;
justify-items: center;
text-align: center;
margin-top: 4vh;

// background-image: ;
`;

export const BotaoAddCarrinho = styled.button`
text-align: center;
&:hover {
  background: #e0e0e0;
}
`;


const ImagemItem = styled.img`
  width: 20vw;
  height: 30vh;
  &:hover {
    transform: scale(1.1);
  }
`

export class CardProdutos extends React.Component {
  render() {
    return (
      <ContainerProdutos>
        <Item>
            <ImagemItem src={this.props.imagemProdutos} alt={""} />
            <p>{this.props.nome}</p>
            <p>{"R$" + this.props.preco}</p>
            <br/>
            <BotaoAddCarrinho onClick={this.props.onClick}> Adicionar ao carrinho</BotaoAddCarrinho>
        </Item>
      </ContainerProdutos>
    );
  }
}
