import { Link } from "react-router-dom" ;
import { useSelector } from "react-redux";
import{ useDispatch } from "react-redux" ;
import { useNavigate } from "react-router-dom" ;


function ListItems() {
    const products = useSelector( data => data ) ;
    const dispatch = useDispatch();
    const navigate = useNavigate() ;


    const deleteItem = (id) => {
        dispatch( { type : "DELETE_ITEM" , payload : id } ) ;
        navigate("/") ;

    }

    return (
        <div className="list--item">
            <Link className="btn btn-primary" to="/add" >
                Add item
            </Link>
            <h2>Les list des produits :</h2>

            <table className="table table-bordered mt-4">
                <tr className="bg-success text-light">
                    <td>Id</td>
                    <td>Intitul</td>
                    <td>Prix</td>
                    <td>Delete</td>
                    <td>Update</td>
                </tr>

                { products.map(product => {
                    return (
                        <tr key={product.id} className="text-dark">
                            <td> {product.id} </td>
                            <td> { product.title } </td>
                            <td> {product.price} DH</td>
                            <td> 
                            <Link to={`update/${product.id}`} >
                                Update
                            </Link>
                            </td>
                            <td> <button onClick={ () => deleteItem(product.id) } className="btn btn-success">Delete</button> </td>
                        </tr>
                    )
                }) }

            </table>

        </div>
    )

}


export default ListItems ;