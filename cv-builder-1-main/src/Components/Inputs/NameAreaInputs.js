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
                    {/* <div className="grid-3-col" >
                    <button type="button" onClick={this.props.newField} id='personalInfo-websiteCount-btn'>Add Website</button>
                    </div> */}
                    <div className="row">
                            <Inputs placeholder='Summary/About' type ="TextArea" TextVal = {this.props.info.about} callback={this.props.callback} idVal={'personalInfo-about-input'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NameArea;


///////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { TextField, Button, Typography, Grid } from "@mui/material";

// const NameArea = ({ info, callback, newField }) => {
//     const [dob, setDob] = useState('');
//     const [age, setAge] = useState('');
  
//     const calculateAge = (dob) => {
//         const birthDate = new Date(dob);
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();
  
//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//             age -= 1;
//         }
//         return age;
//     };
  
//     useEffect(() => {
//         if (dob) {
//             const calculatedAge = calculateAge(dob);
//             setAge(calculatedAge);
//         } else {
//             setAge('');
//         }
//     }, [dob]);
    
//     return (
//         <div className="inputSection">
//             <Typography variant="h5">Personal Information</Typography>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Name <span style={{ color: 'red' }}>*</span>
//                     </Typography>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Name"
//                         value={info.Name}
//                         onChange={(e) => callback('name', e.target.value)}
//                         id="personalInfo-name-input"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Email <span style={{ color: 'red' }}>*</span>
//                     </Typography>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Email"
//                         type="email"
//                         value={info.Email}
//                         onChange={(e) => callback('Email', e.target.value)}
//                         required
//                         id="personalInfo-email-input"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Phone
//                     </Typography>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Phone"
//                         value={info.Phone}
//                         onChange={(e) => callback('Phone', e.target.value)}
//                         id="personalInfo-phone-input"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Date of Birth
//                     </Typography>
//                     <TextField
//                         type="date"
//                         fullWidth
//                         value={dob}
//                         onChange={(e) => setDob(e.target.value)}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                         sx={{ mb: 2 }}
//                         required
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Age
//                     </Typography>
//                     <TextField
//                         type="number"
//                         fullWidth
//                         value={age}
//                         InputProps={{
//                             readOnly: true,
//                         }}
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     {info.websiteCount.map((site, index) => (
//                         <TextField
//                             key={index}
//                             fullWidth
//                             variant="outlined"
//                             placeholder="Website link"
//                             value={info.websiteCount[index]}
//                             onChange={(e) => callback('websiteCount', e.target.value, index)}
//                             id={`personalInfo-websiteCount-${index}-input`}
//                             style={{ marginBottom: '16px' }}
//                         />
//                     ))}
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Button
//                         variant="outlined"
//                         onClick={newField}
//                         id="personalInfo-websiteCount-btn"
//                     >
//                         Add Website
//                     </Button>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Typography variant="body1">
//                         Summary/About
//                     </Typography>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Summary/About"
//                         multiline
//                         rows={4}
//                         value={info.about}
//                         onChange={(e) => callback('about', e.target.value)}
//                         id="personalInfo-about-input"
//                     />
//                 </Grid>
//             </Grid>
//         </div>
//     );
// };

// export default NameArea;


/////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { TextField, Button, Typography, Grid } from "@mui/material";
// import Inputs from "./Inputs"; // Assuming Inputs is already a Material-UI component


// const NameArea = ({ info, callback, newField }) => {
//     const [dob, setDob] = useState('');
//     const [age, setAge] = useState('');
//     const [dobError, setDobError] = useState(false);
//     const [dobErrorMessage, setDobErrorMessage] = useState('');
//     const [ageError, setAgeError] = useState(false);
//     const [ageErrorMessage, setAgeErrorMessage] = useState('');

//     const calculateAge = (dob) => {
//         const birthDate = new Date(dob);
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();

//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//             age -= 1;
//         }
//         return age;
//     };

//     useEffect(() => {
//         if (dob) {
//             const calculatedAge = calculateAge(dob);
//             setAge(calculatedAge);

//             // Validate Date of Birth
//             const isValidDate = !isNaN(new Date(dob).getTime());
//             if (!isValidDate) {
//                 setDobError(true);
//                 setDobErrorMessage('Invalid Date of Birth');
//             } else {
//                 setDobError(false);
//                 setDobErrorMessage('');
//             }
//         } else {
//             setAge('');
//             setDobError(true);
//             setDobErrorMessage('Date of Birth is required');
//         }
//     }, [dob]);

//     useEffect(() => {
//         // Validate Age
//         if (age) {
//             if (age < 25) {
//                 setAgeError(true);
//                 setAgeErrorMessage('He/she Not Qualified for Saudi Arabia');
//             } else {
//                 setAgeError(false);
//                 setAgeErrorMessage('');
//             }
//         } else {
//             setAgeError(false);
//             setAgeErrorMessage('');
//         }
//     }, [age]); // Add age as a dependency

//     return (
//         <div className="inputSection">
//             <Typography variant="h5">Personal Information</Typography>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Name <span style={{ color: 'red' }}>*</span>
//                     </Typography>
//                     <Inputs
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Name"
//                         value={info.Name}
//                         onChange={(e) => callback('name', e.target.value)}
//                         id="personalInfo-name-input"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Email <span style={{ color: 'red' }}>*</span>
//                     </Typography>
//                     <Inputs
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Email"
//                         type="email"
//                         value={info.Email}
//                         onChange={(e) => callback('Email', e.target.value)}
//                         required
//                         id="personalInfo-email-input"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Phone
//                     </Typography>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Phone"
//                         value={info.Phone}
//                         onChange={(e) => callback('Phone', e.target.value)}
//                         id="personalInfo-phone-input"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Date of Birth
//                     </Typography>
//                     <TextField
//                         type="date"
//                         fullWidth
//                         value={dob}
//                         onChange={(e) => setDob(e.target.value)}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                         error={dobError}
//                         helperText={dobError ? dobErrorMessage : ''}
//                         required
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="body1">
//                         Age
//                     </Typography>
//                     <TextField
//                         type="number"
//                         fullWidth
//                         value={age}
//                         error={ageError}
//                         helperText={ageError ? ageErrorMessage : ''}
//                         required
//                         // InputProps={{
//                         //     readOnly: true,
//                         // }}
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     {info.websiteCount.map((site, index) => (
//                         <TextField
//                             key={index}
//                             fullWidth
//                             variant="outlined"
//                             placeholder="Website link"
//                             value={info.websiteCount[index]}
//                             onChange={(e) => callback('websiteCount', e.target.value, index)}
//                             id={`personalInfo-websiteCount-${index}-input`}
//                             style={{ marginBottom: '16px' }}
//                         />
//                     ))}
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Button
//                         variant="outlined"
//                         onClick={newField}
//                         id="personalInfo-websiteCount-btn"
//                     >
//                         Add Website
//                     </Button>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Typography variant="body1">
//                         Summary/About
//                     </Typography>
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Summary/About"
//                         multiline
//                         rows={4}
//                         value={info.about}
//                         onChange={(e) => callback('about', e.target.value)}
//                         id="personalInfo-about-input"
//                     />
//                 </Grid>
//             </Grid>
//         </div>
//     );
// };

// export default NameArea;