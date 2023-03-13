
import { Navbar } from "../Navbar/Navbar";
import { ItemListContainer } from "../ItenListContainer/ItemListContainer";
import { Products } from "../Products/Products";


export const Home = () => {
    return (
        <div>
            <Navbar/>

            <ItemListContainer/>

            <div className="product-card-container">
                <Products/>
            </div>

        </div>
    );
};



