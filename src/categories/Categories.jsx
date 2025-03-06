import { useState } from "react"
import { useDispatch } from "react-redux";
import { UpdateCategory } from "../../redux/categoryslice";
import { useNavigate } from "react-router-dom";



const CategoriesComponent = () => {

 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [categoryList, setcategory] = useState([
        {
            category_id: 1,
            category_name: "Vegetable",
            category_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4DkzzkH2D2cklW1IcTGZJTc8zj1yX7bR6Q&s'
        },
        {
            category_id: 2,
            category_name: "Fruits",
            category_img: 'https://t4.ftcdn.net/jpg/00/65/70/65/360_F_65706597_uNm2SwlPIuNUDuMwo6stBd81e25Y8K8s.jpg'
        },
        {
            category_id: 3,
            category_name: "Bevarages",
            category_img: 'https://www.shutterstock.com/image-photo/variety-takeaway-drink-options-including-600nw-2496910213.jpg'
        },

    ]);


    const handlecategory= (id) =>{

        const selectedcategory = categoryList.find((e)=>e.category_id === id);

        dispatch(UpdateCategory(selectedcategory));
        navigate('/itemsdetails')
    }

    return (
        <>
            <div className="fs-3 fw-bold p-3">Categories</div>
            <div className="p-3 d-flex flex-wrap justify-content-evenly">
            {categoryList.map((list) => {
                return <div key={list.category_id} className="card" style={{ width: '18rem' }} >
                    <img src={list.category_img} className="card-img-top" alt="..." onClick={()=>handlecategory(list.category_id)}></img>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <h5 className="card-title fs-3">{list.category_name}</h5>
                    </div>
                </div>
            })}
            </div>
        </>
    )
}

export default CategoriesComponent;