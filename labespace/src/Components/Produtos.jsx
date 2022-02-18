import React from "react";
import { CardProdutos } from "./CardProdutos";

export class Produtos extends React.Component {
  state = {
    ordenacao: "Decrescente",
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
        return this.state.ordenacao === "Crescente"
          ? a.price - b.price
          : b.price - a.price;
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
            Ordenação:
            <select onChange={this.ordenarProdutos}>
              <option value={"Decrescente"}>Decrescente</option>
              <option value={"Crescente"}>Crescente</option>
            </select>
          </label>
        </div>
        <div>
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
          {this.state.query}
        </div>
        <div>{produtosOrdenados}</div>
      </div>
    );
  }
}
