import {adidasArr} from "./Adidas.tsx";
import {useParams} from "react-router-dom";

const Model = () => {
    const {id} = useParams();

    const item = adidasArr.find(item => item.id === id)

    if (!item) {
        return <div
            style={{padding: "20px", textAlign: "center"}}
        >
            Нет такой модели
        </div>
    }

    return (
        <div style={{padding: "20px"}}>
            <h2>{item.model}</h2>
            <h3>{item.collection}</h3>
            <h4>{item.price}</h4>
            <img src={item.picture} alt={item.model}/>
        </div>

    );
};

export default Model;