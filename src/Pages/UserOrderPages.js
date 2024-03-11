import Navbar from "../features/Navbar/Navbar";
import UserOrders from "../features/user/components/userOrders";


function UserOrderPage() {
    return ( 

        <div>

        <Navbar>

            <h1>MY Orders</h1>
            <UserOrders></UserOrders>
            
        </Navbar>
        </div>
     );
}

export default UserOrderPage;



