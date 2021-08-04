import { Route, Switch } from "react-router-dom";
import CartPage from "./pages/Cart.js";
import Title from "./components/Title";
import Address from "./components/Address";
import Interest from "./components/Interest";
import Serve from "./components/Serve";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Address />
      <Interest />
      <Serve />
      <Contact />
      <Footer />
      <Switch>
        <Route path='/'>
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
