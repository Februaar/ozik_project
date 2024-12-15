import "../../styles/product.scss";
import { add, remove } from "../../img";

const QuantityControl = ({
  quantity,
  totalAmount,
  onQuantityChange,
  onTotalAmountChange,
}) => {
  const handlePlusQuantity = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(newQuantity);
    onTotalAmountChange(newQuantity * totalAmount);
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      onQuantityChange(newQuantity);
      onTotalAmountChange(newQuantity * totalAmount);
    }
  };

  return (
    <div className="quantity-area">
      <div className="quantity-controls">
        <button onClick={handleMinusQuantity}>
          <img src={remove} width={18} height={18} alt="decrease" />
        </button>
        <span>{quantity}</span>
        <button onClick={handlePlusQuantity}>
          <img src={add} width={18} height={18} alt="increase" />
        </button>
      </div>
      <span>{totalAmount} 원</span>
    </div>
  );
};

export default QuantityControl;
