import { useState , useId } from "react";
import{ useDispatch } from "react-redux" ;
import { useNavigate } from "react-router-dom" ;

function AddItems(){
    const dispatch = useDispatch();
    const navigate = useNavigate() ;

    const id = useId();

    const [title , setTitle] = useState("") ;
    const [price , setPrice] = useState("") ;


    const addItem = (e) => {
        e.preventDefault()  ;

    
        //* create single product

        const single_product = {
            id : id ,
            title : title ,
            price : price 
        }

        dispatch({ type : "ADD_ITEM" , payload : single_product }) ;
        navigate("/") ;
    }


    return (
        <div className="add--items">
            <h2>Add item</h2>
            <form onSubmit={addItem} >
                <div className="form-group">
                    <label>Intitule</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Prix</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success mt-2">Add item</button>
            </form>
        </div>
    )
}

export default AddItems ;