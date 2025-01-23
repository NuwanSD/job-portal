import React from "react";
import { useParams } from "react-router-dom";

const RecruiterProfile = () => {
  const params = useParams();

  console.log(params);

  return <div>RecruiterProfile</div>;
};

export default RecruiterProfile;
