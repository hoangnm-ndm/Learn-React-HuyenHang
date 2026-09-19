import { useState } from "react";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

// * Xây một component Products dùng các component Item để hiển thị nhiều sản phẩm từ 1 array.

function Button({ color, size, children, onClick }) {
  console.log(color);
  // * props = properties
  return (
    <button style={{ backgroundColor: color, color: "#fff" }} onClick={onClick}>
      {children}
    </button>
  );
}

function Child({ count }) {
  console.log(count);
  return (
    <>
      <p>Child Component: {count}</p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 10);
    // setCount((prev) => prev + 100);
  };
  return (
    <>
      <Header />
      <main>
        <h1>Noi dung chinh cua trang</h1>
      </main>
      <button onClick={handleClick}>Increment {count}</button>
      <Child count={count} />
      <Footer />
    </>
  );
}

export default App;
