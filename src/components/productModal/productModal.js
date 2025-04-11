import "./productModal.scss";
import LogoBeans from "../../resources/Beans_logo_black.svg";

const ProductModal = ({ product }) => {
  return (
    <div className="modal">
      <img src={product.imageModal} alt={product.name} className="modal__img" />
      <div className="modal__content">
        <h2 className="modal__title">About it</h2>
        <img className="modal__logo-img" src={LogoBeans} alt={"LogoBeans"} />
        <p className="modal__descr">
          <strong>Country:</strong> {product.country}
        </p>
        <p className="modal__descr">
          <strong>Description:</strong> {product.discription}
        </p>
        <p className="modal__price">
          <strong>Price:</strong> {product.price + "$"}
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
