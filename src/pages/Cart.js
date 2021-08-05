import Header from "../components/layout/Header";
import Image from "../components/layout2/Image";
import Add from "../components/layout2/Add";
import Total from "../components/layout2/Total";
import Calculate from "../components/layout2/Calculate";
import Delivery from "../components/layout2/Delivery";

function CartPage() {
  return (
    <div>
      <Header />
      <div className="cartsection">
        <h6 className="carthome">Home</h6>
        <h6 className="cartbold">cart</h6>
      </div>

      <h1 className="cart-text">Cart</h1>

      <div className="serve-container">
        <Image />
        <Add text="KFC - King Bucket" />
        <Total text="#10,000" />
      </div>
      <hr />

      <div className="serve-container">
        <Image />
        <Add text="Refuel Max" />
        <Total text="#1,200" />
      </div>
      <hr />

      <div className="serve-container">
        <Image />
        <Add text="Refuel Max" />
        <Total text="#1,200" />
      </div>
      <hr />
      <Delivery />
      <hr />
      <Calculate />
    </div>
  );
}

export default CartPage;
