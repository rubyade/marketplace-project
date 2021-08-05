import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
