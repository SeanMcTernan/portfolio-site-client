// Render About page
import React, { Fragment } from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import { technologies, technologiesType } from "../../libs/projectData";
import logo from "../../images/svgs/logo.svg";
import boonmapsLogo from "../../images/Company_Logos/boonmaps-logo-72.png";
import profilePic from "../../images/Sean_Mc_Ternan_Image.jpeg";
import simpleTextingLogo from "../../images/Technologies_Icons/SimpleTexting.svg";
import BTSLogo from "../../images/Company_Logos/beyond_the_summit_logo.svg";
import PLLogo from "../../images/Company_Logos/PringLogix_Logo.png";
import YEPLogo from "../../images/Company_Logos/yep_logo.svg";
import "../../styles/Tabs.css";

//Get logos and information on preferred Technologies
const backendTechnologies = [
  technologies[2],
  technologies[7],
  technologies[32],
  technologies[20],
  technologies[23],
  technologies[33],
  technologies[34],
];
const frontendTechnologies = [
  technologies[0],
  technologies[35],
  technologies[38],
  technologies[36],
  technologies[37],
  technologies[39],
  technologies[41],
  technologies[40],
];
const devOpsTechnologies = [
  technologies[42],
  technologies[43],
  technologies[44],
];

const tools = [
  technologies[1],
  technologies[43],
  technologies[45],
  technologies[3],
  technologies[46],
  technologies[47],
  technologies[48],
  technologies[49],
  technologies[50],
  technologies[51],
  technologies[52],
  technologies[53],
  technologies[54],
  technologies[55],
];

//Render Component

const About: React.FC = () => {
  // Render function for preferred technologiess
  const renderTechnologies = (info: technologiesType[]) => {
    return (
      <Row style={{ paddingTop: "5vh" }}>
        {info.map((technoloy: technologiesType) => {
          return (
            <Col sm={3} className="mx-auto mb-5">
              <p style={{ textAlign: "center" }}>
                <a
                  className="technologies"
                  href={technoloy.technologiesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "30%", marginBottom: "-1vh" }}
                    src={technoloy.imgSrc}
                    alt={`${technoloy.name}-Logo`}
                  />
                </a>
              </p>
              <a
                className="technologies"
                href={technoloy.technologiesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p
                  style={{ textAlign: "center", color: "var(--mainWhite)" }}
                  className="font-weight-lighter tabsContent"
                >
                  {technoloy.name}
                </p>
              </a>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <div className="details">
      <Fragment>
        <Container className="homeDiv align-items-center">
          <Row>
            <Col>
              <img
                src={profilePic}
                style={{
                  width: "35%",
                  margin: "1vh",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "var(--mutedBlue)",
                }}
                alt="Sean Mc Ternan Profile Pic"
              />
            </Col>
            <Col>
              <p style={{ textAlign: "center" }}>
                <img
                  src={logo}
                  style={{ width: "30%", margin: "1vh" }}
                  alt="Site Logo"
                />
              </p>
            </Col>
            <Col></Col>
          </Row>
          <h1
            style={{ textAlign: "center", color: "var(--mutedBlue)" }}
            className="font-weight-lighter"
          >
            SEÁN MC TERNAN - FULL STACK DEVELOPER
          </h1>
          <p style={{ textAlign: "center" }}></p>
          <p className="tabsContent">
            What started out as a necessity to learn to code, quickly grew into
            a passion of mine that I have dedicated years learning to craft.
            Coding is now the furthest thing from 'just a job' for me. It's an
            outlet to engage in challenging tasks, while feeling rewarded by the
            elegant solutions that are created along the way. Software
            development is 'The Never Ending Story', as the industry grows and
            adapts, I too must adapt with it. <br></br>
            <br></br>Outside of my professional experience I engage in projects
            that challenge me, yet serve a personal purpose, this not only helps
            me professionaly, but also scratches the itch I have for challenges
            and creative solutions. When you get to know me, you will know I am
            not one to just sit around!
          </p>
        </Container>
        <Container
          style={{ paddingBottom: "3vh", textAlign: "center" }}
          className="mt 5 "
        ></Container>
        {/* Nav Links */}
        <Container style={{ paddingBottom: "20vh" }}>
          <Tabs defaultActiveKey="professional-experience" id="details-tab">
            <Tab
              eventKey="professional-experience"
              title="Professional Experience"
            >
              {/* BoonMaps Information  */}
              <a
                href="https://boonmaps.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={boonmapsLogo}
                  style={{ width: "3vw", marginTop: "2vh" }}
                  alt="Boonamps Logo"
                />
              </a>
              <p className="font-weight-bold tabsContent">
                Full Stack Developer - Boonmaps
              </p>
              <p
                className="font-weight-lighter"
                style={{ color: "var(--mutedBlue)" }}
              >
                October 2020 - Present
              </p>
              <p>
                Until October 2020
                <a
                  href="https://boonmaps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Boonmaps{" "}
                </a>
                was strictly a mobile application for users to explore 3D maps
                offline for outdoor regions. CEO and founder Frazer Hogg
                contracted me to create a backend for administrators of the app
                to upload map data onto the DynamoDB on AWS. Once completed, the
                next phase will involve building a front end with React for the
                administrators to login and edit the map information.
              </p>
              {/* BoonMaps Information */}
              {/* SimpleTexting Information  */}
              <a
                href="https://simpletexting.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={simpleTextingLogo}
                  style={{ width: "3vw", marginTop: "2vh" }}
                  alt="SimpleTexting Logo"
                />
              </a>
              <p className="font-weight-bold tabsContent">
                Lead Technical Support Engineer - SimpleTexting
              </p>
              <p
                className="font-weight-lighter"
                style={{ color: "var(--mutedBlue)" }}
              >
                FEBRUARY 2018 - Present
              </p>
              <p>
                Daily tasks include querying our Mongo DB Database and logs for
                unknown issues. Scripting reports and fixes within the database
                using Node.js and MongoDB. As an after hours project, wrote an
                entire application via NodeJS to assist support team during
                emergency overloads. Used Jmeter and open APIs to streamline
                registration process for newly purchased phone lines. Created
                landing pages for root domains for our in-house URL shortener.
                Taught classes to our team on our API endpoints and web-hooks,
                showing best practice methods for troubleshooting and testing
                our endpoints.
              </p>
              {/* SimpleTexting Information */}
              {/* Beyond The Summit Information  */}
              <a
                href="https://beyondthesummitpdd.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={BTSLogo}
                  style={{ width: "4vw", marginTop: "2vh" }}
                  alt="Beyond The Summit Logo"
                />
              </a>
              <p className="font-weight-bold tabsContent">
                Full Stack Developer - Beyond The Summit
              </p>
              <p
                className="font-weight-lighter"
                style={{ color: "var(--mutedBlue)" }}
              >
                July 2016 - FEBRUARY 2018
              </p>
              <p>
                Developed an online supply store for our clients across Canada
                and Europe using AWS. Using DynamoDB and Lambda I developed a
                supply store which serviced some of the largest companies in Oil
                & Gas in North America. Users and their roles were managed using
                MongoDB. The Frontend was developed using React and React Redux.
                I also developed a back end to fulfill print orders with third
                part vendors and a payment processing using Stripe.
              </p>
              {/* Beyond The Summit Information */}
              {/* PrintLogix Corporation Information */}
              <img
                src={PLLogo}
                style={{ width: "4vw", marginTop: "2vh" }}
                alt="PrintLogix Logo"
              />
              <p className="font-weight-bold tabsContent">
                Software Engineer - PrintLogix Corporation
              </p>
              <p
                className="font-weight-lighter"
                style={{ color: "var(--mutedBlue)" }}
              >
                October 2012 - July 2016
              </p>
              <p>
                Printlogix had a low number of staff compared to its user base
                of 20,000+. The result being, many hats were worn. Therefore,
                along with development, database administration and testing I
                oversaw front end design and implementing integration with third
                party API's such as Zendesk and Olark. Finally, I took ownership
                of the Agile process. I worked directly with the CEO to
                communicate product direction to the rest of the development
                team.
              </p>
              {/* PrintLogix Corporation Information */}
              {/* YEP/ENDeavour Information */}
              <img
                src={YEPLogo}
                style={{ width: "3vw", marginTop: "2vh" }}
                alt="YEP Logo"
              />
              <p className="font-weight-bold tabsContent">
                Software Consultant/Coding Coach - Young Entrepreneur Program
              </p>
              <p
                className="font-weight-lighter"
                style={{ color: "var(--mutedBlue)" }}
              >
                November 2010 - March 2012
              </p>
              <p>
                Worked as a Software Consultant on the Endeavor program where I
                got to work directly with 12 tech startups providing technical
                consultation and web design. The program also had a junior level
                for secondary school students where I organized taught coding
                workshops and events for the students to help highlight the
                benefits of a career in coding.
              </p>
              {/* YEP/ENDeavour Information */}
            </Tab>
            <Tab eventKey="technologies" title="Preferred Technologies">
              <h2 className="tabsContent">Back-end Techologies</h2>
              {renderTechnologies(backendTechnologies)}
              <h2 className="tabsContent">Front-end Techologies</h2>
              {renderTechnologies(frontendTechnologies)}
              <h2 className="tabsContent">DevOps Techologies</h2>
              {renderTechnologies(devOpsTechnologies)}
              <h2 className="tabsContent">Tools</h2>
              {renderTechnologies(tools)}
            </Tab>
            <Tab eventKey="education" title="Education">
              <h2 className="tabsContent">University</h2>
              <p>
                {" "}
                <a
                  href="https://www.ul.ie/courses/bachelor-science-music-media-performance-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bachelor of Science in Multimedia Technology
                </a>
                &nbsp;-&nbsp;University of Limerick 2010
                <br></br>
                <br></br>Coursework included: Digital Input and Software
                Systems, Database Design Systems, Professional Issues in
                Software Engineering, Imperative Programming, and Advanced
                Topics in Sensor Feedback, Representation and Modeling THESIS:
                Production of Three Dimensional Visual Feedback Sensor System.
              </p>
              <h2 className="tabsContent">Certificates</h2>
              <p>
                <a
                  href="https://serverless-stack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn to build full-stack Serverless apps&nbsp;
                </a>
                -&nbsp;Serverless<br></br>
                <a
                  href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Complete Node.js Developer Course&nbsp;
                </a>
                -&nbsp;Andrew Mead<br></br>
                <a
                  href="https://www.udemy.com/course/react-2nd-edition/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Complete React Developer Course&nbsp;
                </a>
                -&nbsp;Andrew Mead<br></br>
                <a
                  href="https://www.udemy.com/course/understanding-typescript/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Understanding TypeScript&nbsp;-&nbsp;2020 Edition&nbsp;
                </a>
                -&nbsp;Maximilian Schwarzmüller
                <br></br>
                <a
                  href="https://www.udemy.com/course/modern-javascript/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Modern JavaScript Bootcamp&nbsp;
                </a>
                -&nbsp;Andrew Mead
              </p>
              <h2 className="tabsContent">Courses</h2>
              <p>
                <a
                  href="https://www.learnenough.com/git-tutorial/getting_started"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Enough Git to Be Dangerous&nbsp;
                </a>
                -&nbsp;Michael Hartl
                <br></br>
                <a
                  href="https://mead.io/gatsby-bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Great Gatsby Bootcamp&nbsp;
                </a>
                -&nbsp;Andrew Mead
                <br></br>
                <a
                  href="https://www.codecademy.com/learn/learn-python-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Python 3&nbsp;
                </a>
                -&nbsp;Codecademy
                <br></br>
                <a
                  href="https://www.codecademy.com/learn/learn-html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn HTML&nbsp;
                </a>
                -&nbsp;Codecademy
              </p>
            </Tab>
          </Tabs>
        </Container>
      </Fragment>
    </div>
  );
};

export default About;
