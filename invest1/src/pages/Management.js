import React from "react";
import { useParams } from "react-router-dom";

const Management = () => {
  const { name } = useParams();
  console.log(name);
  return <div>Management</div>;
};

export default Management;
