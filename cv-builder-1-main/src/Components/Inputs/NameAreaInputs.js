import React, { Component } from "react";
import Inputs from "./Inputs";

class NameArea extends Component {
    render() {
        return (
            <div className="inputSection">
                <style>
                    {`
                        .input-spacing {

                        }
                        .required {
                            color: red;
                            margin-bottom: -20px;
                           
                            font-weight: bold; /* Make the asterisk bold */
                        }
                        .input-container {
                            display: flex;
                            flex-direction: column;
                             /* Center align inputs and asterisks */
                             margin-top: 20px
                        }
                    `}
                </style>
                <h3>Personal Information</h3>
                <div className="grid-container">
                    <div className="grid-3-col">
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='Name' TextVal={this.props.info.name} callback={this.props.callback} idVal={'personalInfo-name-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='surname' TextVal={this.props.info.surname} callback={this.props.callback} idVal={'personalInfo-surname-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='place Of Birth' TextVal={this.props.info.placeOfBirth} callback={this.props.callback} idVal={'personalInfo-placeOfBirth-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='passportNo' TextVal={this.props.info.passportNo} callback={this.props.callback} idVal={'personalInfo-passportNo-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='nationality' TextVal={this.props.info.nationality} callback={this.props.callback} idVal={'personalInfo-nationality-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='number Of Children' TextVal={this.props.info.numberOfChildren} callback={this.props.callback} idVal={'personalInfo-numberOfChildren-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='religion' TextVal={this.props.info.religion} callback={this.props.callback} idVal={'personalInfo-religion-input'} />
                            {/* No asterisk for religion */}
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='weight' TextVal={this.props.info.weight} callback={this.props.callback} idVal={'personalInfo-weight-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='height' TextVal={this.props.info.height} callback={this.props.callback} idVal={'personalInfo-height-input'} />
                            {/* No asterisk for height */}
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='education Attainment' TextVal={this.props.info.educationAttainment} callback={this.props.callback} idVal={'personalInfo-educationAttainment-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='post Applied For' TextVal={this.props.info.postAppliedFor} callback={this.props.callback} idVal={'personalInfo-postAppliedFor-input'} />
                           
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='contract Period' TextVal={this.props.info.contractPeriod} callback={this.props.callback} idVal={'personalInfo-contractPeriod-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='arabic Degree' TextVal={this.props.info.arabicDegree} callback={this.props.callback} idVal={'personalInfo-arabicDegree-input'} />
                            {/* No asterisk for arabic Degree */}
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='english Degree' TextVal={this.props.info.englishDegree} callback={this.props.callback} idVal={'personalInfo-englishDegree-input'} />
                           
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='own Phone Number' TextVal={this.props.info.ownPhoneNumber} callback={this.props.callback} idVal={'personalInfo-ownPhoneNumber-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='contact Phone Number' TextVal={this.props.info.contactPhoneNumber} callback={this.props.callback} idVal={'personalInfo-contactPhoneNumber-input'} />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NameArea;