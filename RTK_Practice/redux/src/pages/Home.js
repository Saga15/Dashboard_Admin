import Products from "../Components/Products";
function Home() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Welcome to Redux Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
}

export default Home;
