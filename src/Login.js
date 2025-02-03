import { useGlobalContext } from "../context/GlobalContext";

const Login = () => {
  const { setUser } = useGlobalContext();

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
