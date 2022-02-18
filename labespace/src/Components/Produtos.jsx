import React from "react";
import { CardProdutos } from "./CardProdutos";
import styled from 'styled-components'

const Filtros = styled.div`
text-align: center;
`

export class Produtos extends React.Component {
  state = {
    ordenacao: "Crescente",
    query: "",
    minPrice: "",
    maxPrice: "",
  };
  

  ordenarProdutos = (e) => {
    this.setState({
      ordenacao: e.target.value,
    });
  };
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  updateMinPrice = (event) => {
    this.setState({ minPrice: event.target.value });
  };

  updateMaxPrice = (event) => {
    this.setState({ maxPrice: event.target.value });
  };

  render() {
    const produtosOrdenados = this.props.produtos
      .sort((a, b) => {
        return this.state.ordenacao === "Decrescente"
          ? b.price - a.price
          : a.price - b.price;
      })
      .filter((produto) => {
        return produto.name
          .toLowerCase()
          .includes(this.state.query.toLowerCase());
      })
      .filter((produto) => {
        return (
          this.state.minPrice === "" || produto.price >= this.state.minPrice
        );
      })
      .filter((produto) => {
        return (
          this.state.maxPrice === "" || produto.price <= this.state.maxPrice
        );
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
            Valor:
            <select onChange={this.ordenarProdutos}>
              <option value={"Crescente"}>Menor ao maior</option>
              <option value={"Decrescente"}>Maior ao menor</option>
            </select>
          </label>
        </div>
        <Filtros>
          <input
            placeholder="Pesquisa"
            value={this.state.query}
            onChange={this.updateQuery}
          />

          <input
            type="number"
            placeholder="Preço mínimo"
            value={this.state.minPrice}
            onChange={this.updateMinPrice}
          />

          <input
            type="number"
            placeholder="Preço máximo"
            value={this.state.maxPrice}
            onChange={this.updateMaxPrice}
          />
          <p> {this.state.query ? 'Você pesquisou por: ' + this.state.query : null}</p>
        </Filtros>
        <div>{produtosOrdenados}</div>
      </div>
    );
  }
}
