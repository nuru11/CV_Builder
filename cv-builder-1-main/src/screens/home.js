import React, { Component } from "react";
import { 
    FacebookShareButton, 
    TwitterShareButton, 
    LinkedinShareButton, 
    // WhatsappShareButton, 
    FacebookIcon, 
    TwitterIcon, 
    LinkedinIcon, 
    // WhatsappIcon 
} from 'react-share';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import axios from "axios";


import NameArea from "../Components/Inputs/NameAreaInputs";
import PersonalInfo from "../Components/Outputs/PersonalInfo";
import EducationInputs from "../Components/Inputs/EducationInputs";
import EducationInfo from "../Components/Outputs/educationInfo";
import CareerInputs from "../Components/Inputs/CareerInputs";
import CareerInfo from "../Components/Outputs/CareerInfo"; 
import ProjectInputs from "../Components/Inputs/ProjectInputs";
import ProjectInfo from "../Components/Outputs/ProjectInfo";
import SkillsInput from "../Components/Inputs/SkillsInput";
import SkillInfo from "../Components/Outputs/SkillInfo";
import ReferenceInput from "../Components/Inputs/ReferenceInput";
import ReferenceInfo from "../Components/Outputs/ReferenceInfo";
import DocumentStyle from "../Components/DocumentStyle";
// import html2pdf from "html2pdf.js";
import myImage from '../images/two.png'; 
import bodyimg from "../images/images.jpeg"
import goldagent from "../images/goldagent.jpeg"
import personalsmallimg from "../images/personalsmallimg.png"
import './homestyle.css'; 


class Home extends Component {
    constructor() {
        super();
        this.state = {
            personalInfo: { name: '', email: '', phone: '', about: '', websiteCount: [''] },
            educationInfo: { institute: [{ school: '', from: '', to: '', grade: '', areaStudy: '', overview: '' }] },
            careerInfo: { career: [{ title: '', company: '', from: '', to: '', overview: '' }] },
            projectInfo: { project: [{ name: '', link: '', overview: '' }] },
            skillInfo: { skills: [''] },
            referenceInfo: { reference: [{ name: '', email: '', phone: '' }] },
            cvitem: [],
            image: null,
            allImage: null,
            passportimage: null,
            passportallimage: null,
            fileName: "No file chosen yet",
        };

       

        this.updateText = this.updateText.bind(this);
        this.addRecord = this.addRecord.bind(this);
        this.downloadCV = this.downloadCV.bind(this);
        this.shareCV = this.shareCV.bind(this);
    }



    /*   IMAGE FUNCTIONALITY */

    submitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("image", this.state.image);
    
        await axios.post("http://localhost:4000/upload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
       await this.getImage();
        this.setState({ fileName: "Image Submited", image: null }); // Refresh the images after upload
      };


      onInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(e.target.files[0]);
        this.setState({ image: e.target.files[0], fileName: selectedFile ? selectedFile.name : "Image Submited", });
      };

      getImage = async () => {
        const result = await axios.get("http://localhost:4000/get-image");
        console.log(result);
        this.setState({ allImage: result.data.data });
      };

      //// delete image 

      deleteImages = async () => {
        try {
          const response = await axios.delete("http://localhost:4000/delete-images");
          if (response.data.status === "ok") {
            this.setState({ allImage: null }); // Clear the images from state
            alert(response.data.message); // Show success message
          }
        } catch (error) {
          console.error("Error deleting images:", error);
          alert("Failed to delete images. Please try again.");
        }
      };
      

    /* IMAGE FUNCTIONALITY */


    /* PASSPORT IMAGE UPLOADER FUNCTIONALITY */

    passsubmitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("pimage", this.state.passportimage);
    
        await axios.post("http://localhost:4000/passupload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        this.passgetImage(); // Refresh the images after upload
      };


      passonInputChange = (e) => {
        console.log(e.target.files[0]);
        this.setState({ passportimage: e.target.files[0] });
      };

      passgetImage = async () => {
        const result = await axios.get("http://localhost:4000/passget-image");
        console.log(result);
       await this.setState({ passportallimage: result.data.data });
      };

      // delete passport image 

      passdeleteImages = async () => {
        try {
          const response = await axios.delete("http://localhost:4000/passdelete-images");
          if (response.data.status === "ok") {
            this.setState({ passportallimage: null }); // Clear the images from state
            alert(response.data.message); // Show success message
          }
        } catch (error) {
          console.error("Error deleting images:", error);
          alert("Failed to delete images. Please try again.");
        }
      };

    /* PASSPORT IMAGE UPLOADER FUNCTIONALITY last */

    

    async componentDidMount() {
        this.fetchData();
        // this.postDummyData();
       await this.getImage()
       await this.passgetImage()
    } 

    async fetchData() {
        try {
            const response = await fetch('http://localhost:4000/cv-builder-1'); // Replace with your API endpoint
            const data = await response.json();
            console.log(data);
            this.setState({ cvitem: data.itemtests }); 
            // Use the fetched data to update state as necessary
        } catch (error) { 
            console.error('Error fetching data:', error);
        }
    }


    async postDummyData() {
      const dummyData = {
          name: "John Doeee",
          des: this.state.personalInfo.name ?? "nooooooooooooooo",
         
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
              console.log('Data posted successfullyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy:', result);
              this.fetchData(); // Fetch updated data after posting
          } else {
              console.error('Error posting dataaaaaaaaaaaaaaaaaaaaaaaaaaaa:', response.statusText);
          }
      } catch (error) {
          console.error('Error posting dataeeeeeeeeeeeeeeeeeeeeeeeeeeeeee:', error);
      }
  }


  async deleteItemsByName() {
    // const nameToDelete = this.state.personalInfo.name; // Use the name from personalInfo

    try {
        const response = await fetch(`http://localhost:4000/cv-builder-1?name=${encodeURIComponent(this.state.personalInfo.email)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log(`bbbbbbbbbbbbbbbbbbbbbbbbbbb Items with name "${this.state.personalInfo.email}" deleted successfully.`);
            this.fetchData(); // Refresh data after deletion
        } else {
            console.error('Error deleting datannnnnnnnnnnnnnn:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

    // downloadCV() { 
    //     const doc = new jsPDF();
    //     const content1 = `Personal Info: ${JSON.stringify(this.state.personalInfo, null, 2)}`;
    //     doc.text(content1, 10, 10);
    //     doc.addPage();
    //     const content2 = `
    //         Education Info: ${JSON.stringify(this.state.educationInfo, null, 2)}
    //         Career Info: ${JSON.stringify(this.state.careerInfo, null, 2)}
    //         Project Info: ${JSON.stringify(this.state.projectInfo, null, 2)}
    //         Skills Info: ${JSON.stringify(this.state.skillInfo, null, 2)}
    //         Reference Info: ${JSON.stringify(this.state.referenceInfo, null, 2)}
    //     `;
    //     doc.text(content2, 10, 10);
    //     doc.save('CV.pdf');
    // }

    // downloadCVHtml2pdf = () => {
    //     // Create a PDF from the specified element
    //     const element = document.getElementById("cvContent"); // This should be the ID of the div you want to convert to PDF
    //     const options = {
    //         margin:       1,
    //         filename:     'CV.pdf',
    //         image:        { type: 'jpeg', quality: 0.98 },
    //         html2canvas:  { scale: 2 },
    //         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    //     };

    //     // Generate the PDF
    //     html2pdf()
    //         .from(element)
    //         .set(options)
    //         .save();
    // }


    downloadCV = () => {
        const element = document.getElementById("cvContent");
        const options = {
            margin: 1,
            filename: 'CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf()
            .from(element)
            .set(options)
            .save();
    }


    downloadMultipleCVs = async () => {
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


    shareCV() {
        const doc = new jsPDF();
        const content = ` 
            Personal Info: ${JSON.stringify(this.state.personalInfo, null, 2)}
            Education Info: ${JSON.stringify(this.state.educationInfo, null, 2)}
            Career Info: ${JSON.stringify(this.state.careerInfo, null, 2)}
            Project Info: ${JSON.stringify(this.state.projectInfo, null, 2)}
            Skills Info: ${JSON.stringify(this.state.skillInfo, null, 2)}
            Reference Info: ${JSON.stringify(this.state.referenceInfo, null, 2)}
        `;
        doc.text(content, 10, 10);
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const message = "Check out my CV!";
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%0A${encodeURIComponent(pdfUrl)}`;
        window.open(whatsappUrl, '_blank');
    }

    updateText( e ) {
        let targetStateArea = e.target.id.split('-')[0]; 
        let targetStateField = e.target.id.split('-')[1]; 
  
        let currState = this.state[targetStateArea];
        if (Array.isArray(currState[targetStateField])) {
          let arrIndex = e.target.id.split('-')[2];
  
          if (e.target.id.split('-')[3] !== 'input' && e.target.id.split('-')[3] !== 'btn') {
            let inputSec = e.target.id.split('-')[3]; 
            currState[targetStateField][arrIndex][inputSec] = e.target.value;
          } else {
            currState[targetStateField][arrIndex] = e.target.value;
          }
  
  
  
  
        } else {
          currState[targetStateField] = e.target.value;
        }
        
        this.setState({
            [targetStateArea]: currState
        })
    }

    addRecord( e ) {
 
        let targetStateArea = e.target.id.split('-')[0]; 
        let targetStateField = e.target.id.split('-')[1]; 
        let currState = this.state[targetStateArea];
    
        let count = currState[targetStateField];
        let newRecord;
    
        if (typeof count[0] === 'object') {
          newRecord = {...count[0]};
          for(let item in newRecord) {
            newRecord[item] = ''
      
          }
        } else {
          newRecord = '';
        }
        
    
        count.push(newRecord);
        currState[targetStateField] = count;
        this.setState({
          [targetStateArea]: currState
        })
    }

    render() {
        const {  fileName } = this.state;
        console.log(`kkkjjjjjjjjjjjjjjn ${this.state.allImage}`)
        const shareUrl = "https://yourwebsite.com"; // Replace with your actual URL
        const title = "Check out my CV!";
        // const message = "Check out my CV!";

        return ( 
            <div className="grid-2-col grid-gap-0 grid-sm">
                <div className="border print-hide d-grid border-bottom-0">
                    <h2 className="text-center mt-2 text-underline title">CV-Builder</h2>
                    <div>
       
        {this.state.allImage && this.state.allImage.length > 0 ? (
  <div>
    <img
      className="personal-image"
      alt=""
      src={require(`../images/${this.state.allImage[this.state.allImage.length - 1].image}`)} // Get the last image
      
    />
    {/* Optionally display the ID or other details of the last image */}
    {/* <div>{this.state.allImage[this.state.allImage.length - 1]._id}</div> */}
  </div>
) : (
  <div>No images uploaded yet.</div> // Message if no images are uploaded
)}

<form onSubmit={this.submitImage}>
          <input
            type="file"
            accept="image/*"
            onChange={this.onInputChange}
            style={{ display: "none" }} // Hide the default file input
            ref={(input) => (this.fileInput = input)} // Reference to the file input
          />
          <label>
            <span>{fileName}</span> {/* Display file name here */}
            <button
              type="button"
              onClick={() => this.fileInput.click()}
            >
              Choose File
            </button>
          </label>
          <button type="submit">Submit</button>
        </form>

      </div>

      <div>

        {/*             passport image uploader            */}
       
       {this.state.passportallimage && this.state.passportallimage.length > 0 ? (
 <div>
   <img
     className="personal-image"
     alt=""
     src={require(`../passport_image/${this.state.passportallimage[this.state.passportallimage.length - 1].image}`)} // Get the last image
     
   />
   {/* Optionally display the ID or other details of the last image */}
   {/* <div>{this.state.allImage[this.state.allImage.length - 1]._id}</div> */}
 </div>
) : (
 <div>No images uploaded yet.</div> // Message if no images are uploaded
)}

<form onSubmit={this.passsubmitImage}>
         <input
           type="file"
           accept="image/*"
           onChange={this.passonInputChange}
         />
         <button type="submit">Submit</button>
       </form>

     </div>
     ${this.state.personalInfo.name} aaaaa
                    <NameArea callback={this.updateText} info={this.state.personalInfo} newField={this.addRecord}/>  
        <EducationInputs callback={this.updateText} info={this.state.educationInfo} newField={this.addRecord}/>  
        <CareerInputs callback={this.updateText} info={this.state.careerInfo} newField={this.addRecord}/>
        <ProjectInputs callback={this.updateText} info={this.state.projectInfo} newField={this.addRecord}/>
        <SkillsInput callback={this.updateText} info={this.state.skillInfo} newField={this.addRecord}/>
        <ReferenceInput callback={this.updateText} info={this.state.referenceInfo} newField={this.addRecord}/>
        <DocumentStyle />
                    {/* <button type="button" id="downloadBtn" onClick={this.downloadCV}>Download CV</button> */}
                    <button type="button" id="postBtn" onClick={this.postDummyData.bind(this)}>saveeee</button>
                    <button type="button" id="deleteBtn" onClick={this.deleteItemsByName.bind(this)}>Delete Items by Name</button>
                    <button type="button" id="shareBtn" onClick={this.shareCV}>Share CV on WhatsApp</button>
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
                    <PersonalInfo data={this.state.personalInfo} />
                    <EducationInfo data={this.state.educationInfo} />
                    <CareerInfo data={this.state.careerInfo} />
                    <ProjectInfo data={this.state.projectInfo} />
                    <SkillInfo data={this.state.skillInfo} />
                    <ReferenceInfo data={this.state.referenceInfo} />
                </div>


                <div style={{ position: 'relative', padding: '20px' }}>
                <button type="button" onClick={this.downloadMultipleCVs}>
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
                            {this.state.allImage && this.state.allImage.length > 0 ? (
  <div>
    <img
      className="personal-image"
      alt=""
      src={require(`../images/${this.state.allImage[this.state.allImage.length - 1].image}`)} // Get the last image
      
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
                        {this.state.passportallimage && this.state.passportallimage.length > 0 ? (
  <div>
    <img
      className="personal-image"
      alt=""
      src={require(`../passport_image/${this.state.passportallimage[this.state.passportallimage.length - 1].image}`)} // Get the last image
      
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

                <div>llllllll {this.state.cvitem.length}</div>
                
                {this.state.cvitem.map((item) => ( 
    <p> {item.name} : {item.des}</p>
))}

<div>lllllllllllllllllllllllllllllllllllllllllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>
<button onClick={this.deleteImages}>Delete All Images</button>
<button onClick={this.passdeleteImages}>Delete All passport Images</button>
            </div>

            
        );
    } 
}

export default Home; 