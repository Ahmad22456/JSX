import Card from "react-bootstrap/Card";
import JSONobj from "./product";

// Converting JSON into a javascript object property -> name
const productName = JSON.parse(JSONobj).name;

function Name() {
  return (
    <>
      {/* Returning the name to be inserted into the card */}
      <Card.Title>{productName}</Card.Title>
    </>
  );
}

// Exporting the name
export default Name;
