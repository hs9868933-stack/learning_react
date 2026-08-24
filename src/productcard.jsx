function Productcard({ name, description, price, avai }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Product Name: {name}</h2>
      <p>Product Description: {description}</p>
      <p>Price: ₹{price}</p>
      <p>
          Available:{" "}
          <span style={{ color: avai ? "green" : "red" }}>
              {avai ? "Available" : "Not Available"}
          </span>
      </p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
}

export default Productcard;