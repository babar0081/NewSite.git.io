import Navbar from "../features/Navbar/Navbar";
// import ProductDetails from "../features/product/Components/ProductDetails";
import ProductList from "../features/product/Components/ProductList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import CartPage from "./CartPage";
// import ProductDetailsPage from "./ProductDetailsPage";
// import VideoPlayerComponent from "./VideoPlayerComponent"
function Home() {
    return ( 
        <div>
            <Navbar>
                
                <ProductList></ProductList>
            </Navbar>
            <ToastContainer />
                {/* <VideoPlayerComponent></VideoPlayerComponent> */}
                
            

        </div>

     );
}

export default Home;