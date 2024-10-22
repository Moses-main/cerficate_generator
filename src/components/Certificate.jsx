import React, { useRef } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useReactToPrint } from "react-to-print";

const Certificate = ({ name, description, certId, date }) => {
  const componentRef = useRef();


// Handler to trigger printing as PDF

const handlePrint = useReactToPrint({ content: () => componentRef.current });

return (
  <Container maxWidth="sm">
    <div
      ref={componentRef}
      style={{
        border: "2px solid black",
        padding: "20px",
        marginTop: "20px",
        textAlign: "center",
      }}
      className=""
    >
      <Typography variant="h4">Certificate of Completion</Typography>
      <Typography variant="h6">This certificate is awarded to:</Typography>
      <Typography variant="h5" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>

      <Typography variant="body2" gutterBottom>
        Certificate ID: {certId}
      </Typography>

      <Typography variant="body2" gutterBottom>
        Date Issued: {date}
      </Typography>
    </div>

    <Button variant="contained" color="primary" onClick={handlePrint} style={{marginTop:"20px",}}>
Download as PDF
    </Button>
  </Container>
  );
}


export default Certificate;
