import {useState} from "react" ;
import { useSelector , useDispatch } from "react-redux";

import { useNavigate , useParams } from "react-router-dom" ;



function UpdateItem(){
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const { id } = useParams() ;
    const product = useSelector( data => data.find( ele => ele.id === id  ) ) ;

    const [title , setTitle] = useState(product.title) ;
    const [price , setPrice] = useState(product.price) ;

    const updateItem = (e) => {
        e.preventDefault() ;
        const single_product = {
            id : id ,
            title : title ,
            price : price 
        }

        dispatch( { type : "UPDATE_ITEM" , payload : single_product  } )
        navigate("/") ;
    }

    return (
        <div className="add--items">
        <h2>Update item</h2>
        <form onSubmit={updateItem}>
            <div className="form-group">
                <label>Intitule</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Prix</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" />
            </div>
            <button type="submit"  className="btn btn-success mt-2">Update</button>
        </form>
    </div>
    )
}

export default UpdateItem ;