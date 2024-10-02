import React, { Component } from "react";

class Inputs extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            value: props.TextVal,
            placeholder: props.placeholder,
            type: props.type
        }
        this.validField = this.validField.bind(this);
    }

    validField(e) {
        let isValid = e.target.checkValidity();

        if(!isValid) {
            e.target.classList.add('Error')
        } else {
            e.target.classList.remove('Error')
        }
    }


    render() {

        if (this.props.type === "TextArea") {
            return (
                <div>
                    <textarea 
                        autoComplete="nope" //Need to put an invalid value to reall turn off autoComplete
                        onChange={this.props.callback} 
                        value={this.props.TextVal} 
                        placeholder={this.state.placeholder} 
                        type={!this.props.type ? 'Text' : this.state.type}
                        onBlur={this.validField}
                        id={this.props.idVal}
                        width='100'
                        />
                </div>
            )
        }

        else {
            return (
                <div>
                    <input 
                        autoComplete="nope" //Need to put an invalid value to reall turn off autoComplete
                        onChange={this.props.callback} 
                        value={this.props.TextVal} 
                        placeholder={this.state.placeholder} 
                        type={!this.props.type ? 'Text' : this.state.type}
                        onBlur={this.validField}
                        id={this.props.idVal}
                        />
                </div>
            )
        }
    }
}

export default Inputs;