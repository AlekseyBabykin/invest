import React, { useState } from "react";
import { Container } from "react-bootstrap";

const GenerateLogo = () => {
  const [logoStartup, setLogoStartap] = useState([]);
  let timer;

  const handleStartup = (e) => {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      var name = e.target.value;
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/logo?name=" + name,
          {
            method: "GET",

            headers: {
              "X-Api-Key": "EtUjYkGDCyRspblhlLEBEQ==GXRRGJvo7O0D41f1",
            },
            contentType: "application/json",
          }
        );
        const data = await response.json();
        setLogoStartap(data);
      } catch (err) {
        console.log(err);
      }
    }, 500);
  };

  return (
    <Container className="mt-2 mb-2 text-center">
      <h2>Write name your logo</h2>
      <input type="text" onChange={(e) => handleStartup(e)} />

      <div className="mt-2 mb-2">
        {logoStartup.map((link, index) => (
          <img
            width={250}
            height={250}
            key={index}
            src={link.image}
            style={{ marginLeft: 10 }}
          />
        ))}
      </div>
    </Container>
  );
};

export default GenerateLogo;
