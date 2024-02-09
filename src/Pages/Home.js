import Navbar from "../features/Navbar/Navbar";
import ProductDetails from "../features/Product-list/Components/ProductDetails";
import ProductList from "../features/Product-list/Components/ProductList";
import CartPage from "./CartPage";
import ProductDetailsPage from "./ProductDetailsPage";

function Home() {
    return ( 
        <div>
            <Navbar>
                <ProductList></ProductList>
                <ProductDetails></ProductDetails>
                <CartPage></CartPage>
            </Navbar>
            

        </div>

     );
}

export default Home;