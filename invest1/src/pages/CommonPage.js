import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const CommonPage = () => {
  const { name } = useParams();
  const [docs, setDocs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDocument = async () => {
      try {
        const uri = require(`../const/${name}.pdf`);
        setDocs([
          {
            uri,
            fileType: "pdf",
            fileName: name,
          },
        ]);
      } catch (er) {
        setError(er);
        console.error(er);
      }
    };

    loadDocument();
  }, [name]);

  return (
    <Container>
      <div>CommonPage</div>
      <div>{name}</div>

      {error ? (
        <div>Error loading document: {error.message}</div>
      ) : (
        docs && (
          <DocViewer
            style={{ height: 700 }}
            documents={docs}
            pluginRenderers={DocViewerRenderers}
          />
        )
      )}
    </Container>
  );
};

export default CommonPage;
