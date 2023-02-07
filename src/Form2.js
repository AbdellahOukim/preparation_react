import React, { useState , useRef } from 'react'

function Form2() {

  const [name , setName] = useState("sdqsdqsd") ;
  const [age , setAge] = useState("") ;

  const nameRef = useRef() ;

  const handleSubmit = (e) => {
     e.preventDefault() ;
    //  console.log(nameRef.current.value) ;
    nameRef.current.focus() ;
  }
  
  return (
    <form onSubmit={handleSubmit} >

        <label>Name</label>
        <input ref={nameRef} onChange = { (e)=> setName(e.target.value) } name="firstName" type="text" />
        <br/>
        <label>Age</label>
        <input name="age"  type="number" />
        <br/>
        <button>Add</button>
    </form>
  )
}

export default Form2