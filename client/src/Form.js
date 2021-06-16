import React, { Component } from 'react';
import {fetchAddresses} from './utl/helper';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: []
        }
    }
    
    componentDidMount(){
    fetchAddresses().then(res => {
        this.setState({ addresses: res })
        console.log(this.state.addresses);
    });
    }
    testing(){
        if(this.state.addresses.length > 0){
            return (
                <div>
                    <p>{this.state.addresses[0].name}</p>
                    <p>{this.state.addresses[0].address_line1}</p>
                    <p>{this.state.addresses[0].address_city}</p>
                </div>
            )
        } else {
            return null
        }
    }
    render() {
        return (
            <div className="container-outter" >
                <form className='container'>
                    <label>Description: </label>
                    <input ></input>
                    <label>To: </label>
                    <input></input>
                    <label>From: </label>
                    <input></input>
                    <label>Front: </label>
                    <input></input>
                    <label>Back: </label>
                    <input></input>
                    <button>Submit</button>
                </form>
                {/* {this.testing()} */}
            </div>
        );
    }
}

export default Form;