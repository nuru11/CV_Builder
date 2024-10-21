// import {useParams} from "react-router-dom"

// export default function DetailList() {
//     const params = useParams();
//    console.log(`lllllllllllllllllllllllllllllllll ${params}`)
//    console.log(params)
//     return (
//         <div className='flex flex-col gap-2'>
//             prfile {params.listid}
//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './styles/DetailPage.css'; // Import your CSS file

// const DetailPage = () => {
//   const  id  = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/tget-images/${id.listid}`);
//         const result = await response.json();
//         if (result.status === 'ok') {
//           setData(result.data);
//         } else {
//           console.error('Error fetching data:', result.message);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) return <div className="loading">Loading...</div>;
//   if (!data) return <div className="error">No data found</div>;

//   return (
//     <div className="detail-page">
//       <h1 className="title">Details for {data.name} {data.surname}</h1>
      
//       <div className="image-gallery">
//         <h2>Images</h2>
//         <div className="images">
//           <img src={require(`../applicantimagetest/${data.personalimage}`)} alt="Personal" />
//           <img src={require(`../applicantimagetest/${data.fullbodyimage}`)} alt="Full Body" />
//           <img src={require(`../applicantimagetest/${data.passportimage}`)} alt="Passport" />
//         </div>
//       </div>

//       <h2>Personal Information</h2>
//       <div className="info-grid">
//         <p><strong>Name:</strong> {data.name}</p>
//         <p><strong>Surname:</strong> {data.surname}</p>
//         <p><strong>Place of Birth:</strong> {data.placeofbirth}</p>
//         <p><strong>Passport Number:</strong> {data.passportnum}</p>
//         <p><strong>Nationality:</strong> {data.nationality}</p>
//         <p><strong>Marital Status:</strong> {data.martialstatus}</p>
//         <p><strong>Number of Children:</strong> {data.numberofchildren}</p>
//         <p><strong>Religion:</strong> {data.religion}</p>
//         <p><strong>Weight:</strong> {data.weight}</p>
//         <p><strong>Height:</strong> {data.height}</p>
//         <p><strong>Education Attainment:</strong> {data.educationattainment}</p>
//         <p><strong>Position Applied For:</strong> {data.postappliedfor}</p>
//         <p><strong>Contract Period:</strong> {data.contractperiod}</p>
//         <p><strong>Arabic Degree:</strong> {data.arabicdegree}</p>
//         <p><strong>English Degree:</strong> {data.englishdegree}</p>
//         <p><strong>Own Phone Number:</strong> {data.ownphonenum}</p>
//         <p><strong>Contact Phone Number:</strong> {data.contactphonenum}</p>
//         <p><strong>Date of Birth:</strong> {data.dateofbirth}</p>
//         <p><strong>Age:</strong> {data.age}</p>
//         <p><strong>Date of Issue:</strong> {data.dateofissue}</p>
//         <p><strong>Expiration Date:</strong> {data.expireddate}</p>
//         <p><strong>Country:</strong> {data.country}</p>
//         <p><strong>Position:</strong> {data.position}</p>
//         <p><strong>Period:</strong> {data.period}</p>
//         <p><strong>Babysitting:</strong> {data.babysitting ? 'Yes' : 'No'}</p>
//         <p><strong>Cleaning:</strong> {data.cleaning ? 'Yes' : 'No'}</p>
//         <p><strong>Washing:</strong> {data.washing ? 'Yes' : 'No'}</p>
//         <p><strong>Cooking:</strong> {data.cooking ? 'Yes' : 'No'}</p>
//         <p><strong>Eldercare:</strong> {data.eldercare ? 'Yes' : 'No'}</p>
//         <p><strong>Monthly Salary (Saudi):</strong> {data.monthlysalarySaudi}</p>
//         <p><strong>Monthly Salary (Jordan):</strong> {data.monthlysalaryJordan}</p>
//         <p><strong>Experience:</strong> {data.experience.map(exp => (
//           <div key={exp.id}>{exp.projectName} - {exp.duration}</div>
//         ))}</p>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;




/////////////////

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CircularProgress,
//   Alert,
//   Button,
// } from '@mui/material';
// import ShareIcon from '@mui/icons-material/Share';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import imagePlaceholder from "../image_placeholder/download.png";
// import Header from "../screens/header";
// import video from "../video/video.mp4";
// import ReactPlayer from "react-player";
// import thumbnail from "../image_placeholder/skywayimg.jpeg"

// const DetailPage = () => {
//   const id = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/tget-images/${id.listid}`);
//         const result = await response.json();
//         if (result.status === 'ok') {
//           setData(result.data);
//         } else {
//           console.error('Error fetching data:', result.message);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) return <CircularProgress />;
//   if (!data) return <Alert severity="error">No data found</Alert>;

//   const handleDownload = () => {
//     console.log("Download clicked");
//   };

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert("Link copied to clipboard!");
//   };

//   const handleSend = () => {
//     console.log("Send clicked");
//   };

//   const handleShareWhatsApp = () => {
//     const url = encodeURIComponent(window.location.href);
//     const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
//     window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
//   };

//   const handleShareTelegram = () => {
//     const url = encodeURIComponent(window.location.href);
//     const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
//     window.open(`https://t.me/share/url?url=${url}&text=${message}`, '_blank');
//   };

//   return (
//     <Container maxWidth={false} style={{ padding: '0 ' }}>
//       <Header />

//       <Container>
//         <Typography variant="h4" gutterBottom>
//           Details for <span style={{ color: "green" }}>{data.name} {data.surname}</span>
//         </Typography>

//         {/* Centering the video and adding top margin with thumbnail */}
//     {data.video && <Container style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
//       <ReactPlayer
//         controls={true}
//         url={require(`../applicantimagetest/${data.video}`)}
//         light={thumbnail} // Add your thumbnail image here
//       />
//     </Container>}

//         <Typography variant="h5" gutterBottom>
//           Images
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={data.personalimage ? require(`../applicantimagetest/${data.personalimage}`) : imagePlaceholder}
//                 alt="Personal"
//               />
//               <CardContent>
//                 <Typography variant="body2">Personal Image</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={data.fullbodyimage ? require(`../applicantimagetest/${data.fullbodyimage}`) : imagePlaceholder}
//                 alt="Full Body"
//               />
//               <CardContent>
//                 <Typography variant="body2">Full Body Image</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={data.passportimage ? require(`../applicantimagetest/${data.passportimage}`) : imagePlaceholder}
//                 alt="Passport"
//               />
//               <CardContent>
//                 <Typography variant="body2">Passport Image</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
//           Personal Information
//         </Typography>
//         <Grid container spacing={2}>
//           {[
//             { label: 'Name', value: data.name, htmlFor: "EFIRSTNAME" },
//             { label: 'Surname', value: data.surname },
//             { label: 'Place of Birth', value: data.placeofbirth },
//             { label: 'Passport Number', value: data.passportnum },
//             { label: 'Nationality', value: data.nationality },
//             { label: 'Marital Status', value: data.martialstatus },
//             { label: 'Number of Children', value: data.numberofchildren },
//             { label: 'Religion', value: data.religion },
//             { label: 'Weight', value: data.weight },
//             { label: 'Height', value: data.height },
//             { label: 'Education Attainment', value: data.educationattainment },
//             { label: 'Position Applied For', value: data.postappliedfor },
//             { label: 'Contract Period', value: data.contractperiod },
//             { label: 'Arabic Degree', value: data.arabicdegree },
//             { label: 'English Degree', value: data.englishdegree },
//             { label: 'Own Phone Number', value: data.ownphonenum },
//             { label: 'Contact Phone Number', value: data.contactphonenum },
//             { label: 'Date of Birth', value: data.dateofbirth },
//             { label: 'Age', value: data.age },
//             { label: 'Date of Issue', value: data.dateofissue },
//             { label: 'Expiration Date', value: data.expireddate },
//             { label: 'Country', value: data.country },
//             { label: 'Position', value: data.position },
//             { label: 'Period', value: data.period },
//             { label: 'Babysitting', value: data.babysitting ? 'Yes' : 'No' },
//             { label: 'Cleaning', value: data.cleaning ? 'Yes' : 'No' },
//             { label: 'Washing', value: data.washing ? 'Yes' : 'No' },
//             { label: 'Cooking', value: data.cooking ? 'Yes' : 'No' },
//             { label: 'Eldercare', value: data.eldercare ? 'Yes' : 'No' },
//             { label: 'Monthly Salary (Saudi)', value: data.monthlysalarySaudi },
//             { label: 'Monthly Salary (Jordan)', value: data.monthlysalaryJordan },
//           ].map((item, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Typography variant="body1">
//                 <strong>{item.label}:</strong> {item.value}
//               </Typography>
//             </Grid>
//           ))}

//           <Grid item xs={12}>
//             <Typography variant="h6">Experience:</Typography>
//             {data.experience.map(exp => (
//               <Typography key={exp.id} variant="body2">
//                 {exp.name} - {exp.link} - {exp.overview} Years
//               </Typography>
//             ))}
//           </Grid>
//         </Grid>

//         {/* Buttons at the bottom with margin */}
//         <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
//           <Grid item>
//             <Button variant="contained" color="primary" onClick={handleDownload}>
//               Download
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="secondary" onClick={handleCopyLink}>
//               Copy Link
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="default" onClick={handleSend}>
//               Send
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="success"
//               startIcon={<WhatsAppIcon />}
//               onClick={handleShareWhatsApp}
//             >
//               Share on WhatsApp
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="info"
//               startIcon={<TelegramIcon />}
//               onClick={handleShareTelegram}
//             >
//               Share on Telegram
//             </Button>
//           </Grid>
//         </Grid>

