import React from "react";
import styled from "styled-components";
import ProductCards from "../components/ProductCards";
/* import imagem1 from "../assets/pedra1.jpg";
import imagem2 from "../assets/pedra2.jpg";
import imagem3 from "../assets/pedra3.jpg";
import imagem4 from "../assets/pedra4.jpg"; */

const StyledMain = styled.main`
  background-color: #061826;
  border: 2px solid #ff2e00;
`;
const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding: 5px;
`;
const StyledInput = styled.input`
  background-color: #d9b8c4;
  border: 1px solid #131515;
  border-radius: 10px;
  margin-left: 5px;
  padding: 5px;
`;
const StyledP = styled.p`
  padding-left: 0.36603221083455345vw;
  font-family: font-family: 'Work Sans', sans-serif;
  font-size: 1.2rem;
  color: white;
  font-weight:bold;

`;
const arrayDePedra = [
  {
    id: 1,
    name: "Pedra Mística de Crack",
    value: 10000.0,
    imageUrl:
      "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-pedras-crack-4f6c906404789.jpg",
  },
  {
    id: 2,
    name: "Pedra Mística de Vênus",
    value: 10000.0,
    imageUrl: "https://pbs.twimg.com/tweet_video_thumb/DZvmrfmXcAUoHGb.jpg",
  },
  {
    id: 3,
    name: "Pedra Mística de Jovem Místico",
    value: 10000.0,
    imageUrl:
      "http://4.bp.blogspot.com/-lypPvLHSDJU/TuVet4rcHUI/AAAAAAAAEoc/1fr2nEzk51E/s1600/malaquita-04.jpg",
  },
  {
    id: 4,
    name: "Pedra Mística de Cogumelo",
    value: 10000.0,
    imageUrl:
      "https://i.pinimg.com/originals/bf/96/48/bf9648be9dd4a19f012bfc2b35aa3dd9.jpg",
  },
];
export default class Home extends React.Component {
  render() {
    return (
      <StyledMain>
        <StyledFlex>
          <StyledP>
            Filtre seus produtos aqui:
            <StyledInput placeholder={"Digite aqui..."}></StyledInput>
          </StyledP>
          <StyledP>
            O que está procurando?
            <StyledInput placeholder={"Digite aqui..."}></StyledInput>
          </StyledP>
        </StyledFlex>
        <section>
          <ProductCards
            imagem="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-pedras-crack-4f6c906404789.jpg"
            produto="Pedra Espacial de Crack"
            botao="Adicionar Produto"
          />
          <ProductCards
            imagem="https://pbs.twimg.com/tweet_video_thumb/DZvmrfmXcAUoHGb.jpg"
            produto="Pedra Espacial de Vênus"
            botao="Adicionar Produto"
          />
          <ProductCards
            imagem="https://anatomich.com/wp-content/uploads/2019/09/significado-da-pedra-topazio-ana-tomich-joias-personalizadas.jpg"
            produto="Pedra Espacial de Jovem Místico"
            botao="Adicionar Produto"
          />
          <ProductCards
            imagem="https://chocairmedicos.com.br/wp-content/uploads/2021/07/pedra-no-rim-o-que-voce-precisa-saber-chocair-medicos-dcd.jpg"
            produto="Pedra Espacial de Rim"
            botao="Adicionar Produto"
          />
        </section>
      </StyledMain>
    );
  }
}
