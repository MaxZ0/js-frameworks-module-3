import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../constants/api";
import PropTypes from "prop-types";
import dateFormat from "dateformat";

function DetailPage() {
  const { id } = useParams();

  const url = `${BASE_URL}${PRODUCTS_ENDPOINT}/${id}`;
  const [details, setDetails] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setDetails(json);
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
  console.log("It me", details);
  return (
    <>
      <h3>{details.title}</h3>
      {dateFormat(details.updated_at, "dddd, mmmm, yyyy")}
      <h4>{details.price}</h4>
      <h4>
        <img src={details.image_url}></img>
      </h4>
    </>
  );
}

DetailPage.propTypes = {
  name: PropTypes.string,
};

export default DetailPage;
