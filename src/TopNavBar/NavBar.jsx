import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { Link, useNavigate } from "react-router-dom";
import { removecategory } from "../../redux/categoryslice";
import { RemoveSingleItem } from "../../redux/singleitemslice";


const NavBar = () => {

    const cartitems = useSelector((state)=> state.cart.cartItems)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleevent = (e)=>{
        e.preventDefault();
        navigate('/');
        dispatch(removecategory());
        dispatch(RemoveSingleItem());
    }
 
    return (
        <>
            <nav className=" navbar-light bg-light shadow-lg p-2">
                <div className="d-flex p-2 justify-content-between">
                    <div className="container-fluid" >
                        <a className="navbar-brand p-3 fs-3" href="/" onClick={handleevent}>E-Shop</a>
                    </div>
                    <div className="d-flex justify-content-end flex-fill px-4" >
                        <Link to='/cartitems' className="btn" style={{padding:'none'}}>
                        <div className="btn btn-secondary d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                        <div className="fs-3 px-1">{`${cartitems.length}`}</div>
                        </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;