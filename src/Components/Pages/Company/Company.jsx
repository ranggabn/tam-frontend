import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import company from "./Assets/companyprofile.pdf";

export default function Company() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Container>
      <Row>
        <Col lg={12} className="margin-top mt-5">
          <h1>COMPANY PROFILE</h1>
        </Col>
      </Row>
      <Row>
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={company} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </>
      </Row>
    </Container>
  );
}