//       </Container>
//     </Container>
//   );
// };

// export default DetailPage;




///////////////////////

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Alert,
  Button,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import imagePlaceholder from "../image_placeholder/download.png";
import Header from "../screens/header";
import ReactPlayer from "react-player";
import thumbnail from "../image_placeholder/skywayimg.jpeg";

const DetailPage = () => {
  const id = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(payload.isAdmin || false); // Set admin status
      } catch (error) {
        console.error("Token decoding failed:", error);
      }
    }


   

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/tget-images/${id.listid}`);
        const result = await response.json();
        if (result.status === 'ok') {
          setData(result.data);
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
          console.error('Fetch error:', error);
      } finally {
          setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!data) return <Alert severity="error">No data found</Alert>;

  const handleDownload = () => {
    console.log("Download clicked");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleSend = () => {
    console.log("Send clicked");
  };

  const handleInstall = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome")) {
      window.open("https://chrome.google.com/webstore/detail/your-chrome-extension-id", "_blank");
    } else if (userAgent.includes("Firefox")) {
      window.open("https://addons.mozilla.org/en-US/firefox/addon/your-firefox-extension-id/", "_blank");
    } else {
      alert("This extension is only available for Chrome and Firefox.");
    }
  };

  const handleShareWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const handleShareTelegram = () => {
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
    window.open(`https://t.me/share/url?url=${url}&text=${message}`, '_blank');
  };

  return (
    <Container maxWidth={false} style={{ padding: '0 ' }}>
      <Header />

      <Container>
        <Typography variant="h4" gutterBottom>
          Details for <span style={{ color: "green" }}>{data.name} {data.surname}</span>
        </Typography>

        {/* Centering the video and adding top margin with thumbnail */}
        {data.video && (
          <Container style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <ReactPlayer
              controls={true}
              url={require(`../applicantimagetest/${data.video}`)}
              light={thumbnail} // Add your thumbnail image here
            />
          </Container>
        )}

        <Typography variant="h5" gutterBottom>
          Images
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={data.personalimage ? require(`../applicantimagetest/${data.personalimage}`) : imagePlaceholder}
                alt="Personal"
              />
              <CardContent>
                <Typography variant="body2">Personal Image</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={data.fullbodyimage ? require(`../applicantimagetest/${data.fullbodyimage}`) : imagePlaceholder}
                alt="Full Body"
              />
              <CardContent>
                <Typography variant="body2">Full Body Image</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={data.passportimage ? require(`../applicantimagetest/${data.passportimage}`) : imagePlaceholder}
                alt="Passport"
              />
              <CardContent>
                <Typography variant="body2">Passport Image</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: 'Name', value: data.name, htmlFor: "EFIRSTNAME", id: "EFIRSTNAME"   },
            { label: 'Surname', value: data.surname, htmlFor: "ESURNAME", id: "EFAMILY" },
            { label: 'Sex', value: "male", htmlFor: "Sex", id: "Sex" },
            { label: 'Place of Birth', value: data.placeofbirth, htmlFor: "EPLACEOFBIRTH", id: "BIRTH_PLACE" },
            { label: 'Passport Number', value: data.passportnum, htmlFor: "EPASSPORTNUM", id: "PASSPORTnumber" },
            { label: 'Nationality', value: data.nationality, htmlFor: "ENATIONALITY", id: "NATIONALITY" },
            { label: 'Marital Status', value: data.martialstatus, htmlFor: "EMARTIALSTATUS", id: "SOCIAL_STATUS" },
            { label: 'Number of Children', value: data.numberofchildren, htmlFor: "ENUMBEROFCHILDREN", id: "ENUMBEROFCHILDREN" },
            { label: 'Religion', value: /*data.religion*/ "Islam", htmlFor: "ERELIGION", id: "RELIGION" },
            { label: 'Weight', value: data.weight, htmlFor: "EWEIGHT", id: "EWEIGHT"  },
            { label: 'Height', value: data.height, htmlFor: "EHEIGHT", id: "EHEIGHT" },
            { label: 'Education Attainment', value: data.educationattainment, htmlFor: "EEDUCATION", id: "DEGREE" },
            { label: 'Position Applied For', value: data.postappliedfor, htmlFor: "EPOSITION", id: "EPOSITION" },
            { label: 'Contract Period', value: data.contractperiod, htmlFor: "ECONTRACTPERIOD", id: "ECONTRACTPERIOD" },
            { label: 'Arabic Degree', value: data.arabicdegree, htmlFor: "EARABICDEGREE", id: "EARABICDEGREE" },
            { label: 'English Degree', value: data.englishdegree, htmlFor: "EENGLISHDEGREE", id: "EENGLISHDEGREE" },
            { label: 'Own Phone Number', value: data.ownphonenum, htmlFor: "EOWNPHONENUM", id: "EOWNPHONENUM" },
            { label: 'Contact Phone Number', value: data.contactphonenum, htmlFor: "ECONTACTPHONENUM", id: "ECONTACTPHONENUM" },
            { label: 'Date of Birth', value: data.dateofbirth, htmlFor: "BIRTH_DATE", id: "BIRTH_DATE" },
            { label: 'Age', value: data.age, htmlFor: "EAGE", id: "EAGE" },
            { label: 'Date of Issue', value: data.dateofissue, htmlFor: "EDATEOFISSUE", id: "PASSPORT_ISSUE_DATE" },
            { label: 'Expiration Date', value: data.expireddate, htmlFor: "PASSPORT_EXPIRY_DATe", id: "PASSPORT_EXPIRY_DATe" },
            { label: 'Country', value: data.country, htmlFor: "ECOUNTRY", id: "ECOUNTRY" },
            { label: 'Position', value: data.position, htmlFor: "EPOSITION", id: "EPOSITION" },
            { label: 'Period', value: data.period, htmlFor: "EPERIOD", id: "EPERIOD" },
            { label: 'Babysitting', value: data.babysitting ? 'Yes' : 'No', htmlFor: "EBABYSITTING", id: "EBABYSITTING" },
            { label: 'Cleaning', value: data.cleaning ? 'Yes' : 'No', htmlFor: "ECLEANING", id: "ECLEANING" },
            { label: 'Washing', value: data.washing ? 'Yes' : 'No', htmlFor: "EWASHING", id: "EWASHING" },
            { label: 'Cooking', value: data.cooking ? 'Yes' : 'No', htmlFor: "ECOOKING", id: "ECOOKING" },
            { label: 'Eldercare', value: data.eldercare ? 'Yes' : 'No', htmlFor: "EELDERCARE", id: "EELDERCARE" },
            { label: 'Monthly Salary (Saudi)', value: data.monthlysalarySaudi, htmlFor: "EMONTHLYSALARYSAUDI", id: "EMONTHLYSALARYSAUDI" },
            { label: 'Monthly Salary (Jordan)', value: data.monthlysalaryJordan, htmlFor: "EMONTHLYSALARYJORDAN", id: "EMONTHLYSALARYJORDAN" },
            { label: 'visa Type', value: "Work", id: "VisaKind" },
            { label: 'Address', value: "4086,32273 الدمام, طيبة انس بن سالم", id: "ADDRESS_HOME" },
            { label: 'Sponsor Address', value: "4086,32273 الدمام, طيبة انس بن سالم", id: "SPONSER_ADDRESS" },
            { label: 'Sponsor Address', value: "MATAR ALZHRANI", id: "SPONSER_NAME" },
            { label: 'Passport Type', value: "Normal", id: "PASSPORType" },
            { label: 'Isussing Country', value: "Ethiopia", id: "PASSPORT_ISSUE_PLACE" },
            { label: 'Email', value: "skywayagencyoffice@gmail.com", id: "Personal_Email" },
            { label: 'Email', value: "By Air", id: "COMING_THROUGH" },   
            { label: 'Email', value: "2006-11-14", id: "emailLabel" },    
            { label: 'Sponsor Id NO', value: "72836281826", id: "SPONSER_NUMBER" },  
            { label: 'Sponsor Phone', value: "09726384937", id: "SPONSER_PHONE" },
            { label: 'porpose', value: "WORK", id: "porpose", htmlFor: "porpose" },
            
            

            // { label: 'toggle', value: "0", htmlFor: "EMONTHLYSALARYJORDAN" , id: "No"},
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <label htmlFor={item.htmlFor}>
                <Typography variant="body1">
                  <strong>{item.label}:</strong> <label id={item.id}>{item.value}</label>
                </Typography>
              </label>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Typography variant="h6">Experience:</Typography>
            {data.experience.map(exp => (
              <Typography key={exp.id} variant="body2">
                {exp.name} - {exp.link} - {exp.overview} Years
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Buttons at the bottom with margin */}
        {isAdmin && <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleDownload}>
              Download
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleCopyLink}>
              Copy Link
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={handleInstall}>
              Send
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              onClick={handleShareWhatsApp}
            >
              Share on WhatsApp
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="info"
              startIcon={<TelegramIcon />}
              onClick={handleShareTelegram}
            >
              Share on Telegram
            </Button>
          </Grid>
        </Grid>}

        {!isAdmin && <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>

          
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleDownload}>
              Download
            </Button>
          </Grid>
         
        </Grid>}

      </Container>
    </Container>
  );
};

export default DetailPage;