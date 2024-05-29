import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Brian" },
  { meta: "last name", metaInfo: "Baguma" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "African-American" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "United States" },
  { meta: "phone", metaInfo: "" },
  { meta: "Email", metaInfo: "bagumabrian21@mail.com" },
  { meta: "Skype", metaInfo: " brian.baguma" },
  { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
