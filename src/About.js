import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1>Amazon by Daniyar Shaikenov</h1>
      </div>
      <div className="about__description">
        <p>
          The application was created based on the react technology. React is a
          flexible JavaScript library for building user interfaces.
        </p>
        <p>
          The following tools have been successfully implemented in the
          application:
          <ul>
            <li>npx React app with npm</li>
            <li>Google authentication system</li>
            <li>Stripe - payment processing for internet businesses</li>
            <li>
              Firebase firestore from Google - database using Cloudfire
              technology
            </li>
            <li>
              MATERIAL UI - React components for faster and easier web
              development
            </li>
            <li>React Currency format</li>
            <li>React-Dom-Router</li>
            <li>React-Context API etc...</li>
          </ul>
        </p>
      </div>
      <h2 className="about__thanks">
        Thanks for taking part in testing the application!
      </h2>
      <img
        src="https://media1.tenor.com/images/5e6a720ede0f7556e8ea9f8004061a2a/tenor.gif?itemid=14310969"
        alt=""
        className=""
      />
    </div>
  );
};

export default About;
