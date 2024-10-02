// import React, { Component } from "react";
// import { 
//     FacebookShareButton, 
//     TwitterShareButton, 
//     LinkedinShareButton, 
//     // WhatsappShareButton, 
//     FacebookIcon, 
//     TwitterIcon, 
//     LinkedinIcon, 
//     // WhatsappIcon 
// } from 'react-share';
// import html2pdf from 'html2pdf.js';
// import jsPDF from 'jspdf';

// import NameArea from "./Components/Inputs/NameAreaInputs";
// import PersonalInfo from "./Components/Outputs/PersonalInfo";
// import EducationInputs from "./Components/Inputs/EducationInputs";
// import EducationInfo from "./Components/Outputs/educationInfo";
// import CareerInputs from "./Components/Inputs/CareerInputs";
// import CareerInfo from "./Components/Outputs/CareerInfo"; 
// import ProjectInputs from "./Components/Inputs/ProjectInputs";
// import ProjectInfo from "./Components/Outputs/ProjectInfo";
// import SkillsInput from "./Components/Inputs/SkillsInput";
// import SkillInfo from "./Components/Outputs/SkillInfo";
// import ReferenceInput from "./Components/Inputs/ReferenceInput";
// import ReferenceInfo from "./Components/Outputs/ReferenceInfo";
// import DocumentStyle from "./Components/DocumentStyle";
// // import html2pdf from "html2pdf.js";


// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             personalInfo: { name: '', email: '', phone: '', about: '', websiteCount: [''] },
//             educationInfo: { institute: [{ school: '', from: '', to: '', grade: '', areaStudy: '', overview: '' }] },
//             careerInfo: { career: [{ title: '', company: '', from: '', to: '', overview: '' }] },
//             projectInfo: { project: [{ name: '', link: '', overview: '' }] },
//             skillInfo: { skills: [''] },
//             referenceInfo: { reference: [{ name: '', email: '', phone: '' }] },
//             cvitem: []
//         };

       

//         this.updateText = this.updateText.bind(this);
//         this.addRecord = this.addRecord.bind(this);
//         this.downloadCV = this.downloadCV.bind(this);
//         this.shareCV = this.shareCV.bind(this);
//     }

    

//     componentDidMount() {
//         this.fetchData();
//         // this.postDummyData();
//     } 

//     async fetchData() {
//         try {
//             const response = await fetch('http://localhost:4000/cv-builder-1'); // Replace with your API endpoint
//             const data = await response.json();
//             console.log(data);
//             this.setState({ cvitem: data.itemtests }); 
//             // Use the fetched data to update state as necessary
//         } catch (error) { 
//             console.error('Error fetching data:', error);
//         }
//     }


//     async postDummyData() {
//       const dummyData = {
//           name: "John Doeee",
//           des: this.state.personalInfo.name ?? "nooooooooooooooo",
         
//           // Add more fields as required by your schema
//       };

//       try {
//           const response = await fetch('http://localhost:4000/cv-builder-1', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(dummyData),
//           });

//           if (response.ok) {
//               const result = await response.json();
//               console.log('Data posted successfullyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy:', result);
//               this.fetchData(); // Fetch updated data after posting
//           } else {
//               console.error('Error posting dataaaaaaaaaaaaaaaaaaaaaaaaaaaa:', response.statusText);
//           }
//       } catch (error) {
//           console.error('Error posting dataeeeeeeeeeeeeeeeeeeeeeeeeeeeeee:', error);
//       }
//   }


//   async deleteItemsByName() {
//     // const nameToDelete = this.state.personalInfo.name; // Use the name from personalInfo

//     try {
//         const response = await fetch(`http://localhost:4000/cv-builder-1?name=${encodeURIComponent(this.state.personalInfo.email)}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             console.log(`bbbbbbbbbbbbbbbbbbbbbbbbbbb Items with name "${this.state.personalInfo.email}" deleted successfully.`);
//             this.fetchData(); // Refresh data after deletion
//         } else {
//             console.error('Error deleting datannnnnnnnnnnnnnn:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error deleting data:', error);
//     }
// }

