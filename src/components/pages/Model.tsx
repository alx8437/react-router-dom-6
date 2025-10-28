import {adidasArr} from "./Adidas.tsx";
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma.tsx";

const brandArrays = {
    adidas: adidasArr,
    puma: pumaArr,
};

const Model = () => {
    const {id, brand} = useParams();

    const currentBrandArray = brandArrays[brand as keyof typeof brandArrays]

    if (!currentBrandArray) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                Бренд не найден
            </div>
        );
    }

    const item = currentBrandArray.find(item => item.id === id)

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