import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../redux/cartslice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UpdateSingleItem } from "../../redux/singleitemslice";

const ItemCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const category = useSelector((state) => state.category.category);

  console.log(category);


  const itemdata = [
    { category_id: 1, item_id: 1, item_img: "https://gachwala.in/wp-content/uploads/2022/07/Tomato-Seeds.jpg", item_name: "Tomato", item_rate: 100 },
    { category_id: 1, item_id: 2, item_img: "https://media.istockphoto.com/id/673162168/photo/green-cabbage-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mCc4mXATvCcfp2E9taRJBp-QPYQ_LCj6nE1D7geaqVk=", item_name: "cabbage", item_rate: 100 },
    { category_id: 1, item_id: 3, item_img: "https://media.istockphoto.com/id/162682961/photo/beetroot.jpg?s=612x612&w=0&k=20&c=AzHmJ6fPa44BN7y_rji9nziIXMuOrPeU502KpsPv6Ks=", item_name: "Beetroot", item_rate: 100 },
    { category_id: 1, item_id: 4, item_img: "https://media.istockphoto.com/id/468484516/photo/pepper.jpg?s=612x612&w=0&k=20&c=HWFJLWvWc7CWApipb8kfEBB1WbxnnEXndnSwsl4_obw=", item_name: "Chilli", item_rate: 100 },
    { category_id: 2, item_id: 5, item_img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=", item_name: "Apple", item_rate: 100 },
    { category_id: 2, item_id: 6, item_img: "https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg", item_name: "Banana", item_rate: 100 },
    { category_id: 2, item_id: 7, item_img: "https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo=", item_name: "Watermelon", item_rate: 100 },
    { category_id: 2, item_id: 8, item_img: "https://media.istockphoto.com/id/1352881713/photo/mango-fruit-with-drops-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xNgofvhPOsksKtOMK9sbvQ2qZpMS6WQ3UC6Omv7g8-0=", item_name: "Mango", item_rate: 100 },
    { category_id: 3, item_id: 9, item_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWf7n9uXkyjCRty7UATF-Kgjg7nrmUlFH4A&s", item_name: "Rose Milk", item_rate: 100 },
    { category_id: 3, item_id: 10, item_img: "https://media.istockphoto.com/id/1291175021/photo/chocolate-milkshake.jpg?s=612x612&w=0&k=20&c=LkPVfYUcIdM85m9FI6QrAjXyzvOxrdhBEkmcPmlbTYw=", item_name: "Cholate Milkshake", item_rate: 100 },
    { category_id: 3, item_id: 11, item_img: "https://media.istockphoto.com/id/1297483389/photo/masala-tea-chai.jpg?s=612x612&w=0&k=20&c=Pv-QROSSywNh_qzHIIjHJeJB7OT0ujrKQsSiTgOmJAs=", item_name: "Tea", item_rate: 100 },
    { category_id: 3, item_id: 12, item_img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", item_name: "Coffee", item_rate: 100 },
  ];


  const selectedArr = itemdata.filter((e)=> e.category_id === category[0].category_id);

  const enablesingleitem = (id) =>{
    let singledata = itemdata.find((e)=> e.item_id === id);
    console.log(singledata);
    dispatch(UpdateSingleItem(singledata));
    navigate('/singleitemdetail')
  }

  return (
    <>
    <h3 className="p-3">{category[0].category_name  || ""}</h3>
    <div className="p-3 d-flex flex-wrap justify-content-evenly">
      {selectedArr.map((ele) => {
        const cartItem = cartItems.find((item) => item.item_id === ele.item_id);

        return (
          <div key={ele.item_id} className="card border rounded m-3 d-flex align-items-center justify-content-center" style={{ width: "18rem" }}>
            <Link to='/singleitemdetail'>
            <img src={ele.item_img} className="card-img-top" alt="..." onClick={()=> enablesingleitem(ele.item_id)}/>
            </Link>
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">{`Name : ${ele.item_name}`}</h5>
              <h5 className="card-title fs-6">{`Rate(Rs) : ${ele.item_rate}`}</h5>

              {cartItem ? (
                <div className="p-1 m-2 d-flex align-items-center">
                  <button className="btn border fs-5" onClick={() => dispatch(updateQuantity({ item_id: ele.item_id, amount: 1 }))}>+</button>
                  <span className="btn border px-4 m-4 fw-bold fs-5">{cartItem.item_quantity}</span>
                  <button className="btn border fs-5" onClick={() => dispatch(updateQuantity({ item_id: ele.item_id, amount: -1 }))}>-</button>
                </div>
              ) : (
                <button className="btn btn-primary" onClick={() => dispatch(addToCart(ele))}>Add To Cart</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
  
};

export default ItemCart;
