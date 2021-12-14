import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Visi() {
  return (
    <Container>
      <Row className="row-tentang-kami">
        <Col md={{ span: 6, offset: 3 }} className="col-tentang-kami motto">
          <h1>VISI MISI</h1>
        </Col>
      </Row>
      <Card className="padding-card">
        <Row className="row-card-vm">
          <Col lg={6}>
            <Card bg="light" text="dark" className="mb-2">
              <Card.Header className="tentang-kami-texth5">
                <h1>VISI</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title className="card-title-txt">
                  Menjadi lembaga training terbaik dan terpercaya serta
                  berkontribusi dalam meningkatkan kompetensi diri generasi
                  bangsa untuk selalu memberikan karya yang terbaik.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card bg="secondary" text="white" className="mb-2">
              <Card.Header className="tentang-kami-texth5">
                <h1>MISI</h1>
              </Card.Header>
              <Card.Body className="col-card-misi">
                <Card.Title className="card-title-misi">
                  <Row>
                    <Col lg={1}>1. </Col>
                    <Col lg={11}>
                      Konsisten menghadirkan berbagai training, konsultasi yang
                      berfokus pada peningkatan kekuatan sumber daya dan
                      berorientasi pada kebutuhan dan kepuasan pelanggan.
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Title className="card-title-misi">
                  <Row>
                    <Col lg={1}>2. </Col>
                    <Col lg={11}>
                      Fokus memberikan konsultansi yang dibutuhkan oleh
                      pelanggan dalam rangka meningkatkan kapasitas kelembagaan
                      maupun SDM.
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Title className="card-title-misi">
                  <Row>
                    <Col lg={1}>3. </Col>
                    <Col lg={11}>
                      Konsisten menjaga kepercayaan dan nilai tambah untuk
                      pengembangan share holder.
                    </Col>
                  </Row>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
