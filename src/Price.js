import Card from "react-bootstrap/Card";
import JSONobj from "./product";

// Converting JSON into a javascript object property -> price
const productPrice = JSON.parse(JSONobj).price;

function Price() {
  return (
    <>
      {/* Returning the price to be inserted into the card */}
      <Card.Subtitle style={{ textAlign: "right" }} className="mb-2">
        {productPrice}
      </Card.Subtitle>
    </>
  );
}

// Exporting the price
export default Price;
