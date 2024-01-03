import React, { useState } from "react";
import { Container } from "react-bootstrap";

const GenerateStartup = () => {
  const [nameStartup, setNameStartap] = useState();
  let timer;
  const name = require("@rstacruz/startup-name-generator");

  const handleStartup = (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setNameStartap(name(e.target.value));
    }, 500); // Adjust the delay as needed
  };

  return (
    <Container className="mt-2 mb-2 text-center">
      <h2>Write name your startup</h2>
      <input type="text" onChange={(e) => handleStartup(e)} />
      {nameStartup && Array.isArray(nameStartup) && (
        <div className="d-flex flex-wrap p-2">
          {nameStartup.map((item, index) => (
            <div className="mr-2 ml-2" key={index}>
              {" "}
              {item}{" "}
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default GenerateStartup;
