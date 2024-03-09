import Swal from "sweetalert2";

import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import {discountedPrice} from "../../app/Constants";

import "react-toastify/dist/ReactToastify.css";
import {deleteItemsFromCartAsync, selectItems, updateCartAsync} from "./CartSlice";

export default function Cart() {
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(true);
    const items = useSelector(selectItems);
    console.log({items});
    const totalAmount = items.reduce((amount, item) => discountedPrice(item.product) * item.quantity + amount, 0);
    const totalItems = items.reduce((total, item) => item.quantity + total, 0);

    const handleQuantity = (e, item) => {
        dispatch(updateCartAsync({id: item.id, quantity: +e.target.value}));

        // Show SweetAlert2 notification
        Swal.fire({
            icon: "success",
            title: "Item Updated!",
            timerProgressBar: true,
            showConfirmButton: true,
            timer: 1000, // Close the notification after 1.5 seconds
        });
    };

    const handleRemove = (e, id) => {
        e.preventDefault();

        // Show SweetAlert confirmation dialog
        Swal.fire({
            title: "Are you sure?",
            text: "You are about to remove this item from your cart",
            icon: "warning",
            timer: 1000, // 1000 milliseconds = 1 seconds
            timerProgressBar: true,
            showCancelButton: true,
            confirmButtonColor: "#007bff", // Set the background color of the confirm button
            cancelButtonColor: "#6c757d", // Set the background color of the cancel button
            confirmButtonText: "Yes, remove it!",
            customClass: {
                confirmButton: "confirm-button-class", // Apply custom class to the confirm button
            },
            // Inline CSS for the confirm button
            style: `
        .confirm-button-class {
          color: #ffffff; /* Set the text color of the confirm button to white */
        }
      `,
        }).then((result) => {
            if (result.isConfirmed) {
                // Dispatch action to remove item from cart
                dispatch(deleteItemsFromCartAsync(id));

                // Show success message
                Swal.fire({
                    title: "Removed!",
                    text: "The item has been removed from your cart.",
                    icon: "success",
                    timer: 1000, // 1000 milliseconds = 1 seconds
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            }
        });
    };
    return (
        <>
            {!items.length && <Navigate to="/" replace={true}></Navigate>}

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t bg-white mt-10 border-gray-200 px-4 py-6 sm:px-6">
                    <h1 className="text-4xl my-2 font-bold tracking-tight text-gray-900 ">Cart</h1>
                    <div className="flow-root my-3 ">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {items.map((item) => (
                                <li key={item.product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={item.product.thumbnail}
                                            alt={item.product.title}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href={item.product.id}>{item.product.title}</a>
                                                </h3>
                                                <p className="ml-4">${discountedPrice(item.product)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="text-gray-500">
                                                <label
                                                    htmlFor="quantity"
                                                    className="inline mr-4 text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Quantity
                                                </label>
                                                <select onChange={(e) => handleQuantity(e, item)} value={item.quantity}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>

                                            <div className="flex">
                                                <button
                                                    onClick={(e) => handleRemove(e, item.id)}
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p> $ {totalAmount}</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total Items in Cart</p>
                        <p> {totalItems} Items</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <Link to="/Checkout">
                        <div className="mt-6">
                            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Checkout
                            </button>
                        </div>
                    </Link>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or{" "}
                            <Link to="/">
                                <button
                                    type="button"
                                    className="font-medium  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => setOpen(false)}
                                >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
