import React, { useState, useEffect, useRef } from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardContent,
    IconButton,
    CircularProgress,
} from '@mui/material';
// import { PhotoCamera } from '@mui/icons-material';



const CVBuilder = ({
    
   
    imagePlaceholder,
    submitImage,
    passsubmitImage,
    onInputChange,
    passonInputChange,
  
    postDummyData,
    shareCV,
    downloadMultipleCVs,
    shareUrl,
    title,
}) => {
    const [allImage, setAllImage] = useState(null);
const [passportimage, setPassportimage] = useState(null)
const [passportallimage, setPassportallimage] = useState(null)
const [fileName, setFileName] = useState("No file chosen fyet");
const [pfileName, setPFileName] = useState("No file chosen fyet");
const fileInputRef = useRef(null);
const pfileInputRef = useRef(null);
const [image, setImage] = useState(null);
    return (
        <Container maxWidth="sm" className="cv-builder-container">
            <Typography variant="h4" align="center" gutterBottom>
                CV Builder
            </Typography>

            <Box mb={3}>
                {/* Personal Image Upload */}
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">Upload Personal Image</Typography>
                        {allImage && allImage.length > 0 ? (
                            <img
                                alt="Personal"
                                src={
                                    fileName !== "No file chosen yet"
                                        ? imagePlaceholder
                                        : require(`../images/${allImage[allImage.length - 1].image}`)
                                }
                                style={{ width: '100%', cursor: 'pointer' }}
                                onClick={() => fileInputRef.current.click()}
                            />
                        ) : (
                            <Typography color="textSecondary">No images uploaded yet.</Typography>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={onInputChange}
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => fileInputRef.current.click()}
                            // startIcon={<PhotoCamera />}
                        >
                            Choose File
                        </Button>
                        <Button variant="contained" onClick={submitImage}>Submit</Button>
                    </CardContent>
                </Card>
            </Box>

            <Box mb={3}>
                {/* Passport Image Upload */}
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">Upload Passport Image</Typography>
                        {passportallimage && passportallimage.length > 0 ? (
                            <img
                                alt="Passport"
                                src={
                                    pfileName !== "No file chosen"
                                        ? imagePlaceholder
                                        : require(`../passport_image/${passportallimage[passportallimage.length - 1].image}`)
                                }
                                style={{ width: '100%', cursor: 'pointer' }}
                                onClick={() => pfileInputRef.current.click()}
                            />
                        ) : (
                            <Typography color="textSecondary">No images uploaded yet.</Typography>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={passonInputChange}
                            style={{ display: 'none' }}
                            ref={pfileInputRef}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => pfileInputRef.current.click()}
                            // startIcon={<PhotoCamera />}
                        >
                            Choose Passport Image
                        </Button>
                        <Button variant="contained" onClick={passsubmitImage}>Submit</Button>
                    </CardContent>
                </Card>
            </Box>

            {/* Action Buttons */}
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Button variant="contained" onClick={postDummyData}>Save</Button>
                <Button variant="contained" onClick={shareCV}>Share CV on WhatsApp</Button>
                <Button variant="contained" onClick={downloadMultipleCVs}>Download Multiple CVs</Button>
            </Box>

            {/* Social Media Share */}
            <Box textAlign="center">
                <Typography variant="h6">Share on Social Media:</Typography>
                {/* Add your social media share buttons here */}
            </Box>
        </Container>
    );
};

export default CVBuilder;