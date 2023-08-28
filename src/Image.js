import Card from 'react-bootstrap/Card';
import JSONobj from "./product";

// Converting JSON into a javascript object property -> Image
const productImage = JSON.parse(JSONobj).image

function Image() {

    return (
        <>
            {/* Returning an image to be inserted into the card */}
            <Card.Img variant="top" src={productImage} />
        </>
    )
}

// Exporting the image
export default Image;



