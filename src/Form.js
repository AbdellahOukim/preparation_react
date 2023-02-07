import React, { useState } from 'react'

function Form() {
    const [infos , setInfos] = useState( {
        firstName : "" ,
        age : ""
    } ) ;

    const handleChange = (e) => {
        const test = e.target.name ;
        const val = e.target.value ;

        setInfos({ ...infos , [test] : val   } ) ;
    }

  return (
    <form>
        {infos.firstName + " " + infos.age }
        <label>Name</label>
        <input value={infos.firstName} name="firstName" onChange={handleChange} type="text" />
        <br/>
        <label>Age</label>
        <input value={infos.age} name="age" onChange={handleChange} type="number" />
        <br/>
        <button>Add</button>
    </form>
  )
}

export default Form