import { useContext } from "react"
import { dataContext } from "../Context/DataContext";


export const CartElement = () => {
    const { cart } = useContext(dataContext);
    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-card"></img>
                <h3 className="name">{product.nombre}</h3>
                <h4 className="price">{product.precio}$</h4>
            </div>
        );
    });

};

