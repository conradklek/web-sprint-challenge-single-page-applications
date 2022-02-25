import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id="hero">
        <img
          alt="hero"
          src="https://images.unsplash.com/photo-1590905666454-d24131c16f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80"
        />
      </div>
      <Link to="/pizza">
        <button id="order-pizza">Order Pizza</button>
      </Link>
    </div>
  );
};
export default Home;
