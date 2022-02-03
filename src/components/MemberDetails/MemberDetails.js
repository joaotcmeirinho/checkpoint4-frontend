import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Background from "../../assets/background.webp";
import "./MemberDetails.css";

export const MemberDetails = () => {
  const [member, setMember] = useState([]);
  const params = useParams();

  const memberId = params.id;

  const getDetails = async () => {
    const response = await axios.get(
      `http://localhost:5001/api/family/${memberId}`
    );
    setMember(response.data[0]);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="member-details-ctn"
    >
      <h1 className="member-details-name">{member.name}</h1>
      <img className="member-details-img" src={member.url} alt={member.name} />
      <p className="member-details-desc">{member.description}</p>
    </div>
  );
};
