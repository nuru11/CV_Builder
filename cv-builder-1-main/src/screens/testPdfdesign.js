import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import Barcode from 'react-barcode';
import applicantimg from "../image_placeholder/user.png"
import applicantsmallimg from "../image_placeholder/smallimg.png"
import smallapplicantimage from "../image_placeholder/smallapplicantimage.jpeg"
import saudiforeignaffairs from "../image_placeholder/saudiforeignaffairs.jpg"
import saudiforeignaffairslogo from "../image_placeholder/saudiforeignaffairslogo.png"

const TestpdfDesign = () => {
    const [fileName, setFileName] = useState("E776062468");

    const downloadCV = () => {
        const element = document.getElementById("cvContent");
        const options = {
            margin: 0.2,
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

    return (
        <div>
            vcccc

            <button onClick={downloadCV}>Download</button>
            <div style={{ display: 'none' }}>
                <div className="embassy-cv-main-parent" id="cvContent">
                    <div className='embassy-header'>
                        <div className='embassy-header-first-child' style={{ display: 'flex', flexDirection: 'column', }}>
                            <div style={{ display: 'flex', flexDirection: 'column',  }}>
                                <Barcode
                                       displayValue={false}
                                                value={fileName} height={23} width={1.7} marginBottom={2} />

                                                
                                <span style={{ display: "flex", justifyContent: "space-between", marginLeft: '10px',  }}><span style={{ fontFamily: "serif", fontSize: "8px",  }}>VISA No:</span> <span style={{marginRight: "10px", fontSize: "12px", fontWeight: "bold"}}>{fileName}</span></span>

                                <span style={{ display: "flex", justifyContent: "space-between", marginLeft: '10px',  }}><span style={{ fontFamily: "serif", fontSize: "13px",  }}>sponsor:</span> <span style={{marginRight: "10px", fontSize: "13px"}}>MONIRAH ALHARTHI</span></span>
                            </div>
                            
                            <div className="embassy-header-first-child-img-div" style={{marginLeft: "7px"}}>
                            <img
                            style={{marginTop: "10px", width: "150px", height: "150px"}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={smallapplicantimage}
                       
                    />
                            </div>
                        </div>

                        {/* <div className='embassy-header-second-child' style={{display: "flex", flexDirection: "column", justifyContent: "space-between",  }}>
                            <div></div>
                            <div style={{margin: 0, padding: 0, marginLeft: "50px"}}>
                            <img
                            style={{width: "150px", height: "150px",}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={saudiforeignaffairslogo}
                       
                    />
                            </div>
                        </div> */}
                          <div style={{display: "flex", flexDirection: "row", }}>
                          <div className='embassy-header-second-child' style={{display: "flex", flexDirection: "column", justifyContent: "space-between",  }}>
                            <div></div>
                            <div style={{margin: 0, padding: 0, marginLeft: "50px"}}>
                            <img
                            style={{width: "150px", height: "150px",}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={saudiforeignaffairslogo}
                       
                    />
                            </div>
                        </div>
                        <div className='embassy-header-third-child' style={{fontFamily: "serif",  background: 'none', display: 'flex', flexDirection: "column", paddingLeft: "100px", flexBasis: "70%"  }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Barcode value={"E776062468"} fontWeight={"bold"} height={23} width={1.7} marginBottom={2} />
                                
                            </div>
                            <div style={{ marginTop: "5px", fontFamily: "serif", fontSize: "13px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", background: "none"  }}>
    <div style={{fontFamily: "serif", textAlign: "center" }}>
        EMBASSY OF SAUDI ARABIA
    </div>
    <div style={{fontFamily: "serif", textAlign: "center" }}>
        CONSULAR SECTION
    </div>

    <div style={{ fontFamily: "serif", textAlign: "center", fontSize: "18px", marginTop: "5px", fontWeight: "bold" }}>
        سفارة المملكة العربية السعودية القسم القنصلي
    </div>
</div>

<div style={{fontFamily: "serif",  fontSize: "12px", background: "none", marginTop: "20px", marginLeft: "-18px" }} >SKY WAY FOREIGN EMPLOYMENT AGENT</div>
<div style={{fontFamily: "serif", marginTop: "10px", fontWeight: "bold"}}>skywayagencyoffice@gmail.com</div>
</div>
 
    

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestpdfDesign;