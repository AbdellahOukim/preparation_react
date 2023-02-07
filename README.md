<Component1>   => high level
//{username}

Component 1 

<Component2 username={username} />


</Component1>



#################



<Component2>

component 2

username is :  props.username

<Component3  />


</Component2>




#################


<Component3/>



props-drilling 






store =>   (  data ) 

read => hoock useSelector()  

modify => hoock useDispatch() 

create store =>  legacy_createStore() ;

const data = legacy_createStore(  reducer  )

reducer => operations ( crud ) return =>  data ; 

<Provider store={} >
    <Component1> 
</Provider>






link =>  /:id

useParams =>   params = {
    id : 12 
}

{id , cat } = useParams





<ComponentX  name="ayoub" age={22} >


props = {
    name : "ayoub" ,
    age : 22
}

{ name , age } = props ;


// class =>

useState  => start with use => function (hoocks) ; // this.state (built-in) 


useEffect => take 2 params ( function | depandecy array ) => function component

class => depandecy array (empty) =>   componentDidMount() ;
class => depandecy array ( !empty ) =>   componentDidUpdate() ;



we can use class with function 





two way to fatch data from api 

<!-- start fetch  -->

fetch => built-in js
fetch('link').then( response => response.["json" , "text" ...]  ).then().cath(err => cl(err)) ;

fetch("link" , { method : "post" , body : data } ).then(response.["json" , "text" ...]  ).then().cath(err => cl(err)) ;)

<!-- End fetch  -->


<!-- start axios  -->

axios => library js to fetch data

npm install axios => installation
import axios from 'axios' 

syntax => axios['method'].then().catch() ;

axios.get("link").then(  response => response.data  ).catch(err => cl(err) ) ;
axios.delete("link/id").then(  response => response.data  ).catch(err => cl(err) ) ;
axios.put("link").then(  response => response.data  ).catch(err => cl(err) ) ;
axios.post("link" , {
    data
} ).then(  response => response.data  ).catch(err => cl(err) ) ;

<!-- start axios  -->






<!-- https://static.thenounproject.com/png/390695-200.png --> F

<!-- https://static.thenounproject.com/png/1930130-200.png --> H