import React, { useRef } from "react";
import { Button, Container, Typography } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../App.css";

const Certificate = ({ name, certId, date }) => {
  const componentRef = useRef();

  // Function to handle printing or saving as PDF

  const handleDownloadPdf = async () => {
    const input = componentRef.current;

    // Capture certificate as an image with high resolution using html2canvas
    const canvas = await html2canvas(input, {
      scale: 4, // Increase scale to improve resolution and clarity
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    // Initialize jsPDF for landscape A4 size
    const pdf = new jsPDF("landscape", "pt", "a4"); // Changed to mm for easier margin handling
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Define margins (in mm)
    // const margin = 10; // 10mm margin on all sides

    // Calculate available space for the image
    // const availableWidth = pdfWidth - 2 * margin;
    // const availableHeight = pdfHeight - 2 * margin;

    // Scale the image to fit within the PDF's dimensions while maintaining aspect ratio
    // let imgWidth = availableWidth;
    // let imgHeight = (canvas.height * availableWidth) / canvas.width;

    // If the image height is larger than the available height, fit to available height instead
    // if (imgHeight > availableHeight) {
    //   imgHeight = availableHeight;
    // }

    // Calculate position to center the image

    // Add the image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Download the generated PDF
    pdf.save("certificate.pdf");
  };

  return (
    <Container
    className="
    overall-container"
      // maxWidth="lg"
      sx={{ textAlign: "center", marginTop: "20px", marginLeft: "-120px" }}
      style={{
        width: "150%", // A4 width in landscape,
        padding: "3px",
        // border: "2px solid green",
      }}
    >
      <div
        className="cert-background"
        ref={componentRef}
        style={{
          border: "2px solid orangered",
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          margin: "auto",
          padding: "40px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          aspectRatio: "297 / 210",
          textAlign: "left",
          boxSizing: "border-box",
        }}
        sx={{
          maxWidth: {
            xs: "120%",
            sm: "80%",
            md: "70%",
            lg: "60%",
          },
          height: "auto",
        }}
      >
        <Typography
          style={{
            color: "orangered",
            fontWeight: "bold",
            fontSize: "15px",
            margin: "10px 0px -5px -20px",
          }}
        >
          <img
            src="../../tublian_s.png"
            alt="logo"
            style={{
              position: "relative",
              height: "40px",
              width: "auto",
              top: "0px",
              margin: "0px 10px -25px 20px",
            }}
          />
          TUBLIAN
        </Typography>

        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginTop: "50px", fontSize: "1.8rem" }}
        >
          CERTIFICATE
        </Typography>
        <Typography
          variant="h4"
          style={{ fontSize: "1rem", color: "red", fontWeight: "bold" }}
        >
          OF INTERNSHIP
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginBottom: "-20px",
            marginTop: "80px",
            textAlign: "center",
            fontFamily: "cursive",
            fontSize: "2em",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="h6"
          style={{ textAlign: "center", color: "orangered" }}
        >
          ___________________________________________
        </Typography>

        <Typography
          variant="body2"
          style={{
            textAlign: "justify",
            fontSize: "16px",
          }}
        >
          successfully completed the 4-Week AI Internship Program at Tublian,
          demostrating exceptional dedication and commendable work ethic
          throughout the internship. The contributions made including the
          development of an advanced chatbot, have added significant value to
          the AI community.
        </Typography>
        <div>
          <Typography
            style={{
              marginBottom: "-120px",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: "60px" }}>
              <img
                src="../../sign.png"
                alt="founder signature"
                style={{
                  marginBottom: "-9px",
                  height: "37px",
                  marginRight: "20px",
                  fontWeight: "bold",
                }}
              />
              <br />
              <Typography
                variant="paragraph"
                style={{ fontSize: "11px", fontWeight: "bold" }}
              >
                Nilanjan Raychaudhuri
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "10px", fontWeight: "bold" }}
              >
                Founder - Tublian
              </Typography>
            </div>
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{
              textAlign: "right",
              margin: "50px  5px 0px 0px",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          >
            <Container style={{ marginLeft: "50px" }}>
              <Typography
                style={{
                  color: "red",
                  fontWeight: "bold",
                  paddingBottom: "0px",
                  fontSize: "0.9rem",
                  marginRight: "20px",
                  marginLeft: "2px",
                }}
              >
                <span>
                  <img
                    src="../../batch.png"
                    alt="badge"
                    style={{
                      height: "40px",
                      padding: "0px 2px",
                      margin: "10px 10px -35px 0px",
                    }}
                  />
                </span>
                CERTIFIED
              </Typography >
              Certificate ID: {certId}
              <Typography
                variant="body2"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  fontSize: "10px",
                  marginLeft: "3px",
                }}
              >
                Date Issued: {date}
              </Typography>
            </Container>
          </Typography>
        </div>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={handleDownloadPdf}
        sx={{ marginTop: "20px" }}
        style={{ marginTop: "20px" }}
      >
        Download as PDF
      </Button>
    </Container>
  );
};

export default Certificate;
