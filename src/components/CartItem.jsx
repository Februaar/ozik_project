import CartItemImage from "../ui/image";

const CartItem = () => {
  return (
    <div>
      <CartItemImage />
      <CartItemQuantity />
      <DeleteButton />
    </div>
  );
};

export default CartItem;
