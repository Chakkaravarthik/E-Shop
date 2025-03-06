import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../redux/cartslice";



const SingleitemComponent = () => {

    const singleitem = useSelector((state) => state.singleitem.singleitem);
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartItem = cartItems.find((item) => item.item_id === singleitem[0].item_id);

    const [item, setitem] = useState([
        {
            item_id: 1,
            item_img: 'https://gachwala.in/wp-content/uploads/2022/07/Tomato-Seeds.jpg',
            item_name: 'Tomato',
            item_description: "A sample content description for a tomato could be: A juicy, round, red fruit with a slightly sweet flavor, rich in lycopene, vitamin C, and potassium, commonly used in salads, sauces, and cooking; with approximately 95% water content, providing a low-calorie source of essential nutrients.",
            item_rate: 130
        }
    ]);

    return (
        <>
            <div>
                <div>
                    <h1 className="p-3">{singleitem[0].item_name}</h1>
                </div>
                <div className="d-flex flex-row " >
                    <div className="d-flex justify-content-center align-items-center p-2 m-3 border rounded " style={{ minWidth: '50%' }}>
                        <img src={singleitem[0].item_img} alt="Image" style={{ width: '500px', height: '50vh' }}></img>

                    </div>
                    <div className="p-2 m-3">
                        <h1>{singleitem[0].item_name}</h1>
                        <p className="fs-4">{item[0].item_description} </p>
                        <p className="fs-3">{`Rs ${singleitem[0].item_rate}`}`</p>
                        <div className="">
                            {cartItem ? (
                                <div className="p-1 m-2 d-flex align-items-center">
                                    <button className="btn border fs-5" onClick={() => dispatch(updateQuantity({ item_id: singleitem[0].item_id, amount: 1 }))}>+</button>
                                    <span className="btn border px-4 m-4 fw-bold fs-5">{cartItem.item_quantity}</span>
                                    <button className="btn border fs-5" onClick={() => dispatch(updateQuantity({ item_id: singleitem[0].item_id, amount: -1 }))}>-</button>
                                </div>
                            ) : (
                                <button className="btn btn-primary" onClick={() => dispatch(addToCart(singleitem[0]))}>Add To Cart</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleitemComponent;