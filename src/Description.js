import Card from "react-bootstrap/Card";
import JSONobj from "./product";

// Converting JSON into a javascript object property -> description
const productDescription = JSON.parse(JSONobj).description;

function Description() {
  return (
    <>
      {/* Returning the description to be inserted into the card */}
      <Card.Text>{productDescription}</Card.Text>
    </>
  );
}

// Exporting the description
export default Description;
