import React , {useState , useEffect} from 'react'
import SingleUser from './SingleUser'

function Users() {
    const [users , setUsers] = useState([]) ;
    const [number , setNumber] = useState() ;
    const [isLoad , setIsLoad] = useState(false) ;

    useEffect( () => {
        setIsLoad(false) ;
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setIsLoad(true) ;
           return  response.json() ;
        })
        .then( (data) => {
            if (number){
                data.length = number ;
            }
            setUsers(data) ;
        } )

    } , [number])


    const handleChange = (e) => {
        setNumber(Number(e.target.value)) ;
    }


  return (
    isLoad ?  ( <div className="users">
    <div>
        <select onChange={handleChange}>
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
        </select>
    </div>
    { users.map((user) => {
        return <SingleUser username= {user.username} email={user.email} />
    } ) }
</div>) : "Loading ..."

  )
}

export default Users