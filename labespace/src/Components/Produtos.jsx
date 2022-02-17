import React from "react";
import {CardProdutos} from "./CardProdutos";



export class Produtos extends React.Component {
  state = {
    ordenacao: "Decrescente"
  };

  ordenarProdutos = (e) => {
    this.setState({
      ordenacao: e.target.value
    });
  };

  render() {
    const produtosOrdenados = this.props.produtos
      .sort((a, b) => {
        return this.state.ordenacao === "Crescente"
          ? a.price - b.price
          : b.price - a.price;
      })
      .map((produto) => (
        <CardProdutos
          key={produto.id}
          id={produto.id}
          imagemProdutos={produto.imgUrl}
          nome={produto.name}
          preco={produto.price}
          onClick={() => this.props.onClick(produto)}
        />
      ));

    return (
      <div>
        <div>
          <p>
            Quantidade de produtos: {this.props.quantidadeDeProdutos.length}
          </p>
          <label>
            Ordenação:
            <select onChange={this.ordenarProdutos}>
              <option value={"Decrescente"}>Decrescente</option>
              <option value={"Crescente"}>Crescente</option>
            </select>
          </label>
        </div>

        <div>{produtosOrdenados}</div>
      </div>
    );
  }
}