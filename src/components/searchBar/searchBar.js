import React, { useState } from "react";
import "./searchBar.scss";
import data from "../../components/data/data";
import ProductCard from "../../components/productCards/productCards";

const ProductList = () => {
  const [selectedCountry, setSelectedCountry] = useState(null); // Хранение выбранной страны
  const [searchTerm, setSearchTerm] = useState(""); // Хранение текста поиска

  // Обработчик для фильтрации по стране
  const handleFilter = (country) => {
    setSelectedCountry(country);
  };

  // Обработчик для поиска по названию
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Обработчик для сброса фильтров
  const handleReset = () => {
    setSelectedCountry(null);
    setSearchTerm("");
  };

  // Фильтрация данных
  const filteredProducts = data.filter(
    (product) =>
      // Фильтруем только товары, которые соответствуют выбранной стране (если страна выбрана)
      (!selectedCountry || product.country === selectedCountry) &&
      // И проверяем, что название продукта соответствует поисковому запросу
      product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <div className="filter-section">
        <div className="filter-section__search-bar">
          <span className="filter-section__search-bar-name">Looking for</span>
          <input
            type="text"
            placeholder="Start typing here..."
            className="filter-section__search-bar-input"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="filter-section__filter-buttons">
          <span className="filter-section__filter-buttons-name">Or filter</span>
          <div className="filter-section__filter-buttons-buttons-group">
            <button
              className="filter-section__filter-buttons-button"
              onClick={handleReset}
            >
              All
            </button>
            {["Brazil", "Kenya", "Columbia"].map((country) => (
              <button
                key={country}
                className="filter-section__filter-buttons-button"
                onClick={() => handleFilter(country)}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ProductCard data={filteredProducts} />
    </div>
  );
};

export default ProductList;
