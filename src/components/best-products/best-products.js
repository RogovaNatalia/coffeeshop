import React from "react";
import "./best-products.scss";
import solimoImg from "../../resources/solimo.jpg";
import prestoImg from "../../resources/presto.jpg";
import aromistoImg from "../../resources/aromisto.jpg";

const BestProducts = () => {
  const products = [
    {
      id: 1,
      image: solimoImg,
      name: "Solimo Coffee Beans 2 kg",
      price: 10.73,
    },
    {
      id: 2,
      image: prestoImg,
      name: "Presto Coffee Beans 1 kg",
      price: 15.99,
    },
    {
      id: 3,
      image: aromistoImg,
      name: "AROMISTICO Coffee 1 kg",
      price: 6.99,
    },
  ];

  return (
    <section className="best-products">
      <div className="best-products__content">
        <h1 className="best-products__title">Our best</h1>
        <div className="best-products__grid">
          {products.map((product) => (
            <div key={product.id} className="best-products__card">
              <img
                src={product.image}
                alt={product.name}
                className="best-products__img"
              />
              <h3 className="best-products__name">{product.name}</h3>
              <p className="best-products__price">{product.price + "$"}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
