import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMicrosoftteams,
  SiBlender,
  SiCanva,
  SiFigma,
  SiGithub,
  SiNotion,
} from "react-icons/si";

import { DiPhotoshop } from "react-icons/di";
import { IoLogoBitbucket } from "react-icons/io";

const ToolIcon = ({ icon, altName }) => {
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

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <ToolIcon icon={<SiGithub />} altName="GitHub" />
      <ToolIcon icon={<SiVisualstudiocode />} altName="Visual Studio Code" />
      <ToolIcon icon={<DiPhotoshop />} altName="Photoshop" />
      <ToolIcon icon={<SiMicrosoftteams />} altName="Microsoft Teams" />
      <ToolIcon icon={<SiBlender />} altName="Blender" />
      <ToolIcon icon={<SiCanva />} altName="Canva" />
      <ToolIcon icon={<SiFigma />} altName="Figma" />
      <ToolIcon icon={<IoLogoBitbucket />} altName="Bitbucket" />
      <ToolIcon icon={<SiNotion />} altName="Notion" />
    </Row>
  );
}

export default Toolstack;
