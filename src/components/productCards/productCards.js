import React from "react";
import "./productCards.scss";
import { Link } from "react-router";

const ProductCard = ({ data }) => {
  return (
    <section className="product-cards">
      <div className="product-cards__content">
        <div className="product-cards__grid">
          {data.map((product) => (
            <Link
              key={product.id}
              to={`/about/product/${product.id}`}
              className="product-cards__card product-card"
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-card__img"
              />
              <h3 className="product-card__name">{product.name}</h3>
              <h3 className="product-card__country">{product.country}</h3>
              <p className="product-card__price">{product.price + "$"}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
