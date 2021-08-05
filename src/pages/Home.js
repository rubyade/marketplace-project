import Address from "../components/layout/Address";
import Interest from "../components/layout/Interest";
import Header from "../components/layout/Header";
import Serve from "../components/layout/Serve";
import Title from "../components/layout/Title";
import Contact from "../components/layout/Contact"
import Footer from "../components/layout/Footer"

function HomePage() {
  return (
    <div>
      <Header />
      <Title />
      <Address />
      <Interest />
      <Serve />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
