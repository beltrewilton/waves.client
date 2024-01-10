import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql,
  DiCss3,
} from "react-icons/di";
import {
  SiAntdesign,
  SiOpencv,
  SiHtml5,
} from "react-icons/si";

const TechIcon = ({ icon, altName }) => {
  const renderTooltip = (props) => (
    <Tooltip id={`${altName}-tooltip`} {...props}>
      {altName}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Col xs={4} md={2} className="tech-icons">
        {icon}
      </Col>
    </OverlayTrigger>
  );
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIcon icon={<CgCPlusPlus />} altName="C++" />
      <TechIcon icon={<DiPython />} altName="Python" />
      <TechIcon icon={<DiJavascript1 />} altName="JavaScript" />
      <TechIcon icon={<DiReact />} altName="React" />
      <TechIcon icon={<DiGit />} altName="Git" />
      <TechIcon icon={<DiMysql />} altName="MySQL" />
      <TechIcon icon={<SiOpencv />} altName="OpenCV" />
      <TechIcon icon={<SiAntdesign />} altName="Ant Design" />
      <TechIcon icon={<SiHtml5 />} altName="HTML5" />
      <TechIcon icon={<DiCss3 />} altName="CSS3" />
    </Row>
  );
}

export default Techstack;