//     // downloadCV() { 
//     //     const doc = new jsPDF();
//     //     const content1 = `Personal Info: ${JSON.stringify(this.state.personalInfo, null, 2)}`;
//     //     doc.text(content1, 10, 10);
//     //     doc.addPage();
//     //     const content2 = `
//     //         Education Info: ${JSON.stringify(this.state.educationInfo, null, 2)}
//     //         Career Info: ${JSON.stringify(this.state.careerInfo, null, 2)}
//     //         Project Info: ${JSON.stringify(this.state.projectInfo, null, 2)}
//     //         Skills Info: ${JSON.stringify(this.state.skillInfo, null, 2)}
//     //         Reference Info: ${JSON.stringify(this.state.referenceInfo, null, 2)}
//     //     `;
//     //     doc.text(content2, 10, 10);
//     //     doc.save('CV.pdf');
//     // }

//     // downloadCVHtml2pdf = () => {
//     //     // Create a PDF from the specified element
//     //     const element = document.getElementById("cvContent"); // This should be the ID of the div you want to convert to PDF
//     //     const options = {
//     //         margin:       1,
//     //         filename:     'CV.pdf',
//     //         image:        { type: 'jpeg', quality: 0.98 },
//     //         html2canvas:  { scale: 2 },
//     //         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     //     };

//     //     // Generate the PDF
//     //     html2pdf()
//     //         .from(element)
//     //         .set(options)
//     //         .save();
//     // }


//     downloadCV = () => {
//         const element = document.getElementById("cvContent");
//         const options = {
//             margin: 1,
//             filename: 'CV.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//         };

//         html2pdf()
//             .from(element)
//             .set(options)
//             .save();
//     }

//     shareCV() {
//         const doc = new jsPDF();
//         const content = ` 
//             Personal Info: ${JSON.stringify(this.state.personalInfo, null, 2)}
//             Education Info: ${JSON.stringify(this.state.educationInfo, null, 2)}
//             Career Info: ${JSON.stringify(this.state.careerInfo, null, 2)}
//             Project Info: ${JSON.stringify(this.state.projectInfo, null, 2)}
//             Skills Info: ${JSON.stringify(this.state.skillInfo, null, 2)}
//             Reference Info: ${JSON.stringify(this.state.referenceInfo, null, 2)}
//         `;
//         doc.text(content, 10, 10);
//         const pdfBlob = doc.output('blob');
//         const pdfUrl = URL.createObjectURL(pdfBlob);
//         const message = "Check out my CV!";
//         const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%0A${encodeURIComponent(pdfUrl)}`;
//         window.open(whatsappUrl, '_blank');
//     }

//     updateText( e ) {
//         let targetStateArea = e.target.id.split('-')[0]; 
//         let targetStateField = e.target.id.split('-')[1]; 
  
//         let currState = this.state[targetStateArea];
//         if (Array.isArray(currState[targetStateField])) {
//           let arrIndex = e.target.id.split('-')[2];
  
//           if (e.target.id.split('-')[3] !== 'input' && e.target.id.split('-')[3] !== 'btn') {
//             let inputSec = e.target.id.split('-')[3]; 
//             currState[targetStateField][arrIndex][inputSec] = e.target.value;
//           } else {
//             currState[targetStateField][arrIndex] = e.target.value;
//           }
  
  
  
  
//         } else {
//           currState[targetStateField] = e.target.value;
//         }
        
//         this.setState({
//             [targetStateArea]: currState
//         })
//     }

//     addRecord( e ) {
 
//         let targetStateArea = e.target.id.split('-')[0]; 
//         let targetStateField = e.target.id.split('-')[1]; 
//         let currState = this.state[targetStateArea];
    
//         let count = currState[targetStateField];
//         let newRecord;
    
//         if (typeof count[0] === 'object') {
//           newRecord = {...count[0]};
//           for(let item in newRecord) {
//             newRecord[item] = ''
      
//           }
//         } else {
//           newRecord = '';
//         }
        
    
//         count.push(newRecord);
//         currState[targetStateField] = count;
//         this.setState({
//           [targetStateArea]: currState
//         })
//     }

//     render() {
//         const shareUrl = "https://yourwebsite.com"; // Replace with your actual URL
//         const title = "Check out my CV!";
//         // const message = "Check out my CV!";

