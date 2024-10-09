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
import {Container, TextField, Typography, Box, Grid, Checkbox, FormControlLabel, Button } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
import goldagent from "./images/goldagent.jpeg" 
import hudud from "./image_placeholder/hudud.jpeg"
import skywayimg from "./image_placeholder/skywayimg.jpeg"
import barakaimg from "./image_placeholder/barakaimg.jpeg"
import wasitimg from "./image_placeholder/wasitimg.jpeg"
import myImage from './images/two.png'; 
import bodyimg from "./images/images.jpeg"
import imagePlaceholder from "./image_placeholder/download.png"
import ouragentlogo from "./images/ouragentlogo.jpeg"
// import { FormControl, useFormControlContext } from '@mui/base/FormControl';
// import { Input, inputClasses } from '@mui/base/Input';
// import { styled } from '@mui/system';
// import clsx from 'clsx';


const App = () => {
    const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', about: '', surname: "", placeOfBirth: "", passportNo: "", nationality: "", maritalStatus: "", numberOfChildren: "", religion: "", weight: "", height: "", educationAttainment: "", postAppliedFor: "", contractPeriod: "", arabicDegree: "", englishDegree: "", ownPhoneNumber: "", contactPhoneNumber: "", monthlysalarySaudi: "", monthlysalaryJordan: ""});
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
    const [applicantpassportimage, setApplicantPassportimage] = useState(null)
    const [applicantpassportallimage, setApplicantPassportallimage] = useState(null)
    const [fileName, setFileName] = useState("No file chosen fyet");
    const [pfileName, setPFileName] = useState("No file chosen fyet");
    const [applicantPassportfileName, setApplicantPassportFileName] = useState("No file chosen fyet");
    const fileInputRef = useRef(null);
    const pfileInputRef = useRef(null);
    const applicantFileInputRef = useRef(null)
    const [errorMessage, setErrorMessage] = useState('');


    const [validationErrors, setValidationErrors] = useState({});



    const [imageforpersonalimage, setImageforpersonalimage] = useState(null);
    const [imageforfullbodyimage, setImageforfullbodyimage] = useState(null);
    const [imageforpassportimage, setImageforpassportimage] = useState(null)


  const [applicantpersonalimagePreview, setApplicantpersonalimagePreview] = useState(null);
  const [applicantfullbodyimagePreview, setApplicantfullbodyimageimagePreview] = useState(null);
  const [applicantpassportimagePreview, setApplicantpassportimagePreview] = useState(null);


  const applicantpersonalimagefileInputRef = useRef(null);
  const applicantfullbodyimagefileInputRef = useRef(null);
  const applicantpassportimagefileInputRef = useRef(null);




    const [salaries, setSalaries] = useState({
      saudi: '',
      jordan: ''
  });

  // Effect to set default values if projectInfo is not empty
  useEffect(() => {
      if (projectInfo.project.length > 0 && projectInfo.project[0].name) {
          setSalaries({
              saudi: 'SAR 1200',
              jordan: '$250'
          });
      }
  }, [projectInfo]);

  // Handle changes in the input fields
  const handleChange = (event) => {
      const { name, value } = event.target;
      setSalaries({
          ...salaries,
          [name]: value
      });
  };

    const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const [styles, setStyles] = useState({
    styleOne: false,
    styleTwo: false,
    styleThree: false,
    styleFour: false,
    // styleFive: false,
    all: false,
  });


  const [expcheck, setExpCheck] = useState({
    exp1: false,
    exp2: false,
    exp3: false,
    exp4: false,
    exp5: false,
    all: false,
  });

  const handleExpChange = (event) => {
    const { name, checked } = event.target;

    // If "All" checkbox is checked, set all styles to true
    if (name === 'all') {
        setExpCheck({
        exp1: checked,
        exp2: checked,
        exp3: checked,
        exp4: checked,
        exp5: checked,
        all: checked,
      });
    } else {
      // If any style is unchecked, uncheck "All"
      if (checked) {
        setExpCheck((prev) => ({ ...prev, [name]: checked }));
      } else {
        setExpCheck((prev) => ({ ...prev, [name]: checked, all: false }));
      }
    }
  };

  const [dateOfIssue, setDateOfIssue] = useState('');
  const [dateOfExpiry, setDateOfExpiry] = useState('');
  const [expiryError, setExpiryError] = useState('');


  useEffect(() => {
    // Automatically set Date of Expiry to 5 years after Date of Issue
    if (dateOfIssue) {
        const issueDate = new Date(dateOfIssue);
        const expiryDate = new Date(issueDate.setFullYear(issueDate.getFullYear() + 5));
        setDateOfExpiry(expiryDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD

        // Check if expiry date has passed
        if (expiryDate < new Date()) {
            setExpiryError('The expiry date has passed.');
        } else {
            setExpiryError(''); // Clear error if valid
        }
    } else {
        setDateOfExpiry('');
        setExpiryError(''); // Clear error if no issue date is entered
    }
}, [dateOfIssue]);

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age -= 1;
//     }
//     return age;
//   };

const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  };

//   useEffect(() => {
//     if (dob) {
//       const calculatedAge = calculateAge(dob);
//       setAge(calculatedAge);
//     } else {
//       setAge('');
//     }
//   }, [dob]);


useEffect(() => {
    if (dob) {
      const calculatedAge = calculateAge(dob);
      setAge(calculatedAge);

      // Set error message if age is less than 19
      if (calculatedAge < 18) {
        setStyles(styles.styleThree = false)
        setErrorMessage('Applicant age should be more than 18');
      } else {
        setErrorMessage(''); // Clear error message if age is valid
      }
    } else {
      setAge('');
      setErrorMessage(''); // Clear error message if no DOB is entered
    }

    if (calculateAge < 21) {
      setStyles(styles.styleOne = false)
      setStyles(styles.styleTwo = false)
      setStyles(styles.styleFour = false)

    }
  }, [dob]);

    useEffect(() => {
        passgetImage();
        getImage();
        fetchData();
        applicantgetImage();
      }, []);



      const handleStyleChange = (event) => {
        const { name, checked } = event.target;
    
        // If "All" checkbox is checked, set all styles to true
        if (name === 'all') {
          setStyles({
            styleOne: checked,
            styleTwo: checked,
            styleThree: checked,
            styleFour: checked,
            // styleFive: checked,
            all: checked,
          });
        } else {
          // If any style is unchecked, uncheck "All"
          if (checked) {
            setStyles((prev) => ({ ...prev, [name]: checked }));
          } else {
            setStyles((prev) => ({ ...prev, [name]: checked, all: false }));
          }
        }
      };

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
        // await getImage();
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

    

    const passsubmitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("pimage", passportimage);
    
        const result = await axios.post(
          "http://localhost:4000/passupload-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        // Reset file name after submission
        setPFileName("No file chosen after");
        setPassportimage(null);
      };
    
      const passonInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        setPassportimage(selectedFile);
        setPFileName(selectedFile ? selectedFile.name : "No file chosen yettt"); // Update filename
      };
    
      const passgetImage = async () => {
        const result = await axios.get("http://localhost:4000/passget-image");
        console.log(result);
        setPassportallimage(result.data.data);
      };

      // delete passport image 

     const passdeleteImages = async () => {
        try {
          const response = await axios.delete("http://localhost:4000/passdelete-images");
          if (response.data.status === "ok") {
          
            setPassportallimage(null);
            alert(response.data.message); // Show success message
          }
        } catch (error) {
          console.error("Error deleting images:", error);
          alert("Failed to delete images. Please try again.");
        }
      };


     
      /////////////////////////////  applicant data
     

      const applicantssubmitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        // formData.append("applicantimage", applicantpassportimage);
        
        // Assuming you have a state variable for the name input
        // const name = document.getElementById("nameInput").value; // or use a state variable if applicable
        // formData.append("name", personalInfo.name + "kkkkk"); 
        // formData.append("surname", personalInfo.name + "sdfdf");    

