import { useGlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { user, toggleLogin, cart } = useGlobalContext();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-xl font-bold">Nordic Steps</h1>
      <ul className="flex gap-4">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="flex items-center gap-4">
        <span>🛒 Handlekurv ({cart.length})</span>
        <button onClick={toggleLogin}>
          {user ? `Logg ut (${user.name})` : "Logg inn"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
