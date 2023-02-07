import Child from "./Child";

const students = [ {name : "abdellah" , age : 23} , {name : "said" , age : 22}]



function Parent(){
    return (
      <div>
        <h1>Hello</h1>
        {  students.map( (student) => {
          return  <Child name = {student.name}  age = {student.age}  />
        } )  }
      </div>
    )
}


export default Parent ;