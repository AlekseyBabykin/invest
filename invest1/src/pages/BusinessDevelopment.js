import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const BusinessDevelopment = () => {
  const { name } = useParams();

  const docs = [
    {
      uri: require(`../const/${name}.pdf`),
      fileType: "pdf",
      fileName: `${name}`,
    },
  ];

  return (
    <Container>
      <div>BusinessDevelopment</div>
      <div>{name}</div>
      <DocViewer
        style={{ height: 1000 }}
        documents={docs}
        pluginRenderers={DocViewerRenderers}
      />
    </Container>
  );
};

export default BusinessDevelopment;
