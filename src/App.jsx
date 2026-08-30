import "./App.css";
import Productcard from "./productcard";
import Counter from "./Counter";
// import Hook from "./Hook";

function App() {
  return (
    <>
      <h1>My Products</h1>

      <div className="product-container">

        <Productcard
          name="iPhone 17"
          description="Latest Apple smartphone"
          price={93000}
          avai={true}
        />

        <Productcard
          name="Samsung S26"
          description="Premium Samsung smartphone"
          price={85000}
          avai={true}
        />

        <Productcard
          name="Realme GT 6T"
          description="Powerful gaming smartphone"
          price={32000}
          avai={true}
        />

        <Productcard
          name="OnePlus 13"
          description="Fast and premium Android phone"
          price={69000}
          avai={true}
        />

        <Productcard
          name="Google Pixel 9"
          description="Google smartphone with great camera"
          price={75000}
          avai={false}
        />

        <Productcard
          name="Nothing Phone 3"
          description="Stylish smartphone with unique design"
          price={45000}
          avai={true}
        />

        <Productcard
          name="Xiaomi 15"
          description="High performance Xiaomi smartphone"
          price={55000}
          avai={true}
        />

        <Productcard
          name="Vivo X200"
          description="Premium smartphone with powerful camera"
          price={62000}
          avai={false}
        />

        <Productcard
          name="Oppo Find X8"
          description="Premium Oppo smartphone"
          price={58000}
          avai={true}
        />

        <Productcard
          name="Motorola Edge 60"
          description="Modern smartphone with clean Android"
          price={38000}
          avai={true}
        />

      </div>

      <Counter />
      
    </>
  );
}

export default App;