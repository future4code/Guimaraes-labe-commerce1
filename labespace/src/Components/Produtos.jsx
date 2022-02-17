import React from "react";
import {CardProdutos} from "./CardProdutos";


export default class Produtos extends React.Component {
    
    state = {
        ordenacao: "Decrescente"
      };
    
      ordenarProdutos = (event) => {
        this.setState({
          ordenacao: event.target.value
        });
      };

      render() {
        const produtosOrdenadosEmapeados = this.props.produtos
          .sort((a, b) => {
            return this.state.ordenacao === "Crescente"
              ? a.price - b.price
              : b.price - a.price;
          })
          .map((produto) => (
            <div
              key={produto.id}
              id={produto.id}
              imagemProduto={produto.foto}
              nome={produto.name}
              preco={produto.price}
              onClick={() => this.props.onClick(produto)}
            />
          ));
    
        return (
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
               
            <div>{produtosOrdenadosEmapeados}</div>
          </div>
        );
      }
    }
    
