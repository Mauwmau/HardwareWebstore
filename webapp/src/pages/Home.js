import React from "react";
import {Link} from 'react-router-dom';

import "../styles/Home.css";

function Home() {

  const bannerPlacaDeVideo = "images/banner-placadevideo.jpg";
  const bannerPlacaMae = "images/banner-placamae.jpg";
  const bannerCPU = "images/banner-cpu.jpeg";

  return (
    <main className="stand">
      <div className="category">
        <h2 className="category-name"> Placa de Vídeo </h2>
        <div className="banner">
          <Link to="/store?filter=gpu">
            <img src={bannerPlacaDeVideo} alt="Placas de Vídeo" />
          </Link>
        </div>
      </div>

      <div className="category">
        <h2 className="category-name"> Placa Mãe </h2>
        <div className="banner">
          <Link to="/store?filter=motherboard">
            <img src={bannerPlacaMae} alt="Placa mãe" />
          </Link>
        </div>
      </div>

      <div className="category">
        <h2 className="category-name"> Processador </h2>
        <div className="banner">
          <Link to="/store?filter=cpu">
            <img src={bannerCPU} alt="Processador" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
