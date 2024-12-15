import "../../styles/product.scss";

const CartButton = ({ isAdding, onCartClick }) => {
  return (
    <button
      onClick={onCartClick}
      className={`button ${isAdding ? "clicked" : ""}`}
    >
      고민해볼래요
    </button>
  );
};

export default CartButton;
