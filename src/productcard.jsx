function Productcard({ name, description, price, avai }) {
  return (
    <div className="product-card">

      <div className="product-image">
        📱
      </div>

      <h2>{name}</h2>

      <p className="description">
        {description}
      </p>

      <p className="price">
        ₹{price.toLocaleString("en-IN")}
      </p>

      <p className={avai ? "available" : "not-available"}>
        {avai ? "✓ Available" : "✕ Not Available"}
      </p>

      <div className="button-container">

        <button
          className="cart-btn"
          disabled={!avai}
        >
          Add to Cart
        </button>

        <button
          className="buy-btn"
          disabled={!avai}
        >
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default Productcard;