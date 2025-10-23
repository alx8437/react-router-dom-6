
import {adidasArr} from "./Adidas.tsx";
import {useParams} from "react-router-dom";

const Model = () => {
    const {id} = useParams();

    const productId = Number(id)

    return (
        <div>
            <h2>{adidasArr[productId].model}</h2>
            <h3>{adidasArr[productId].collection}</h3>
            <h4>{adidasArr[productId].price}</h4>
            <img src={adidasArr[productId].picture} alt={adidasArr[productId].model}/>
        </div>

    );
};

export default Model;