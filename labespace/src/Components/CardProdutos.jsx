import React from "react";
import {Produtos} from "./Produtos"


export default class CardProdutos extends React.Component {

  render() {
    return (
      <div>
          <img src= {this.props.imagemProduto}/>
          <div>
              <p>{this.props.nome}</p>
              <p>{"R$"+ this.props.preco}</p>
              <button onClick={this.props.onClick}>Adicionar ao Carrinho</button>
          </div>
      </div>
    )
  }
}
