import { GlobalProvider } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  const sampleProduct = { id: 1, name: "Tursko", price: 799 };

  return (
    <GlobalProvider>
      <Navbar />
      <Product item={sampleProduct} />
      <Cart />
    </GlobalProvider>
  );
}

export default App;
