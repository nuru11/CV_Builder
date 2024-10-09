import React, { Component } from "react";
import Inputs from "./Inputs";

class NameArea extends Component {
    render() {
        return (
            <div className="inputSection">
                <style>
                    {`
                        .input-spacing {
                            margin-top: 15px; /* Adjust the value as needed */
                            background-color: red
                        }
                    `}
                </style>
                <h3>Personal Information</h3>
                <div className="grid-container">
                    <div className="grid-3-col">
                        <Inputs className="input-spacing" placeholder='Name' TextVal={this.props.info.name} callback={this.props.callback} idVal={'personalInfo-name-input'} />
                        {/* <Inputs className="input-spacing" placeholder='Email' type='Email' TextVal={this.props.info.Email} callback={this.props.callback} idVal={'personalInfo-email-input'} /> */}
                        {/* <Inputs className="input-spacing" placeholder='Phone' TextVal={this.props.info.Phone} callback={this.props.callback} idVal={'personalInfo-phone-input'} /> */}
                        {/* <Inputs className="input-spacing" placeholder='new test' TextVal={this.props.info.test} callback={this.props.callback} idVal={'personalInfo-test-input'} /> */}



                        <Inputs className="input-spacing" placeholder='surname' TextVal={this.props.info.surname} callback={this.props.callback} idVal={'personalInfo-surname-input'} />
                        <Inputs className="input-spacing" placeholder='place Of Birth' TextVal={this.props.info.placeOfBirth} callback={this.props.callback} idVal={'personalInfo-placeOfBirth-input'} />
                        <Inputs className="input-spacing" placeholder='passportNo' TextVal={this.props.info.passportNo} callback={this.props.callback} idVal={'personalInfo-passportNo-input'} />
                        <Inputs className="input-spacing" placeholder='nationality' TextVal={this.props.info.nationality} callback={this.props.callback} idVal={'personalInfo-nationality-input'} />
                        <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} />
                        <Inputs className="input-spacing" placeholder='number Of Children' TextVal={this.props.info.numberOfChildren} callback={this.props.callback} idVal={'personalInfo-numberOfChildren-input'} />
                        <Inputs className="input-spacing" placeholder='religion' TextVal={this.props.info.religion} callback={this.props.callback} idVal={'personalInfo-religion-input'} />
                        <Inputs className="input-spacing" placeholder='weight' TextVal={this.props.info.weight} callback={this.props.callback} idVal={'personalInfo-weight-input'} />
                        <Inputs className="input-spacing" placeholder='height' TextVal={this.props.info.height} callback={this.props.callback} idVal={'personalInfo-height-input'} />
                        <Inputs className="input-spacing" placeholder='education Attainment' TextVal={this.props.info.educationAttainment} callback={this.props.callback} idVal={'personalInfo-educationAttainment-input'} />
                        <Inputs className="input-spacing" placeholder='post Applied For' TextVal={this.props.info.postAppliedFor} callback={this.props.callback} idVal={'personalInfo-postAppliedFor-input'} />
                        <Inputs className="input-spacing" placeholder='contract Period' TextVal={this.props.info.contractPeriod} callback={this.props.callback} idVal={'personalInfo-contractPeriod-input'} />
                        <Inputs className="input-spacing" placeholder='arabic Degree' TextVal={this.props.info.arabicDegree} callback={this.props.callback} idVal={'personalInfo-arabicDegree-input'} />
                        <Inputs className="input-spacing" placeholder='english Degree' TextVal={this.props.info.englishDegree} callback={this.props.callback} idVal={'personalInfo-englishDegree-input'} />
                        <Inputs className="input-spacing" placeholder='own Phone Number' TextVal={this.props.info.ownPhoneNumber} callback={this.props.callback} idVal={'personalInfo-ownPhoneNumber-input'} />
                        <Inputs className="input-spacing" placeholder='contact Phone Number' TextVal={this.props.info.contactPhoneNumber} callback={this.props.callback} idVal={'personalInfo-contactPhoneNumber-input'} />
                        {/* <Inputs className="input-spacing" placeholder='new test' TextVal={this.props.info.test} callback={this.props.callback} idVal={'personalInfo-test-input'} /> */}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default NameArea;