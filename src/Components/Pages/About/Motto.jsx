import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Motto() {
  return (
    <Container>
      <Row className="row-tentang-kami">
        <Col md={{ span: 6, offset: 3 }} className="col-tentang-kami"></Col>
      </Row>
      <Card className="padding-card">
        <Row className="mt-5 mb-5">
          <Row className="col-tentang-kami">
            <Col lg={6} className="motto">
              <h2>
                <b>MOTTO PERUSAHAAN</b>
              </h2>
            </Col>
          </Row>
          <Row className="col-tentang-kami mt-3">
            <Col lg={11}>
              <h3>
                “ Menuju masa depan yang berkah, bahagia, sukses, sejahtera, dan
                mulia ”
              </h3>
            </Col>
          </Row>
        </Row>
        <Row className="margin-top">
          <Col lg={6} className="border-card">
            <h2>NILAI NILAI PERUSAHAAN</h2>
          </Col>
        </Row>
        <Row xs={1} md={5} className="g-3 margin-bottom">
          <Col>
            <Card border="primary" className="card-about">
              <Card.Body>
                <Card.Title>U</Card.Title>
                <Card.Text>
                  Utama, utamakan niat ibadah dalam melakukan apapun, hidup
                  bermanfaat dan perusahaan dapat berkontribusi besar pada
                  pengembanggan generasi bangsa
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="success" className="card-about">
              <Card.Body>
                <Card.Title>T</Card.Title>
                <Card.Text>
                  Tunas, selalu tumbuh dan berkembang serta konsisten menuju
                  kesuksesan perusahaan dan berkarya untuk menjadi yang lebih
                  besar
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="danger" className="card-about">
              <Card.Body>
                <Card.Title>A</Card.Title>
                <Card.Text>
                  Amanah, selalu menjaga kepercayaan dan memberikan nilai tambah
                  pada share holders
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="warning" className="card-about">
              <Card.Body>
                <Card.Title>M</Card.Title>
                <Card.Text>
                  Mandiri, senantiasa sanggup, tanggap, cepat, dan berdikari
                  dalam memberikan solusi
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="dark" className="card-about">
              <Card.Body>
                <Card.Title>A</Card.Title>
                <Card.Text>
                  Arti, menjadi perusahaan yang mempunyai arti karena berusaha
                  memberikan manfaat yang banyak dalam pengembangan generasi
                  bangsa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
