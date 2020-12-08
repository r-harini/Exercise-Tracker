import React, { Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props){
        super(props);   //always call super constructor

        //Binding the function to the variables
        this.onChangeUsername= this.onChangeUsername.bind(this);
        this.onSubmit= this.onSubmit.bind(this);


        //state is the way to create variables
        //variables of the Schema
        this.state = {
            username: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user={
            username: this.state.username,
        }

        console.log(user);

        //sending a POST req and send user as the endpoint
        axios.post('http://localhost:5000/users/add',user)
            .then(res =>console.log(res.data));

        this.setState({
            username: ''
        });

    }

    render(){
        return(
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label> Username: </label>
                        <input type="text"
                        required
                        className='form-control'
                        value={this.state.username}
                        onChange={this.onChangeUsername}/>
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>)
    }
}