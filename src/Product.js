import { useGlobalContext } from "../context/GlobalContext";

const Product = ({ item }) => {
  const { addToCart } = useGlobalContext();

  return (
    <div className="border p-4">
      <h3>{item.name}</h3>
      <p>{item.price} NOK</p>
      <button onClick={() => addToCart(item)}>Legg til i handlekurv</button>
    </div>
  );
};

export default Product;
