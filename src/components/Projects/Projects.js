import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AAIDS from "../../Assets/Projects/AAIDS.png";
import attendance from "../../Assets/Projects/Attendance.png";
import BMI from "../../Assets/Projects/BMI.png";
import tracker from "../../Assets/Projects/Price_tracker.png";
import scrap from "../../Assets/Projects/scrap_book.png";
import surveillance from "../../Assets/Projects/surveillance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Online Price Tracker"
              description="This a python program that allows user to track pricing of a product in amazon website over period of time and sent us gmail notification if the price goes below the user wished amount with the product link so that the user can buy the product straight away."
              ghLink="https://github.com/swami1302/AmazonPriceTracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surveillance}
              isBlog={false}
              title="Smart Surveillance"
              description="The Smart Surveillance project is a Python-based system that utilizes Haar Cascade and Histogram of Oriented Gradient (HOG) algorithms in combination with OpenCV for real-time object detection and tracking using surveillance cameras. This project enhances security and monitoring capabilities by detecting and alerting users to any suspicious activity, making it valuable for various applications, including security and surveillance."
              ghLink="https://github.com/swami1302/Smart_Surveillance"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AAIDS}
              isBlog={false}
              title="Automated Animal Identification and Detection of Species  (AAIDS)"
              description="AAIDS employs fine-tuned VGG16 CNNs for precise species identification. Trained on the Oregon Wildlife Dataset, it seamlessly integrates with Flask for user-friendly image uploads and real-time identification, presenting a robust solution for wildlife monitoring and conservation."
              ghLink="https://github.com/swami1302/Automated_Animal_Detection"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMI}
              isBlog={false}
              title="BMI Calculator with React and Ant Design"
              description="A simple Body Mass Index (BMI) calculator built using React and styled with Ant Design components. Easily determine your BMI by entering your weight and height, and receive instant feedback on your health status. A clean and responsive user interface enhances the user experience."
              ghLink="https://github.com/swami1302/BMI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Automatic Attendence System in OpenCV"
              description="Developed a Facial Recognition Attendance System in Python, utilizing the Haar Cascade algorithm for accurate face detection. The system operates without explicit dependencies, ensuring a lightweight and straightforward setup. Experience automated attendance tracking with minimal configuration overhead."
              ghLink="https://github.com/swami1302/Automatic_attendence_system_using_facial_recognition_python_openCV"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrap}
              isBlog={false}
              title="Digital Scarp book"
              description="Crafted a mobile-responsive digital scrapbook using JavaScript, where memories come to life with a swipe. Perfect for reliving cherished moments, this project showcases photos in a seamless paper-like format. An ideal birthday gift that combines nostalgia with modern interactivity."
              ghLink="https://github.com/swami1302/Scarp_book"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
