import PropTypes from "prop-types";
import { ProductItem } from "../components/Item";

export function MainProducts({ loading, products }) {
  if (loading) {
    return <p className="loading">상품 데이터를 불러오는 중입니다.</p>;
  }

  if (!products || products.length === 0) {
    return <p className="loading">현재 상품이 없습니다.</p>;
  }

  return (
    <>
      <div className="product-item-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

MainProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
};
