import React from "react";
import Menu from "./components/Menu";
import dataInit from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel/";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dataInit.categorias[0].videos[0].titulo}
        url={dataInit.categorias[0].videos[0].url}
        videoDescription={"Front-End"}
      />

      <Carousel ignoreFirstVideo category={dataInit.categorias[0]} />
      <Carousel ignoreFirstVideo category={dataInit.categorias[1]} />
      <Carousel ignoreFirstVideo category={dataInit.categorias[2]} />
      <Carousel ignoreFirstVideo category={dataInit.categorias[3]} />
    </div>
  );
}

export default App;
