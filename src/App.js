// import logo from './logo.svg';
import Certificate from "./components/Certificate";
import "./App.css";

import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const App = () => {
  const [name, setName] = useState("");
  const [certId, setCertId] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);

  const handleGenereateCertificate = () => {
    if (name && certId && date) {
      setShowCertificate(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Certificate Generator
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Certificate ID"
        fullWidth
        margin="normal"
        value={certId}
        onChange={(e) => setCertId(e.target.value)}
      />

      <TextField
        label="Date"
        fullWidth
        margin="normal"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />


{/*  */}


      <TextField
      label="Description"
      fullWidth
      width="100%"
      height="200%"
        multiline
        rows={4}
        // variant="outline"
      margin="normal"
      value={description}
      onChange={(e) =>{
        setDescription(e.target.value)
      }}/>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleGenereateCertificate}
        style={{ marginTop: "20px" }}
      >
        Generate Certificate
      </Button>

      {showCertificate && (
        <Certificate
          name={name}
          certId={certId}
          date={date}
          description={description}
        />
      )}
    </Container>
  );
};
export default App;
