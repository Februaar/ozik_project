import PropTypes from "prop-types";
import { ProductItem } from "../components/Item";

export function MainProducts({ loading, products }) {
  return (
    <>
      {loading ? (
        <p className="loading">상품 데이터를 불러오는 중입니다.</p>
      ) : (
        <div className="product-item-container">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

MainProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf.isRequired,
};
