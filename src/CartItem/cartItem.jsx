import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../redux/orderslice";
import { updateQuantity, removeFromCart} from "../../redux/cartslice";
import { useNavigate } from "react-router-dom";


const CartItem = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.item_rate * item.item_quantity, 0);
    };

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) {
            alert("Cart is empty!");
            return;
        }

        const newOrder = {
            order_id: Date.now(), 
            order_value: calculateTotal(),
            item_details: cartItems,
        };


        console.log("Dispatching order:", newOrder);
        dispatch(createOrder(newOrder));
        dispatch(removeFromCart());
        navigate('/orders')
    };

    return (
        <div>
            <h1 className="p-3">Cart Items</h1>
            <div className="d-flex">
                <div className="d-flex flex-row p-3 flex-wrap" style={{ minWidth: "60%" }}>
                    {cartItems.map((ele) => (
                        <div key={ele.item_id} className="d-flex flex-row justify-content-between align-items-center border rounded m-1" style={{ minWidth: "100%" }}>
                            <div className="border rounded d-flex justify-content-center align-items-center p-1 m-2">
                                <img src={ele.item_img} alt="Image" style={{ width: "100px", height: "100px" }} />
                                <div className="d-flex flex-column">
                                    <h5 className="d-flex align-items-center justify-content-left px-2">{ele.item_name}</h5>
                                    <h5 className="d-flex align-items-center justify-content-left px-2">{`Rs ${ele.item_rate}/-`}</h5>
                                </div>
                            </div>
                            <div className="p-1 m-2">
                                <a className="btn border fs-5" onClick={()=>{dispatch(updateQuantity({ item_id: ele.item_id, amount: 1 }))}}>+</a>
                                <a className="btn border px-5 m-4 fw-bold fs-5">{ele.item_quantity}</a>
                                <a className="btn border fs-5" onClick={()=>{dispatch(updateQuantity({ item_id: ele.item_id, amount: -1 }))}}>-</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-3 d-flex flex-column" style={{ minWidth: "30%" }}>
                    <div className="border rounded">
                        <h5 className="fw-bold p-2">Summary</h5>
                        <div className="p-2">
                            {cartItems.map((ele) => (
                                <div className="d-flex justify-content-between p-1" key={ele.item_id}>
                                    <h5>{ele.item_name}</h5>
                                    <div className="d-flex">
                                        <a className="btn border">{`${ele.item_quantity} X ${ele.item_rate} = ${ele.item_quantity * ele.item_rate}`}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex justify-content-end p-2">
                            <a className="btn p-2 fs-4 fw-bold">{`Total = ${calculateTotal()} /-`}</a>
                        </div>
                    </div>
                    <button className="btn btn-primary my-3" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
