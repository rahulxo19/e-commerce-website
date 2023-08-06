import CartProvider from "./Store/CartProvider";
import NavBar from "./components/NavigationBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <ProductList />
      </CartProvider>
    </>
  );
}

export default App;
