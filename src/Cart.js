import { useGlobalContext } from "../context/GlobalContext";

const Cart = () => {
  const { cart, removeFromCart } = useGlobalContext();

  return (
    <div>
      <h2>Handlekurv</h2>
      {cart.length === 0 ? <p>Handlekurven er tom</p> : null}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} NOK
            <button onClick={() => removeFromCart(item.id)}>❌ Fjern</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