formData.append("applicantimage", applicantpassportimage); // Assuming imageName is defined elsewhere
formData.append("name", personalInfo.name + " kkkkk");
formData.append("surname", personalInfo.surname + " sdfdf");
formData.append("placeofbirth", personalInfo.placeOfBirth + " additionalInfo");
formData.append("passportnum", personalInfo.passportNo + " moreInfo");
formData.append("nationality", personalInfo.nationality + " extraData");
formData.append("martialstatus", personalInfo.maritalStatus + " update");
formData.append("numberofchildren", personalInfo.numberOfChildren + " childrenInfo");
formData.append("religion", personalInfo.religion + " religiousInfo");
formData.append("weight", personalInfo.weight + " kg");
formData.append("height", personalInfo.height + " cm");
formData.append("educationattainment", personalInfo.educationAttainment + " degree");
formData.append("postappliedfor", personalInfo.postAppliedFor + " positionDetails");
formData.append("contractperiod", personalInfo.contractPeriod + " duration");
formData.append("arabicdegree", personalInfo.arabicDegree + " level");
formData.append("englishdegree", personalInfo.englishDegree + " level");
formData.append("ownphonenum", personalInfo.ownPhoneNumber + " own");
formData.append("contactphonenum", personalInfo.contactPhoneNumber + " contact");
formData.append("dateofbirth", personalInfo.dateofbirth + " dobInfo");
formData.append("age", personalInfo.age + " years");
formData.append("dateofissue", personalInfo.dateofissue + " issueDate");
formData.append("expireddate", personalInfo.expireddate + " expiryInfo");
formData.append("country", personalInfo.country + " countryDetails");
formData.append("position", personalInfo.position + " jobTitle");
formData.append("period", personalInfo.period + " timeFrame");
formData.append("babysitting", expcheck.exp1 ? "yes" : "no");
formData.append("cleaning", expcheck.exp2 ? "yes" : "no");
formData.append("washing", expcheck.exp3 ? "yes" : "no");
formData.append("cooking", expcheck.exp4 ? "yes" : "no");
formData.append("eldercare", expcheck.exp5 ? "yes" : "no");
formData.append("monthlysalarySaudi", personalInfo.monthlysalarySaudi + " SAR");
formData.append("monthlysalaryJordan", personalInfo.monthlysalaryJordan + " JOD");
formData.append("experience", JSON.stringify(projectInfo.project))
        const result = await axios.post(
            "http://localhost:4000/applicantupload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        
        // Reset file name and name input after submission
        // setPFileName("No file chosen after");
        setApplicantPassportimage(null);
        document.getElementById("nameInput").value = ""; // Reset the name input field
    };

    const applicantonInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        setApplicantPassportimage(selectedFile);
        setApplicantPassportFileName(selectedFile ? selectedFile.name : "No file chosen yettt"); // Update filename
      };
    
      const applicantgetImage = async () => {
        const result = await axios.get("http://localhost:4000/applicantget-image");
        console.log(result);
        setApplicantPassportallimage(result.data.data);
      };


    //////////////////////////////// applicant data ll


    ///////////////////////////////// Applicant Test data 


    const validateFields = () => {
        const errors = {};
        for (const key in personalInfo) {
          if (!personalInfo[key]) {
            errors[key] = 'This field is required';
          }
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0; // return true if no errors
      };


    const submitImageforapplicant = async (e) => {
        e.preventDefault();
        const { name, phone, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;

        if (!name || !placeOfBirth || !nationality || !maritalStatus || !religion) {
            toast.error("Please fill all the required fields.", {
              position: "top-center"
            });
            return;

            
          }

          toast.success("Form submitted successfully!");
    
        const formData = new FormData();
        // formData.append("applicantimage", applicantpassportimage);
        
        // Assuming you have a state variable for the name input
        // const name = document.getElementById("nameInput").value; // or use a state variable if applicable
        // formData.append("name", personalInfo.name + "kkkkk"); 
        // formData.append("surname", personalInfo.name + "sdfdf");    

        if (imageforpersonalimage) formData.append("personalimage", imageforpersonalimage);
        if (imageforfullbodyimage) formData.append("fullbodyimage", imageforfullbodyimage);
        if (imageforpassportimage) formData.append("passportimage", imageforpassportimage);
formData.append("name", personalInfo.name + " kkkkk");
formData.append("surname", personalInfo.surname + " sdfdf");
formData.append("placeofbirth", personalInfo.placeOfBirth + " additionalInfo");
formData.append("passportnum", personalInfo.passportNo + " moreInfo");
formData.append("nationality", personalInfo.nationality + " extraData");
formData.append("martialstatus", personalInfo.maritalStatus + " update");
formData.append("numberofchildren", personalInfo.numberOfChildren + " childrenInfo");
formData.append("religion", personalInfo.religion + " religiousInfo");
formData.append("weight", personalInfo.weight + " kg");
formData.append("height", personalInfo.height + " cm");
formData.append("educationattainment", personalInfo.educationAttainment + " degree");
formData.append("postappliedfor", personalInfo.postAppliedFor + " positionDetails");
formData.append("contractperiod", personalInfo.contractPeriod + " duration");
formData.append("arabicdegree", personalInfo.arabicDegree + " level");
formData.append("englishdegree", personalInfo.englishDegree + " level");
formData.append("ownphonenum", personalInfo.ownPhoneNumber + " own");
formData.append("contactphonenum", personalInfo.contactPhoneNumber + " contact");
formData.append("dateofbirth", personalInfo.dateofbirth + " dobInfo");
formData.append("age", personalInfo.age + " years");
formData.append("dateofissue", personalInfo.dateofissue + " issueDate");
formData.append("expireddate", personalInfo.expireddate + " expiryInfo");
formData.append("country", personalInfo.country + " countryDetails");
formData.append("position", personalInfo.position + " jobTitle");
formData.append("period", personalInfo.period + " timeFrame");
formData.append("babysitting", expcheck.exp1 ? "true" : "false");
formData.append("cleaning", expcheck.exp2 ? "true" : "false");
formData.append("washing", expcheck.exp3 ? "true" : "false"); 
formData.append("cooking", expcheck.exp4 ? "true" : "false");
formData.append("eldercare", expcheck.exp5 ? "true" : "false");
formData.append("monthlysalarySaudi", salaries.saudi + " SAR");
formData.append("monthlysalaryJordan", salaries.jordan + " JOD");
formData.append("experience", JSON.stringify(projectInfo.project))
        const result = await axios.post(
            "http://localhost:4000/tupload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        
        // Reset file name and name input after submission
        // setPFileName("No file chosen after");
        setImageforpersonalimage(null);
        setImageforfullbodyimage(null);
        document.getElementById("nameInput").value = ""; // Reset the name input field
    };



    const onInputChangeforpersonalimage = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        setImageforpersonalimage(e.target.files[0]);
        if (file) {
            setApplicantpersonalimagePreview(URL.createObjectURL(file));
          }
      };
    
      const onInputChangeforfullbodyimage = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        setImageforfullbodyimage(e.target.files[0]);
        if (file) {
            setApplicantfullbodyimageimagePreview(URL.createObjectURL(file))
        }
      };

      const onInputChangeforpassportimage = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        setImageforpassportimage(e.target.files[0]);
        if (file) {
            setApplicantpassportimagePreview(URL.createObjectURL(file))
        }
      };



    ///////////////////////////////// Applicant Test data ll


  
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

    

   const downloadMultipleCVs = async () => {
        const pdfElements = [
            
             {  elementId: styles.styleOne ? 'cvContent2' : "", filename: 'Golden agen.pdf' },
             { elementId: styles.styleTwo ? 'cvContent1' : "", filename: `${`${personalInfo.name} ${personalInfo.email} Bela Hodod` || 'Default_Name'}_CV_Style1.pdf` },
            { elementId: styles.styleThree ? 'cvContent3' : "", filename: 'Skyway.pdf' },
            { elementId: styles.styleFour ? 'cvContent4' : "", filename: 'Baraka.pdf' },
            // { elementId: styles.styleFive ? 'cvContent5' : "", filename: 'Al Wasit.pdf' },
            // Add more elements as needed
        ];
    
        const downloadPromises = pdfElements.map(({ elementId, filename }) => {
            const element = document.getElementById(elementId);
            const options = {
                margin: 0.5,
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                // jsPDF: { unit: 'in', format: [8.5, 10.99],  /*format: 'letter',*/ orientation: 'portrait' }
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
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

    const shareUrl = "https://yourwebsite.com"; // Replace with your actual URL
    const title = "Check out my CV!";

    return (
     
        <div className="">
       <div className="cv-builder-container">
    <h2 className="text-center mt-2 title">CV Builder</h2>

    {/* <div className="image-upload-section">
       
        <div className="image-upload">
            {allImage && allImage.length > 0 ? (
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            fileName !== "No file chosen yet"
                                ? imagePlaceholder
                                : require(`./images/${allImage[allImage.length - 1].image}`)
                        }
                        onClick={() => fileInputRef.current.click()}
                    />
                </div>
            ) : (
                <div className="no-image">No images uploaded yet.</div>
            )}

            <form onSubmit={submitImage} className="file-upload-form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />
                <label>
                    <span>Personal Image <span style={{ color: 'red' }}>*</span></span>
                    <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>

        <div className="image-upload">
          

{applicantpassportallimage && applicantpassportallimage.length > 0 ? (
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantPassportfileName !== "No file chosen yet"
                                ? imagePlaceholder
                                : require(`./applicantimage/${applicantpassportallimage[applicantpassportallimage.length - 1].image}`)
                        }
                        onClick={() => applicantFileInputRef.current.click()}
                    />
                </div>
            ) : (
                <div className="no-image">No images uploaded yet.</div>
            )}

            <form onSubmit={applicantssubmitImage} className="file-upload-form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={applicantonInputChange}
                    style={{ display: "none" }}
                    ref={applicantFileInputRef}
                />
                <label>
                    <span>applicant Personal Image <span style={{ color: 'red' }}>*</span></span>
                <button type="button" onClick={() => applicantFileInputRef.current.click()}>Choose File</button>
                </label>
                <button type="submit">Submitkkjjjjj ${personalInfo.email}</button>
            </form>
        </div>

      
        <div className="image-upload">
            {passportallimage && passportallimage.length > 0 ? (
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Passport"
                        src={
                             require(`./passport_image/${passportallimage[passportallimage.length - 1].image}`)
                        }
                        onClick={() => pfileInputRef.current.click()}
                    />
                </div>
            ) : (
                <div className="no-image">No images uploaded yet.</div>
            )}

            <form onSubmit={passsubmitImage} className="file-upload-form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={passonInputChange}
                    style={{ display: "none" }}
                    ref={pfileInputRef}
                />
                <label>
                    <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
                    <button type="button" onClick={() => pfileInputRef.current.click()}>Choose Passport Image</button>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div> */}




    <div className="image-upload">
           
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantpersonalimagePreview !== null
                                ? applicantpersonalimagePreview
                                : imagePlaceholder
                        }
                        onClick={() => applicantpersonalimagefileInputRef.current.click()}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChangeforpersonalimage}
                    style={{ display: "none" }}
                    ref={applicantpersonalimagefileInputRef}
                />
                <label>
                    <span>Personal Image <span style={{ color: 'red' }}>*</span></span>
                    {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
                </label>
               
            
        </div>


        {/* full body image */}


        <div className="image-upload">
           
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantfullbodyimagePreview !== null
                                ? applicantfullbodyimagePreview
                                : imagePlaceholder
                        }
                        onClick={() => applicantfullbodyimagefileInputRef.current.click()}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChangeforfullbodyimage}
                    style={{ display: "none" }}
                    ref={applicantfullbodyimagefileInputRef}
                />
                <label>
                    <span>Personal Image <span style={{ color: 'red' }}>*</span></span>
                    {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
                </label>
               
            
        </div>



        {/* passport image */}



        <div className="image-upload">
           
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantpassportimagePreview !== null
                                ? applicantpassportimagePreview
                                : imagePlaceholder
                        }
                        onClick={() => applicantpassportimagefileInputRef.current.click()}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChangeforpassportimage}
                    style={{ display: "none" }}
                    ref={applicantpassportimagefileInputRef}
                />
                <label>
                    <span>Personal Image <span style={{ color: 'red' }}>*</span></span>
                    {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
                </label>
               
            
        </div>


    {/* <form onSubmit={submitImageforapplicant}>
        <input type="file" accept="image/*" onChange={onInputChangeforpersonalimage} />
        {applicantpersonalimagePreview1 && <img src={applicantpersonalimagePreview1} alt="Preview 1" height={100} width={100} />}
        <input type="file" accept="image/*" onChange={onInputChangeforfullbodyimage} />
        <button type="submit">Submit</button>
      </form> */}

    {/* Input Sections */}
    {personalInfo.surname}
    
    <NameArea callback={updateText} validationErrors={validationErrors} info={personalInfo} newField={addRecord} />
    <Container maxWidth="xs">
    <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Age"
              type="number"
              fullWidth
              value={age}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        
        {/* Error Message */}
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {errorMessage}
          </Typography>
        )}


<Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                        <TextField
                            label="Date of Issue"
                            type="date"
                            fullWidth
                            value={dateOfIssue}
                            onChange={(e) => setDateOfIssue(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label=""
                            type="date"
                            fullWidth
                            value={dateOfExpiry}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Expiry Error Message */}
                {expiryError && (
                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        {expiryError}
                    </Typography>
                )}
        
    </Container>
   
    {/* <EducationInputs callback={updateText} info={educationInfo} newField={addRecord} /> */}
    {/* <CareerInputs callback={updateText} info={careerInfo} newField={addRecord} /> */}
    {/* {projectInfo.project[0]?.name && <div>ssss</div>}
{projectInfo.project.map(i => <div>{i.name}</div>)}
{projectInfo.project.map(i => <div>{i.link}</div>)}
{projectInfo.project.map(i => <div>{i.overview}</div>)} */}

    <ProjectInputs callback={updateText} info={projectInfo} newField={addRecord} />
    {/* <SkillsInput callback={updateText} info={skillInfo} newField={addRecord} /> */}
    {/* <ReferenceInput callback={updateText} info={referenceInfo} newField={addRecord} /> */}
    {/* <DocumentStyle /> */}
    <Box sx={{ boxShadow: 3, borderRadius: 2, mt: 4, p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Select EXPERIANCE
            </Typography>
            {/* <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.all}
                        onChange={handleExpChange}
                        name="all"
                    />
                }
                label="All"
            /> */}

           
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp1}
                        onChange={handleExpChange}
                        name="exp1"
                        disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="BABY SITTING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp2}
                        onChange={handleExpChange}
                        name="exp2"
                        disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="CLEANING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp3}
                        onChange={handleExpChange}
                        name="exp3"
                        disabled={projectInfo.project[0].name === ""} // Disable if age is less than 18
                    />
                }
                label="WASHING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp4}
                        onChange={handleExpChange}
                        name="exp4"
                        disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="COOKING"
            />
          
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp5}
                        onChange={handleExpChange}
                        name="exp5"
                        disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="ELDER CARE"
            />
           
        </Box>

   
    <div style={{ margin: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Monthly Salary
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Saudi" 
                        variant="outlined" 
                        type="text" 
                        name="saudi" 
                        value={salaries.saudi} 
                        onChange={handleChange} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Jordan" 
                        variant="outlined" 
                        type="text" 
                        name="jordan" 
                        value={salaries.jordan} 
                        onChange={handleChange} 
                    />
                </Grid>
            </Grid>
           
        </div>
        <Box sx={{ boxShadow: 3, borderRadius: 2, mt: 4, p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Select Styles
            </Typography>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styles.all}
                        onChange={handleStyleChange}
                        name="all"
                    />
                }
                label="All"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styles.styleOne}
                        onChange={handleStyleChange}
                        name="styleOne"
                        disabled={age < 21}
                    />
                }
                label="Golden agent"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styles.styleTwo}
                        onChange={handleStyleChange}
                        name="styleTwo"
                        disabled={age < 21}
                    />
                }
                label="Bela Hodod"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styles.styleThree}
                        onChange={handleStyleChange}
                        name="styleThree"
                        disabled={age < 18} // Disable if age is less than 18
                    />
                }
                label="Assawsanah"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styles.styleFour}
                        onChange={handleStyleChange}
                        name="styleFour"
                        disabled={age < 21}
                    />
                }
                label="Baraka"
            />
            {/* Uncomment if needed
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styles.styleFive}
                        onChange={handleStyleChange}
                        name="styleFive"
                    />
                }
                label="Al wasit"
            />
            */}
        </Box>

    <div className="action-buttons">
    
        <button type="button" id="postBtn" onClick={submitImageforapplicant}>Save</button>
        {/* <button type="button" id="postBtn" onClick={applicantssubmitImage}>applicantssubmitImage</button> */}
        <button type="button" id="shareBtn" onClick={shareCV}>Share CV on WhatsApp</button>
        <button type="button" onClick={downloadMultipleCVs}>Download Multiple CVs</button>
    </div>

    <div className="social-share">
        <h3>Share on Social Media:</h3>
        <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon margin={50} size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
            <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
    </div>
