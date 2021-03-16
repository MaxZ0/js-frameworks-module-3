import Product from "../product/Product";
import { useParams } from "react-router-dom";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../constants/api";

export default function DetailPage() {
  const { id } = useParams();
  const url = `${BASE_URL}${PRODUCTS_ENDPOINT}/${id}`;
  console.log(url);
  return (
    <Product>
      <p>Hello</p>
    </Product>
  );
}
