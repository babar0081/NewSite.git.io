import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/Product-list/ProductList";
import LoginPage from "./LoginPage";

function Home() {
    return ( 
        <div>
            {/* <Navbar>
                <ProductList></ProductList>
            </Navbar> */}
            <LoginPage></LoginPage>

        </div>

     );
}

export default Home;