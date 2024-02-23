import Navbar from "../features/Navbar/Navbar";
// import ProductDetails from "../features/product/Components/ProductDetails";
import ProductList from "../features/product/Components/ProductList";
// import CartPage from "./CartPage";
// import ProductDetailsPage from "./ProductDetailsPage";
// import VideoPlayerComponent from "./VideoPlayerComponent"
function Home() {
    return ( 
        <div>
            <Navbar>
                
                <ProductList></ProductList>
            </Navbar>
                {/* <VideoPlayerComponent></VideoPlayerComponent> */}
                
            

        </div>

     );
}

export default Home;