import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css"

export const Products = () => {
    const { data,cart, setCart } = useContext(dataContext);

    const buyProducts = (product) => {
        setCart([...cart, product]);
    };

    return data.map ((product) => {
        return(
            <div className="card" key={product.id}>
                <img src={product.img} alt='img-product-card'></img>
                <h3>{product.nombre}</h3>
                <h4>{product.precio}$</h4>
                <button className="card button" onClick={()=>buyProducts(product)}>Comprar</button>
            </div>

        );
    });
};
