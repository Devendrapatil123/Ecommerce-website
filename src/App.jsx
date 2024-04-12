import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Allproducts from "./components/Allproducts/Allproducts.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirbaseAuth/FirbaseAuth.js";
import SingleProducts from "./pages/SingleProducts/SingleProducts.jsx";
import toast from "react-hot-toast";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [Discount, setDiscount] = useState(0);
  const [invalid, setInvalid] = useState("INVALID PROMO CODE");

  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const AddToCart = (product) => {
    if (isLoggedIn) {
      const isCardExist = cart.find((finditem) => finditem.id === product.id);

      if (isCardExist) {
        const updateCard = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updateCard);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      toast.success("Product added successfully");
    } else {
      toast.error("Please Login");
    }
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        setIsLoggedIn(true);
      } else {
        setUserName("");
        setIsLoggedIn(false);
      }
      return unsubsribe
    });
  }, []);

  const HandleIncerease = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(incQuantity);
  };

  const HandleDecrease = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decQuantity);
  };

  const handleRemove = (id) => {
    const removeItem = cart.filter((filteritem) => filteritem.id != id);
    setCart(removeItem);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);
    return totalPrice - Discount;
  };

  const shippingPrice = () => {
    return getTotalPrice() + 10;
  };

  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(getTotalPrice() * 0.1);
      setPromoCode("");
    } else {
      setInvalid(invalid);
    }
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} username={userName} />
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart} />}></Route>
            <Route
              path="/Cart"
              element={
                <Cart
                  cart={cart}
                  HandleIncerease={HandleIncerease}
                  HandleDecrease={HandleDecrease}
                  handleRemove={handleRemove}
                  getTotalPrice={getTotalPrice}
                  shippingPrice={shippingPrice}
                  promoCode={promoCode}
                  setPromoCode={setPromoCode}
                  applyPromoCode={applyPromoCode}
                  invalid={invalid}
                />
              }
            ></Route>
            <Route
              path="/Allproducts"
              element={<Allproducts AddToCart={AddToCart} />}
            ></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route
              path="/SingleProducts/:productId"
              element={<SingleProducts AddToCart={AddToCart} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="/SignUp" element={<SignUp />}></Route>
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
