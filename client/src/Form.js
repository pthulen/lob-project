import React, { Component } from 'react';
import {fetchAddresses} from './utl/helper';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: [],
            selectedAddress: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
    fetchAddresses().then(res => {
        this.setState({ addresses: res })
    });
    }

    handleChange(event){
        this.setState({ selectedAddress: event.target.value})
    }

    //map over fetched addresses to form list
    renderDatalist(){
        if(this.state.addresses.length > 0){
            return (
                <datalist id='data'>
                        {this.state.addresses.map((address) => {
                            return <option key={address.id} value={address.name}>{address.address_line1} {address.address_city} {address.address_state} {address.address_zip}</option>
                        })}
                </datalist>
            )
        }
    }
    render() {
        return (
            <div className="form-container">
                <form >
                    <label>Description: </label>
                    <input type="text" name="description" placeholder="Describe the mail"></input>
                    <label>To: </label>
                    <input type="text" list="data" placeholder="Recipient Name" onChange={this.handleChange}></input>
                    {this.renderDatalist()}
                    <label>From: </label>
                    <input type="text" placeholder="Describe" name="from"></input>
                    <label>Front: </label>
                    <input type="text" name="front"></input>
                    <label>Back: </label>
                    <input type="text" name="back"></input>
                    <button>Submit</button>
                </form>
            </div>

                
        );
    }
}

export default Form;