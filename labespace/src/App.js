import React from "react";
import { Produtos } from "./Components/Produtos";
import styled from "styled-components";

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
  border: 1px solid black;
`;
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
      "https://i.pinimg.com/originals/bf/96/48/bf9648be9dd4a19f012bfc2b35aa3dd9.jpg",
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
        <CardProdutos key={product.id} item={product}>
          <img src={product.imgUrl} /> <p>{product.name}</p>{" "}
          <p>{product.price}</p>
        </CardProdutos>
      );
    });

    return (
      <div>
        <StyledHeader>
          <h4>labEspaço</h4>
          <button>Ir para o Carrinho {this.state.carrinho.length}</button>
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