//         return ( 
//             <div className="grid-2-col grid-gap-0 grid-sm">
//                 <div className="border print-hide d-grid border-bottom-0">
//                     <h2 className="text-center mt-2 text-underline title">CV-Builder</h2>
//                     <NameArea callback={this.updateText} info={this.state.personalInfo} newField={this.addRecord}/>  
//         <EducationInputs callback={this.updateText} info={this.state.educationInfo} newField={this.addRecord}/>  
//         <CareerInputs callback={this.updateText} info={this.state.careerInfo} newField={this.addRecord}/>
//         <ProjectInputs callback={this.updateText} info={this.state.projectInfo} newField={this.addRecord}/>
//         <SkillsInput callback={this.updateText} info={this.state.skillInfo} newField={this.addRecord}/>
//         <ReferenceInput callback={this.updateText} info={this.state.referenceInfo} newField={this.addRecord}/>
//         <DocumentStyle />
//                     {/* <button type="button" id="downloadBtn" onClick={this.downloadCV}>Download CV</button> */}
//                     <button type="button" id="postBtn" onClick={this.postDummyData.bind(this)}>save</button>
//                     <button type="button" id="deleteBtn" onClick={this.deleteItemsByName.bind(this)}>Delete Items by Name</button>
//                     <button type="button" id="shareBtn" onClick={this.shareCV}>Share CV on WhatsApp</button>
//                     <div className="social-share">
//                         <h3>Share on Social Media:</h3>
//                         <FacebookShareButton url={shareUrl} quote={title}>
//                             <FacebookIcon size={32} round={true} />
//                         </FacebookShareButton>
//                         <TwitterShareButton url={shareUrl} title={title}>
//                             <TwitterIcon size={32} round={true} />
//                         </TwitterShareButton>
//                         <LinkedinShareButton url={shareUrl} title={title}>
//                             <LinkedinIcon size={32} round={true} />
//                         </LinkedinShareButton>
//                     </div>
//                 </div>
//                 <div className="cv print-page">
//                     <PersonalInfo data={this.state.personalInfo} />
//                     <EducationInfo data={this.state.educationInfo} />
//                     <CareerInfo data={this.state.careerInfo} />
//                     <ProjectInfo data={this.state.projectInfo} />
//                     <SkillInfo data={this.state.skillInfo} />
//                     <ReferenceInfo data={this.state.referenceInfo} />
//                 </div>


//                 <button type="button" onClick={this.downloadCV}>Download CV</button>

//                 <div id="cvContent" /*style={{ display: 'none' }}*/>
//                     <h1>Curriculum Vitae</h1>
//                     <h2>Personal Info</h2>
//                     <p>Name: zzzzzzzzz{this.state.personalInfo.name}</p>
//                     <p>Email: {this.state.personalInfo.email}</p>
//                     <p>Phone: {this.state.personalInfo.phone}</p>
//                     <p>About: {this.state.personalInfo.about}</p>

//                     <h2>Education Info</h2>
//                     {this.state.educationInfo.institute.map((edu, index) => (
//                         <div key={index}>
//                             <h3>{edu.school}</h3>
//                             <p>From: {edu.from} To: {edu.to}</p>
//                             <p>Grade: {edu.grade}</p>
//                             <p>Overview: {edu.overview}</p>
//                         </div>
//                     ))}

//                     <h2>Career Info</h2>
//                     {this.state.careerInfo.career.map((career, index) => (
//                         <div key={index}>
//                             <h3>{career.title} at {career.company}</h3>
//                             <p>From: {career.from} To: {career.to}</p>
//                             <p>Overview: {career.overview}</p>
//                         </div>
//                     ))}

//                     <h2>Project Info</h2>
//                     {this.state.projectInfo.project.map((project, index) => (
//                         <div key={index}>
//                             <h3>{project.name}</h3>
//                             <p>Link: {project.link}</p>
//                             <p>Overview: {project.overview}</p>
//                         </div>
//                     ))}

//                     <h2>Skills</h2>
//                     <ul>
//                         {this.state.skillInfo.skills.map((skill, index) => (
//                             <li key={index}>{skill}</li>
//                         ))}
//                     </ul>

//                     <h2>References</h2>
//                     {this.state.referenceInfo.reference.map((ref, index) => (
//                         <div key={index}>
//                             <p>Name: {ref.name}</p>
//                             <p>Email: {ref.email}</p>
//                             <p>Phone: {ref.phone}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div>llllllll {this.state.cvitem.length}</div>
                