</div>

<ToastContainer position="top-center" />       
    
    {/* Hidden content for PDF generation */}
    <div style={{ display: 'none' }}>
        <div id="cvContent1">
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
                    
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={applicantpersonalimagePreview !== null
    ? applicantpersonalimagePreview
    : imagePlaceholder} // Get the last image

/>

</div>

                        <img src={hudud} alt="Wider" className="wider-image" />
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.email}</div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div>{personalInfo.name}</div>
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
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>PRIMARY SCHOOL</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>HOUSEMAID</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>2 YEARS</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}></div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={applicantfullbodyimagePreview !== null
    ? applicantfullbodyimagePreview
    : imagePlaceholder} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}></div>
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

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                
<div>
<img
className="passport-image"
alt=""
src={applicantpassportimagePreview !== null
    ? applicantpassportimagePreview
    : imagePlaceholder} 

/>

</div>
</div>
            </div>
        </div>

        
        <div id="cvContent2" style={{ display: 'block',  }}> {/* Change display to block */}
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
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={require(`./images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>

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
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.email}</div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div>{personalInfo.name}</div>
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
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>PRIMARY SCHOOL</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>HOUSEMAID</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>2 YEARS</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}></div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={bodyimg} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}></div>
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

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                {passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="passport-image"
alt=""
src={require(`./passport_image/${passportallimage[passportallimage.length - 1].image}`)} 

/>

</div>
) : (
<div>No images uploaded yet.</div> 
)}
</div>
            </div>
        </div>


        <div id="cvContent3" style={{ display: 'block' }}> {/* Change display to block */}
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
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={require(`./images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>

</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}
                        <img src={skywayimg} alt="Wider" className="wider-image" />
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.email}</div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div>{personalInfo.name}</div>
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
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>PRIMARY SCHOOL</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>HOUSEMAID</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>2 YEARS</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}></div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={bodyimg} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}></div>
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

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                {passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="passport-image"
alt=""
src={require(`./passport_image/${passportallimage[passportallimage.length - 1].image}`)} 

/>

</div>
) : (
<div>No images uploaded yet.</div> 
)}
</div>
            </div>
        </div>



        <div id="cvContent4" style={{ display: 'block' }}> {/* Change display to block */}
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
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={require(`./images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>

</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}
                        <img src={barakaimg} alt="Wider" className="wider-image" />
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.email}</div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div>{personalInfo.name}</div>
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
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>PRIMARY SCHOOL</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>HOUSEMAID</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>2 YEARS</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}></div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={bodyimg} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}></div>
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

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                {passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="passport-image"
alt=""
src={require(`./passport_image/${passportallimage[passportallimage.length - 1].image}`)} 

/>

</div>
) : (
<div>No images uploaded yet.</div> 
)}
</div>
            </div>
        </div>


      
        
</div>

       
        
       
    </div>
    );
};

export default App;