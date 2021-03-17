import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../constants/api";

function DetailPage() {
  const { id } = useParams();
  const url = `${BASE_URL}${PRODUCTS_ENDPOINT}/${id}`;

  console.log(url);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setDetails(url);
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

  console.log(details);
  return (
    <>
      hello
      <p></p>
    </>
  );
}

export default DetailPage;
