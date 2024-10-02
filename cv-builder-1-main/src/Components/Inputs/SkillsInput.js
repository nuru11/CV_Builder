import React, {Component} from "react";
import Inputs from "./Inputs";

class SkillsInput extends Component {
    render() {

        return (
            <div className="inputSection">
                <h3>Skills</h3>
                <div  className="grid-container">
                    <div className="grid-3-col">
                {this.props.info.skills.map((skill,index)=> {
                       return (
                        <div key={index}>
                                <Inputs  placeholder='Project Name' TextVal={skill} callback={this.props.callback} idVal={`skillInfo-skills-${index}-input`} />
                        </div>
                       ) 
                    })}
                </div>
                </div>
                    <button type="button" onClick={this.props.newField} id='skillInfo-skills-btn' className="mt-1">Add skill</button>
            </div>
        )
    }
}

export default SkillsInput;