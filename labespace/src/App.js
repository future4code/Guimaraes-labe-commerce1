import React from "react";
import { Produtos } from "./Components/Produtos";
import styled from "styled-components";
import {Carrinho} from './Components/Carrinho'
import logocarrinho from "./assets/logocarrinho.png"

import { CardProdutos } from "./Components/CardProdutos";

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr;
`;
const StyledHeader = styled.header`
  height: 25%;
  width: 100%;
  background-color: #7e5185;
  color: #d9b8c4;
  font-size: 3rem;
  font-family: "Skranji", cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /*  margin-left: 0.36603221083455345vw;
  margin-right: 0.36603221083455345vw; */
  padding: 5px;
`;

const StyledCart = styled.div`
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 95vh;
  padding: 10px;
  margin: 10px;
`;
const CarrinhoIcone = styled.img`
width: 25px;
height: 25px;
`

const products = [
  {
    id: 1,
    name: "Pedra Espacial Roxa",
    price: 100,
    imgUrl:
      "https://images.pexels.com/photos/4040567/pexels-photo-4040567.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4040567.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Pedra Espacial de Vênus",
    price: 200,
    imgUrl:
      "https://images.pexels.com/photos/9037438/pexels-photo-9037438.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 3,
    name: "Pedra Espacial de Jovem Místico",
    price: 300,
    imgUrl:
      "https://images.pexels.com/photos/1573247/pexels-photo-1573247.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 4,
    name: "Pedra Espacial de Cogumelo",
    price: 400,
    imgUrl:
      "https://images.pexels.com/photos/3725709/pexels-photo-3725709.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

class App extends React.Component {
  state = {
    carrinho: [],
  };

  adicionarProdutoNoCarrinho = (products) => {
    console.log("está funcionando!");
    this.setState({
      carrinho: [...this.state.carrinho, products],
    });
  };

  render() {
    console.log(this.state.carrinho);
    
    const itensCarrinho = this.state.carrinho.map((product) => {
      return (
        <Carrinho 
        key={product.id} 
        item={product} 
        imagemProdutos={product.imgUrl} 
        nome={product.name}
        preco={product.price}/>
      );
    });

    return (
      <div>
        <StyledHeader>
          <h4>labSpace</h4>
          <button><CarrinhoIcone src={logocarrinho}/>{this.state.carrinho.length}</button>
        </StyledHeader>
        <MainGrid>
          <Produtos
            quantidadeDeProdutos={products}
            produtos={products}
            onClick={this.adicionarProdutoNoCarrinho}
          />
          <StyledCart>
            <h2>Carrinho:</h2>

            {itensCarrinho}
          </StyledCart>
        </MainGrid>
        <footer></footer>
      </div>
    );
  }
}

export default App;
