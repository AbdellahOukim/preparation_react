import { Component } from 'react'

import SingleUser from './SingleUser';


class UsersClass extends Component {
    constructor(props){
        super(props) ;
        this.state = { users : [] , number : null } ;
    }

    componentDidUpdate(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then( (data) => {
            if (this.state.number){
                data.length = this.state.number ;
            }
            this.setState({ ...this.state , users : data })
        } )
    }

  render() {
    return (
        <div className="users">
        <div>
            <select onChange={ (e) => this.setState( { ...this.state , number : Number(e.target.value) } )  }>
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
        </div>



        { this.state.users.map((user) => {
            return <SingleUser username= {user.username} email={user.email} />
        } ) }
    </div>
    )
}
}


export default UsersClass ;