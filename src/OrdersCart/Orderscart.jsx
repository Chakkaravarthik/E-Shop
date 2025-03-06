import { useState } from "react";
import { useSelector } from "react-redux";


const OrdersCart = () => {

    const orders = useSelector((state)=>state.order.orders)
    console.log(orders);

    

    return (
        <div>
            <h1 className="p-2">Orders</h1>
            <div className="d-flex">
                <div className="d-flex flex-row p-1 flex-wrap " style={{ minWidth: "60%" }}>
                    {orders.map((ele) => (
                        <div key={ele.order_id} className="d-flex flex-column border border-secondary p-2 m-3" style={{ minWidth: "100%" }}>
                            <div className="d-flex fw-bold fs-4 justify-content-between">
                                <div>{`Order Id : ${ele.order_id}`}</div>
                                <div>{`Total : ${ele.order_value} /-`}</div>
                            </div>
                            <h4>Items</h4>
                            {ele.item_details.map((ele1) => (
                                <div
                                    key={ele1.item_id}
                                    className="d-flex flex-row justify-content-between align-items-center bg-light rounded m-1"
                                    style={{ minWidth: "100%" }}
                                >
                                    <div className="rounded d-flex justify-content-center align-items-center  m-2">
                                        <img
                                            src={ele1.item_img}
                                            alt="Image"
                                            style={{ width: "100px", height: "100px" }}
                                        />
                                        <div className="d-flex flex-column">
                                            <h5 className="d-flex align-items-center justify-content-left px-2">
                                                {ele1.item_name}
                                            </h5>
                                            <h5 className="d-flex align-items-center justify-content-left px-2">
                                                {`Rs ${ele1.item_rate}/-`}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="p-1 m-2">
                                        <a className="btn border fw-bold">
                                            {`${ele1.item_quantity} X ${ele1.item_rate} = ${
                                                ele1.item_quantity * ele1.item_rate
                                            }`}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrdersCart;
