import Navbar from "../features/Navbar/Navbar";
import ProductDetails from "../features/product/Components/ProductDetails";
import ProductList from "../features/product/Components/ProductList";
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