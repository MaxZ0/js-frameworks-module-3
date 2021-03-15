import { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import { BASE_URL } from "../../constants/api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductList({}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setProducts(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="card-container">Loading...</div>;
  }
  if (error) {
    return <div>ERROR: {error}</div>;
  }

  return (
    <>
      <Heading content="Product" />
      {products.map(function (product) {
        return (
          <div key={product.id} className="card-container">
            <div>
              <h4>{product.title}</h4>
              <Link to={`/product/${product.id}`}>
                <button> Product Detail</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

ProductList.propTypes = {
  children: PropTypes.node,
};

export default ProductList;
