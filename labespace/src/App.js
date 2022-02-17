import React from "react";
import { Produtos } from "./Components/Produtos";
import styled from 'styled-components'





const products = [
  {
    id: 1,
    name: "Pedra Quartzo Roxo",
    price: 100,
    imgUrl:
      "https://images.pexels.com/photos/4040567/pexels-photo-4040567.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4040567.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Pedra Mística de Vênus",
    price: 200,
    imgUrl: "https://images.pexels.com/photos/9037438/pexels-photo-9037438.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 3,
    name: "Pedra Mística de Jovem Místico",
    price: 300,
    imgUrl:
      "https://images.pexels.com/photos/1573247/pexels-photo-1573247.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 4,
    name: "Pedra Mística de Cogumelo",
    price: 400,
    imgUrl:
      "https://images.pexels.com/photos/3725709/pexels-photo-3725709.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  
];

class App extends React.Component {
  state = {
    carrinho: []
  };

  adicionarProdutoNoCarrinho = (produto) => {
    this.setState({
      carrinho: [...this.state.carrinho, produto]
    });
  };

  render() {
    console.log(this.state.carrinho);
    return (
      <div>
        <Produtos

            quantidadeDeProdutos={products}
            produtos={products}
            onClick={this.adicionarProdutoNoCarrinho}
        />
      </div>
    );
  }
}

export default App;
