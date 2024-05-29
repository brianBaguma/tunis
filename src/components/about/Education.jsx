import React from "react";

const educationContent = [
  {
    year: "2015",
    degree: "ENGINEERING DEGREE",
    institute: "MUK",
    details: `  I graduated with a degree in  Engineering from Makerere University,
     where I gained a strong foundation in both theoretical concepts 
     and practical applications of software development`,
  },
  {
    year: "2024",
    degree: "MASTER DEGREE",
    institute: "PRINCETON UNIVERSITY",
    details: `I recently graduated with an esteemed degree in Software Engineering,
     during which I developed an extensive and nuanced grasp of both the intricate theoretical frameworks 
     and the sophisticated practical methodologies that underpin cutting-edge software development`,
  },

];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
