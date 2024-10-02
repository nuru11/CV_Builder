import React, {Component} from "react";
import Inputs from "./Inputs";

class NameArea extends Component {
    // constructor(props) {
    //     super(props); 
    // }

    render() {
        return (
            <div className="inputSection">
                <h3>Personal Information</h3>
                <div className="grid-container">
                    <div className="grid-3-col">
                            <Inputs className="col" placeholder='Name' TextVal = {this.props.info.name} callback={this.props.callback} idVal={'personalInfo-name-input'}/>
                            <Inputs className="col" placeholder='Email' type='Email' TextVal = {this.props.info.Email} callback={this.props.callback} idVal={'personalInfo-email-input'}/>
                            <Inputs className="col" placeholder='Phone' TextVal = {this.props.info.Phone} callback={this.props.callback} idVal={'personalInfo-phone-input'}/>
                    </div>
                    <div className="grid-3-col">
                            {this.props.info.websiteCount.map((site,index)=> {
                                return <Inputs key={index} placeholder='Website link' TextVal = {this.props.info.websiteCount[index]} callback={this.props.callback.bind(index)} idVal={`personalInfo-websiteCount-${index}-input`}/>
                            })}
                    </div>
                    <div className="grid-3-col" >
                    <button type="button" onClick={this.props.newField} id='personalInfo-websiteCount-btn'>Add Website</button>
                    </div>
                    <div className="row">
                            <Inputs placeholder='Summary/About' type ="TextArea" TextVal = {this.props.info.about} callback={this.props.callback} idVal={'personalInfo-about-input'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NameArea;