import React ,{useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";

import "../styles/Store.css";

// import mockObjects from "../objects/simplified.json";

function Store() {
  
  const [produtos,setProdutos] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://localhost:8081/product');
      response = await response.json();
      setProdutos(response);
    }

    fetchMyAPI();
  }, []);


  return (
    <main id="main-store">
      {/* <div className="filters">
        <h2 className="filter-header"> Filtros</h2>
        <ul className="filter-list">
          <li>
            <input type="checkbox" name="motherboards" />
            <label htmlFor="motherboards">Motherboards</label>
          </li>
          <li>
            <input type="checkbox" name="gpus" />
            <label htmlFor="gpus">GPUs</label>
          </li>
          <li>
            <input type="checkbox" name="cpus" />
            <label htmlFor="cpus">CPUs</label>
          </li>
        </ul>
      </div> */}

      <div className="stand-store">
        {produtos.map((produto) => 
          <ProductCard
            key={produto._id}
            id={produto._id}
            productImage={produto.thumbnail}
            productName={produto.title}
            productPrice={produto.price}
          />
        )}
        
      </div>
    </main>
  );
}

export default Store;
