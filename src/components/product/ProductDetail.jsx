import "../../styles/product.scss";

const ProductDetail = ({ product }) => {
  return (
    <div className="content-area">
      <span className="brand">{product.brand}</span>
      <span className="name">{product.name}</span>
      <span>{product.price} 원</span>
    </div>
  );
};

export default ProductDetail;