//                 {this.state.cvitem.map((item) => ( 
//     <p> {item.name} : {item.des}</p>
// ))}
//             </div>

            
//         );
//     } 
// }

// export default App;


import React, { useState, useEffect, useRef } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
} from 'react-share';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';

import NameArea from "./Components/Inputs/NameAreaInputs";
import PersonalInfo from "./Components/Outputs/PersonalInfo";
import EducationInputs from "./Components/Inputs/EducationInputs";
import EducationInfo from "./Components/Outputs/educationInfo";
import CareerInputs from "./Components/Inputs/CareerInputs";
import CareerInfo from "./Components/Outputs/CareerInfo";
import ProjectInputs from "./Components/Inputs/ProjectInputs";
import ProjectInfo from "./Components/Outputs/ProjectInfo";
import SkillsInput from "./Components/Inputs/SkillsInput";
import SkillInfo from "./Components/Outputs/SkillInfo";
import ReferenceInput from "./Components/Inputs/ReferenceInput";
import ReferenceInfo from "./Components/Outputs/ReferenceInfo";
import DocumentStyle from "./Components/DocumentStyle";
import axios from "axios";
import goldagent from "./images/goldagent.png"
import myImage from './images/two.png'; 
import bodyimg from "./images/images.jpeg"



const App = () => {
    const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', about: '', websiteCount: [''] });
    const [educationInfo, setEducationInfo] = useState({ institute: [{ school: '', from: '', to: '', grade: '', areaStudy: '', overview: '' }] });
    const [careerInfo, setCareerInfo] = useState({ career: [{ title: '', company: '', from: '', to: '', overview: '' }] });
    const [projectInfo, setProjectInfo] = useState({ project: [{ name: '', link: '', overview: '' }] });
    const [skillInfo, setSkillInfo] = useState({ skills: [''] });
    const [referenceInfo, setReferenceInfo] = useState({ reference: [{ name: '', email: '', phone: '' }] });
    const [cvitem, setCvitem] = useState([]);
    const [image, setImage] = useState(null);
    const [allImage, setAllImage] = useState(null);
    const [passportimage, setPassportimage] = useState(null)
    const [passportallimage, setPassportallimage] = useState(null)
    const [fileName, setFileName] = useState("No file chosen yet");
    const fileInputRef = useRef(null);

    useEffect(() => {
        getImage();
        fetchData();
      }, []);


      /*   small image uploder   */
       

      const submitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("image", image);
    
        const result = await axios.post(
          "http://localhost:4000/upload-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        // Reset file name after submission
        setFileName("No file chosen yetzzzzzzzzz");
        setImage(null);
      };
    
      const onInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        setImage(selectedFile);
        setFileName(selectedFile ? selectedFile.name : "No file chosen yet"); // Update filename
      };
    
      const getImage = async () => {
        const result = await axios.get("http://localhost:4000/get-image");
        console.log(result);
        setAllImage(result.data.data);
      };

      /*  small image uploader */

      ///////////////////////////////////

      /*     passport image      */
      

     const passsubmitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("pimage", passportimage);
    
        await axios.post("http://localhost:4000/passupload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        passgetImage(); // Refresh the images after upload
      };


     const passonInputChange = (e) => {
        console.log(e.target.files[0]);
        setPassportimage(e.target.files[0]);
      };

    const  passgetImage = async (e) => {
        const result = await axios.get("http://localhost:4000/passget-image");
        console.log(result);
       await setPassportallimage(e.target.files[0]);
      };

      // delete passport image 

     const passdeleteImages = async () => {
        try {
          const response = await axios.delete("http://localhost:4000/passdelete-images");
          if (response.data.status === "ok") {
            // this.setState({ passportallimage: null }); // Clear the images from state
            setPassportallimage(null);
            alert(response.data.message); // Show success message
          }
        } catch (error) {
          console.error("Error deleting images:", error);
          alert("Failed to delete images. Please try again.");
        }
      };


      /*     passport image       */


    /*
     image: null,
            allImage: null,
            passportimage: null,
            passportallimage: null,
            */
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/cv-builder-1'); // Your API endpoint
            const data = await response.json();
            console.log(data);
            setCvitem(data.itemtests); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const postDummyData = async () => {
        const dummyData = {
            name: "John Doeee",
            des: personalInfo.name ?? "nooooooooooooooo",
            // Add more fields as required by your schema
        };

        try {
            const response = await fetch('http://localhost:4000/cv-builder-1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dummyData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Data posted successfully:', result);
                fetchData(); // Fetch updated data after posting
            } else {
                console.error('Error posting data:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const deleteItemsByName = async () => {
        try {
            const response = await fetch(`http://localhost:4000/cv-builder-1?name=${encodeURIComponent(personalInfo.email)}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log(`Items with name "${personalInfo.email}" deleted successfully.`);
                fetchData();
            } else {
                console.error('Error deleting data:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    // const downloadCV = () => {
    //     const element = document.getElementById("cvContent");
    //     const options = {
    //         margin: 1,
    //         filename: 'CV.pdf',
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //     };

    //     html2pdf()
    //         .from(element)
    //         .set(options)
    //         .save();
    // };

   const downloadMultipleCVs = async () => {
        const pdfElements = [
            { elementId: 'cvContent1', filename: 'CV_Style1.pdf' },
            { elementId: 'cvContent2', filename: 'CV_Style2.pdf' },
            // Add more elements as needed
        ];
    
        const downloadPromises = pdfElements.map(({ elementId, filename }) => {
            const element = document.getElementById(elementId);
            const options = {
                margin: 1,
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: [8.5, 14],  /*format: 'letter',*/ orientation: 'portrait' }
            };
    
            return html2pdf().from(element).set(options).save();
        });
    
        // Wait for all downloads to complete
        await Promise.all(downloadPromises);
    }


    

    const shareCV = () => {
        const doc = new jsPDF();
        const content = ` 
            Personal Info: ${JSON.stringify(personalInfo, null, 2)}
            Education Info: ${JSON.stringify(educationInfo, null, 2)}
            Career Info: ${JSON.stringify(careerInfo, null, 2)}
            Project Info: ${JSON.stringify(projectInfo, null, 2)}
            Skills Info: ${JSON.stringify(skillInfo, null, 2)}
            Reference Info: ${JSON.stringify(referenceInfo, null, 2)}
        `;
        doc.text(content, 10, 10);
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const message = "Check out my CV!";
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%0A${encodeURIComponent(pdfUrl)}`;
        window.open(whatsappUrl, '_blank');
    };

    const updateText = (e) => {
        let targetStateArea = e.target.id.split('-')[0];
        let targetStateField = e.target.id.split('-')[1];

        const currState = { ...eval(targetStateArea) }; // Use eval carefully
        if (Array.isArray(currState[targetStateField])) {
            let arrIndex = e.target.id.split('-')[2];
            currState[targetStateField][arrIndex][e.target.id.split('-')[3]] = e.target.value;
        } else {
            currState[targetStateField] = e.target.value;
        }

        switch (targetStateArea) {
            case 'personalInfo':
                setPersonalInfo(currState);
                break;
            case 'educationInfo':
                setEducationInfo(currState);
                break;
            case 'careerInfo':
                setCareerInfo(currState);
                break;
            case 'projectInfo':
                setProjectInfo(currState);
                break;
            case 'skillInfo':
                setSkillInfo(currState);
                break;
            case 'referenceInfo':
                setReferenceInfo(currState);
                break;
            default:
                break;
        }
    };

    const addRecord = (e) => {
        let targetStateArea = e.target.id.split('-')[0];
        let targetStateField = e.target.id.split('-')[1];
        const currState = { ...eval(targetStateArea) };

        let count = currState[targetStateField];
        let newRecord = typeof count[0] === 'object' ? { ...count[0] } : '';

        for (let item in newRecord) {
            newRecord[item] = '';
        }

        count.push(newRecord);
        currState[targetStateField] = count;

        switch (targetStateArea) {
            case 'educationInfo':
                setEducationInfo(currState);
                break;
            case 'careerInfo':
                setCareerInfo(currState);
                break;
            case 'projectInfo':
                setProjectInfo(currState);
                break;
            case 'skillInfo':
                setSkillInfo(currState);
                break;
            case 'referenceInfo':
                setReferenceInfo(currState);
                break;
            default:
                break;
        }
    };

    const shareUrl = "https://yourwebsite.com"; // Replace with your actual URL
    const title = "Check out my CV!";

    return (
        <div className="grid-2-col grid-gap-0 grid-sm">
        <div className="border print-hide d-grid border-bottom-0">
            <h2 className="text-center mt-2 text-underline title">CV-Builder</h2>
            <div>

{ allImage && allImage.length > 0 ? (
<div>
<img
className="personal-image"
alt=""
src={require(`./images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>
{/* Optionally display the ID or other details of the last image */}
{/* <div>{this.state.allImage[this.state.allImage.length - 1]._id}</div> */}
</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}

<form onSubmit={submitImage}>
            <input
                type="file"
                accept="image/*"
                onChange={onInputChange}
                style={{ display: "none" }} // Hide the default file input
                ref={fileInputRef} // Use the ref created with useRef
            />
            <label>
                <span>{fileName}</span> {/* Display file name here */}
                <button
                    type="button"
                    onClick={() => fileInputRef.current.click()} // Open file picker
                >
                    Choose File
                </button>
            </label>
            <button type="submit">Submit</button>
        </form>

</div>

<div>

{/*             passport image uploader            */}

{passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="personal-image"
alt=""
src={require(`./passport_image/${passportallimage[passportallimage.length - 1].image}`)} // Get the last image

/>
{/* Optionally display the ID or other details of the last image */}
{/* <div>{this.state.allImage[this.state.allImage.length - 1]._id}</div> */}
</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}

<form onSubmit={passsubmitImage}>
 <input
   type="file"
   accept="image/*"
   onChange={passonInputChange}
 />
 <button type="submit">Submit</button>
</form>

</div>
            <NameArea callback={updateText} info={personalInfo} newField={addRecord}/>  
<EducationInputs callback={updateText} info={educationInfo} newField={addRecord}/>  
<CareerInputs callback={updateText} info={careerInfo} newField={addRecord}/>
<ProjectInputs callback={updateText} info={projectInfo} newField={addRecord}/>
<SkillsInput callback={updateText} info={skillInfo} newField={addRecord}/>
<ReferenceInput callback={updateText} info={referenceInfo} newField={addRecord}/>
<DocumentStyle />
            {/* <button type="button" id="downloadBtn" onClick={this.downloadCV}>Download CV</button> */}
            <button type="button" id="postBtn" onClick={postDummyData.bind(this)}>saveeee</button>
            <button type="button" id="deleteBtn" onClick={deleteItemsByName.bind(this)}>Delete Items by Name</button>
            <button type="button" id="shareBtn" onClick={shareCV}>Share CV on WhatsApp</button>
            <div className="social-share">
                <h3>Share on Social Media:</h3>
                <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl} title={title}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
            </div>
        </div>
        <div className="cv print-page">
            <PersonalInfo data={personalInfo} />
            <EducationInfo data={educationInfo} />
            <CareerInfo data={careerInfo} />
            <ProjectInfo data={projectInfo} />
            <SkillInfo data={skillInfo} />
            <ReferenceInfo data={referenceInfo} />
        </div>


        <div style={{ position: 'relative', padding: '20px' }}>
        <button type="button" onClick={downloadMultipleCVs}>
            Download Multiple CVs
        </button>
        {/* Other buttons */}
    </div>
    {/* <div className="cv print-page">
        <PersonalInfo data={this.state.personalInfo} />
        <EducationInfo data={this.state.educationInfo} />
        <CareerInfo data={this.state.careerInfo} />
        <ProjectInfo data={this.state.projectInfo} />
        <SkillInfo data={this.state.skillInfo} />
        <ReferenceInfo data={this.state.referenceInfo} />
    </div> */}

      

    {/* Hidden content for PDF generation */}
    <div style={{ display: 'none' }}>
        <div id="cvContent1">
            <h1>Curriculum Vitae - Style 1</h1>
            <h2>Personal Info</h2>
            <p>Name: {personalInfo.name}</p>
            <h2>Education Info</h2>
            {educationInfo.institute.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.school}</h3>
                    <p>From: {edu.from} To: {edu.to}</p>
                    <p>Grade: {edu.grade}</p>
                    <p>Overview: {edu.overview}</p>
                </div>
            ))}
            {/* Include other sections as needed */}
        </div>

        
        <div id="cvContent2" style={{ display: 'block' }}> {/* Change display to block */}
            <div className="container">
                {/* Page 1 */}
                {/* <div>
<form onSubmit={this.submitImage}>
  <input
    type="file"
    accept="image/*"
    onChange={this.onInputChange}
  />
  <button type="submit">Submit</button>
</form>
{this.state.allImage == null
  ? ""
  : this.state.allImage.map((data, index) => (
      <img
        key={index}
        alt=""
        src={require(`../images/${data.image}`)}
        height={100}
        width={100}
      />
    ))}
</div> */}
                <div style={{ pageBreakAfter: 'always' }}> 
                    <div className="header">
                    {allImage && allImage.length > 0 ? (
<div>
<img
className="personal-image"
alt=""
src={require(`./images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>
{/* Optionally display the ID or other details of the last image */}
{/* <div>{this.state.allImage[this.state.allImage.length - 1]._id}</div> */}
</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}
                        <img src={goldagent} alt="Wider" className="wider-image" />
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div></div>
<div>الاسم</div>
<div>SURNAME</div>
<div></div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div></div>
<div>مكان الولادة</div>
<div>AGE</div>
<div></div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div></div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div></div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div></div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div></div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>ETHIOPIAN</div>
<div>الجنسية</div>
<div>MARITAL STATUS</div>
<div></div>
<div>الحالة الاجتماعية</div>
<div>NUMBER OF CHILDREN</div>
<div></div>
<div>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div>EDUCATIONAL ATTAINMENT</div>
<div>PRIMARY SCHOOL</div>
<div>المستوى الدراسي</div>
<div>POST APPLIED FOR</div>
<div>HOUSEMAID</div>
<div>الوظيفة المتقدمة اليها</div>
<div>MONTHLY SALARY</div>
<div></div>
<div>الراتب الشهري</div>
<div>CONTRACT PERIOD</div>
<div>2 YEARS</div>
<div>مدة التعاقد</div>
<div>ARABIC DEGREE</div>
<div></div>
<div>مستوى اللغة العربية</div>
<div>ENGLISH DEGREE</div>
<div></div>
<div>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={bodyimg} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={myImage} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div></div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>
                    <div className="experience-country-sec">
                        <div>EXPERIANCE COUNTRY</div>
                        <div>-</div>
                        <div>خبرة البلد</div>
                    </div>

                    <div className="experience-country-sec">
                        <div>WORKING YEARS</div>
                        <div>-</div>
                        <div>وعدد سنوات الخبرة</div>
                    </div>
                    <div className="specific-exp-atitle-sec">
                        <div>تربية الاطفال</div>
                        <div>النظافة</div>
                        <div>الغسيل</div>
                        <div>الطبخ</div>
                        <div>العناية بالمسنين</div>
                    </div>
                    <div className="specific-exp-etitle-sec">
                        <div>BABY SITTING</div>
                        <div>CLEANING</div>
                        <div>WASHING</div>
                        <div>COOKING</div>
                        <div>ELDER CARE</div>
                    </div>
                    <div className="exp-trueorfalse-sec">
                        <div>YES</div>
                        <div>YES</div>
                        <div>NO</div>
                        <div></div>
                        <div>YES</div>
                    </div>

                </div>

                
                {/* Page 2 */}
                <div style={{ pageBreakAfter: 'always' }}>
                {passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="personal-image"
alt=""
src={require(`./passport_image/${passportallimage[passportallimage.length - 1].image}`)} // Get the last image

/>
{/* Optionally display the ID or other details of the last image */}
{/* <div>{this.state.allImage[this.state.allImage.length - 1]._id}</div> */}
</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}
                </div>
            </div>
        </div>
            {/* Include other sections as needed */}
        
</div>

        <div>llllllll {cvitem.length}</div>
        
        {cvitem.map((item) => ( 
<p> {item.name} : {item.des}</p>
))}

<div>lllllllllllllllllllllllllllllllllllllllllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>
{/* <button onClick={deleteImages}>Delete All Images</button> */}
<button onClick={passdeleteImages}>Delete All passport Images</button>
    </div>
    );
};

export default App;