import React, {Component} from "react";
import Inputs from "./Inputs";

class ProjectInputs extends Component {
    render() {

        return (
            <div className="inputSection">
                <h3>Projects</h3>
                {this.props.info.project.map((proj,index)=> {
                       return (
                        <div key={index} className="grid-container">
                            <div className="grid-2-col">
                                <Inputs  placeholder='Project Name' TextVal={proj.school} callback={this.props.callback} idVal={`projectInfo-project-${index}-name-input`} />
                                <Inputs  placeholder='Link' TextVal={proj.from} callback={this.props.callback} idVal={`projectInfo-project-${index}-link-input`}/>
                            </div>
                            <div className="grid-1-col">
                                <Inputs  placeholder='Description' type="TextArea" TextVal={proj.overview} callback={this.props.callback} idVal={`projectInfo-project-${index}-overview-input`}/>
                            </div>

                        </div>
                       ) 
                    })}
                    <button type="button" onClick={this.props.newField} id='projectInfo-project-btn'>Add Project</button>
            </div>
        )
    }
}

export default ProjectInputs;