import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../utils/Context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);
  if (!data) return;
  const product = data.data[0].attributes;

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decriment = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <div className="name">{product.title}</div>
            <div className="price">{product.price} &#8377;</div>
            <div className="desc">{product.desc}</div>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decriment}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                <span>Add To Cart</span>
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
