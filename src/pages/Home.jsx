import React from "react";
import styled from "styled-components";
import ProductCards from "../components/ProductCards";
import imagem1 from "../assets/pedra1.jpg";
import imagem2 from "../assets/pedra2.jpg";
import imagem3 from "../assets/pedra3.jpg";
import imagem4 from "../assets/pedra4.jpg";

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
      <div>
        <div>
          <input>{/* Inserir Filtro */}</input>
          <input>{/* Barra de Pesquisa */}</input>
        </div>
        <section>
          <ProductCards
            imagem="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-pedras-crack-4f6c906404789.jpg"
            produto="Pedra Mística de Crack"
          />
          <ProductCards
            imagem="https://pbs.twimg.com/tweet_video_thumb/DZvmrfmXcAUoHGb.jpg"
            produto="Pedra Mística de Vênus"
          />
          <ProductCards
            imagem="https://anatomich.com/wp-content/uploads/2019/09/significado-da-pedra-topazio-ana-tomich-joias-personalizadas.jpg"
            produto="Pedra Mística de Jovem Místico"
          />
          <ProductCards
            imagem="https://chocairmedicos.com.br/wp-content/uploads/2021/07/pedra-no-rim-o-que-voce-precisa-saber-chocair-medicos-dcd.jpg"
            produto="Pedra Mística de Rim"
          />
        </section>
      </div>
    );
  }
}
