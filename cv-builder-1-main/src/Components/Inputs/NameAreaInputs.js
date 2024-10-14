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
                {/* <h3>Personal Information</h3> */}
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
                        {/* <span className="required">*</span> */}
                            {/* <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-maritalStatus-input`}>
        <span className="required">*</span>
    </label>
    <select
        value={this.props.info.maritalStatus}
        onChange={this.props.callback}
        id={`personalInfo-maritalStatus-input`}
        className="project-form-control"
        style={{ color: this.props.info.maritalStatus ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>{this.props.info.maritalStatus}</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
    </select>
</div>
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" type="number" placeholder='number Of Children' TextVal={this.props.info.numberOfChildren} callback={this.props.callback} idVal={'personalInfo-numberOfChildren-input'} />
                            
                        </div>
                        
                      
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            <Inputs className="input-spacing" type="number" placeholder='weight' TextVal={this.props.info.weight} callback={this.props.callback} idVal={'personalInfo-weight-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            <Inputs className="input-spacing" type="number" placeholder='height' TextVal={this.props.info.height} callback={this.props.callback} idVal={'personalInfo-height-input'} />
                            {/* No asterisk for height */}
                        </div>
                        
                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='education Attainment' TextVal={this.props.info.educationAttainment} callback={this.props.callback} idVal={'personalInfo-educationAttainment-input'} />
                            
                        </div>

                        <div className="input-container">
                        <span className="required">*</span>
                            <Inputs className="input-spacing" placeholder='sex' TextVal={this.props.info.sex} callback={this.props.callback} idVal={'personalInfo-sex-input'} />
                            
                        </div>

                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            <Inputs className="input-spacing" placeholder='id Number' TextVal={this.props.info.idno} callback={this.props.callback} idVal={'personalInfo-idno-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='Position Applied For' TextVal={this.props.info.postAppliedFor} callback={this.props.callback} idVal={'personalInfo-postAppliedFor-input'} />
                           
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" type="number" placeholder='contract Period' TextVal={this.props.info.contractPeriod} callback={this.props.callback} idVal={'personalInfo-contractPeriod-input'} />
                            
                        </div>

                        
                        
                        <div className="input-container">
                            {/* <Inputs className="input-spacing" placeholder='arabic Degree' TextVal={this.props.info.arabicDegree} callback={this.props.callback} idVal={'personalInfo-arabicDegree-input'} /> */}
                            
                            {/* No asterisk for arabic Degree */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-arabicDegree-input`}>
        <span className="required">*</span>
    </label>
    <select
        value={this.props.info.arabicDegree}
        onChange={this.props.callback}
        id={`personalInfo-arabicDegree-input`}
        className="project-form-control"
        style={{ color: this.props.info.arabicDegree ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>Arabic Degree</option>
        <option value="none">None</option>
        <option value="Poor">Poor</option>
        <option value="Good">Good</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="fluent">Fluent</option>
        <option value="native">Native</option>

    </select>
</div>
                        </div>
                        
                        <div className="input-container">
                            {/* <Inputs className="input-spacing" placeholder='english Degree' TextVal={this.props.info.englishDegree} callback={this.props.callback} idVal={'personalInfo-englishDegree-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-englishDegree-input`}>
        <span className="required">*</span>
    </label>
    <select
        value={this.props.info.englishDegree}
        onChange={this.props.callback}
        id={`personalInfo-englishDegree-input`}
        className="project-form-control"
        style={{ color: this.props.info.englishDegree ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>English Degree</option>
        <option value="none">None</option>
        <option value="Poor">Poor</option>
        <option value="Good">Good</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="fluent">Fluent</option>
        <option value="native">Native</option>
    </select>
</div>
                           
                        </div>
                        
                        <div className="input-container">
                            <Inputs className="input-spacing" placeholder='own Phone Number' TextVal={this.props.info.ownPhoneNumber} callback={this.props.callback} idVal={'personalInfo-ownPhoneNumber-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            <Inputs className="input-spacing" placeholder='contact Phone Number' TextVal={this.props.info.contactPhoneNumber} callback={this.props.callback} idVal={'personalInfo-contactPhoneNumber-input'} />
                            
                        </div>


                        <div className="input-container">
                            {/* <Inputs className="input-spacing" placeholder='religion' TextVal={this.props.info.religion} callback={this.props.callback} idVal={'personalInfo-religion-input'} /> */}
                            {/* No asterisk for religion */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-religion-input`}>
        <span className="required">*</span>
    </label>
    <select
        value={this.props.info.religion}
        onChange={this.props.callback}
        id={`personalInfo-religion-input`}
        className="project-form-control"
        style={{ color: this.props.info.religion ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>{this.props.info.religion}</option>
        <option value="islam">Islam</option>
        <option value="christianity">Christianity</option>
    </select>
</div>
                        </div>

                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            <Inputs className="input-spacing" placeholder='Passport Issue Place' TextVal={this.props.info.passportIssuePlace} callback={this.props.callback} idVal={'personalInfo-contactPhoneNumber-input'} />
                            
                        </div>


                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            <Inputs className="input-spacing" placeholder='Visa Number' TextVal={this.props.info.visaNo} callback={this.props.callback} idVal={'personalInfo-visaNo-input'} />
                            
                        </div>

                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            <Inputs className="input-spacing" placeholder='Passport Type' TextVal={this.props.info.passportType} callback={this.props.callback} idVal={'personalInfo-Passporttype-input'} />
                            
                        </div>


                    </div>
                </div>
                
            </div>
        );
    }
}

export default NameArea;