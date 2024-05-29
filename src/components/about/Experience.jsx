import React from "react";

const experienceContent = [
  {
    year: "   September 2023 - May 2023",
    position: " Software Engineer",
    compnayName: "Scale AI",
    details: `  Designed and developed a highly functional Artificial Intelligence models for Open AI (Chat GPT Improvements).
                `,
  },
  {
    year: "2023",
    position: " Software Engineer",
    compnayName: "Robert Half",
    details: `Contributed to UI design, testing, coding,
     and mobile app APIs, achieving a 90% success rate in high-quality software delivery`,
  },
  {
    year: "2020 - 2022",
    position: "Software Engineer",
    compnayName: "Ministry of Works and Transport",
    details: `Integrated NodeJS with 3rd-party platforms, 
    expanding user reach by 20% and improving transactions.
    `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
