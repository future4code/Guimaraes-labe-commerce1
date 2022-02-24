import React from "react";
import { Produtos } from "./Components/Produtos";
import styled from "styled-components";
import { Carrinho } from "./Components/Carrinho";
import logocarrinho from "./assets/logocarrinho.png";
import astronauta from "./assets/astronauta.png";
import facebook from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
import instagram from "./assets/instagram.png"

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;


  /* @media screen and (min-device-width : 320px) and (max-device-width : 667px){
    width: 100%;
  } */
`;
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 7fr 9fr 5fr;
  height: 25%;
  background-color: #7e5185;
  align-items: center;
  border-bottom: 0.4px solid #fff2e7;

  @media screen and (min-device-width : 320px) and (max-device-width : 667px){
    display: flex;
    justify-content: space-between;
    width: 100%;

  }
`;

const IconeAstronauta = styled.img`
  width: 30%;
  justify-self: self-end;

  @media screen and (min-device-width : 320px) and (max-device-width : 667px){
  width: 15%;
  justify-self: self-end;

  }
`;

const Titulo = styled.h1`
  color: #d9b8c4;
  font-size: 3rem;
  font-family: "Skranji", cursive;
  /* letter-spacing: 6vh; */

  @media screen and (min-device-width : 320px) and (max-device-width : 667px){
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 15px;

  }
`;

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
`;

const CarrinhoIcone = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledFooter = styled.footer`
  
  background-color: #7e5185;
  height: 20%;
  flex-direction: row;
  justify-items: center;
  border-top: 0.4px solid #fff2e7;
  padding: 32px;
  top: 3vh;
  height: 100%;

  img{
    height: 5vh;
    filter: invert(95%) sepia(13%) saturate(406%) hue-rotate(337deg) brightness(105%) contrast(107%);
    
  }


  
`;

const StyledH3 = styled.h3`
  color: #fff2e7;
  font-size: 1.5rem;
  font-family: "Work Sans", sans-serif;
  text-align: center;

`;

const StyledLinks = styled.a`
  color: #fff2e7;
  font-size: 0.8rem;
  font-family: "Work Sans", sans-serif;
  margin: 0 1vw;
  
`;

const ContainerRedesSociais =  styled.div`
display: flex;
place-content: center;
`

const ValorTotal = styled.p`
  font-weight: 700;
  text-align: center;
  background: #e0e0e0;

`

const BtnLimpaCarrinho = styled.button`
  display:flex;
  color: inherit;
  margin: 0 auto;
  border-radius: 10%;
  text-align: center;
  justify-self:center;
`




/* ARRAY DE OBJETOS */
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

/* FIM DO ARRAY DE OBJETOS */

class App extends React.Component {
  state = {
    carrinho: [],
  };

  componentDidUpdate() {
    const carrinho = this.state.carrinho;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }

  componentDidMount() {

    if (localStorage.getItem("carrinho")) {
      const carrinhoLS = localStorage.getItem("carrinho");
      const carrinhoObjetos = JSON.parse(carrinhoLS);
  
      this.setState({
        carrinho: carrinhoObjetos
      });
  
    }
  }

  adicionarProdutoNoCarrinho = (products) => {
    console.log("está funcionando!");
    this.setState({
      carrinho: [...this.state.carrinho, products],
    });
  };
  onClickLimpaCarrinho = (e) => {
    this.setState({carrinho: []});
  }

  render() {
    console.log(this.state.carrinho);

    const itensCarrinho = this.state.carrinho.map((product) => {
      return (
        <Carrinho
          key={product.id}
          item={product}
          imagemProdutos={product.imgUrl}
          nome={product.name}
          preco={product.price}
        />
      );
    });

    const somaCompras = this.state.carrinho.map((product) => { 
      return product.price }).reduce((anterior, atual) => {
      return anterior + atual
    }, 0)

    return (
      <div>
        <StyledHeader>
          <IconeAstronauta src={astronauta} />
          <Titulo>labSpace</Titulo>
          <BotaoCarrinho>
            <CarrinhoIcone src={logocarrinho} /> {this.state.carrinho.length}
          </BotaoCarrinho>
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
            <ValorTotal>Total: {somaCompras}</ValorTotal>
            <BtnLimpaCarrinho onClick={this.onClickLimpaCarrinho}>Limpar Carrinho</BtnLimpaCarrinho>
           
          </StyledCart>
        </MainGrid>
        <StyledFooter>
          <StyledH3> Também estamos por aqui...</StyledH3>
              <ContainerRedesSociais>
                <StyledLinks
                  target="_blank"
                  href="https://twitter.com/"
                  rel="noreferrer"
                >
                  <img src={twitter}/>
                </StyledLinks>
                <StyledLinks
                  target="_blank"
                  href="https://facebook.com/"
                  rel="noreferrer"
                >
                <img src={facebook}/>
                </StyledLinks>
                <StyledLinks
                  target="_blank"
                  href="https://instagram.com/"
                  rel="noreferrer"
                >
                  <img src={instagram}/>
                </StyledLinks>
              </ContainerRedesSociais>
        </StyledFooter>
      </div>
    );
  }
}

export default App;
