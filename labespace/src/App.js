import React from "react";
import { Produtos } from "./Components/Produtos";
import styled from "styled-components";
import {Carrinho} from './Components/Carrinho'
import logocarrinho from "./assets/logocarrinho.png"
import astronauta from './assets/astronauta.png'


const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
`;
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 7fr 11fr 1fr;
  height: 25%;
  background-color: #7e5185;
  align-items: center;
`;

const IconeAstronauta = styled.img`
  width: 40%;
  justify-self: self-end;
`

const Titulo = styled.h1`
  color: #d9b8c4;
  font-size: 5rem;
  font-family: "Skranji", cursive;
  letter-spacing: 6vh;
`

const StyledCart = styled.div`
  flex-direction: column;
  background-color: white;
`;

const BotaoCarrinho = styled.button`
  background: none;
  border: 0;
  color: inherit;
  margin: 0 auto;
  border-radius: 10%;
`

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
          <IconeAstronauta src={astronauta}/>
          <Titulo>labSpace</Titulo>
          <BotaoCarrinho><CarrinhoIcone src={logocarrinho}/> {this.state.carrinho.length}</BotaoCarrinho>
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
