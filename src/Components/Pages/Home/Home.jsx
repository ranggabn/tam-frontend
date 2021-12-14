import React from "react";
import "./CSS/home.css";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import HumanBrain from "./Images/human-brain.png";
import Motivation from "./Images/leadership.png";
import Bank from "./Images/bank.png";
import Competence from "./Images/competence.png";
import Marketing from "./Images/marketing.png";
import Service from "./Images/customer-service.png";
import Outbond from "./Images/team.png";
import Slide1 from "./Images/slide-1.jpg";
import Slide2 from "./Images/slide-2.jpg";
import Slide3 from "./Images/slide-3.jpg";
import Photo1 from "./Images/photo-1.jpg";
import Photo2 from "./Images/photo-2.jpg";
import Photo3 from "./Images/photo-3.jpg";
import Photo4 from "./Images/photo-4.jpg";
import Photo5 from "./Images/photo-5.jpg";
import Photo6 from "./Images/photo-6.jpg";
import Photo7 from "./Images/photo-7.jpg";
import Outbond2 from "./Images/Outbond.PNG";

export default function Home() {
  return (
    <div>
      <div className="home">
        <Container>
          <Row>
            <Col xs={12} lg={6} md={8} className="mt-5">
              {/* <Image src={Tam} className="logo-home" /> */}
              <h1>TAM CONSULT</h1>
              <h4>
                Tunas Amanah Mandiri TAM Consult adalah lembaga training yang
                handal dan professional di bidang pendidikan pengembangan
                potensi diri Workshop, bimbingan teknis, In House training
                Seminar, dan outbond activity yang didukung oleh para
                professional dari berbagai latar belakang disiplin ilmu serta
                pengalaman di bidangnya masing masing.
              </h4>
            </Col>
          </Row>
        </Container>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1440 221.1"
          style={{ enableBackground: "new 0 0 1440 221.1" }}
        >
          <path
            class="st0"
            d="M164.2,202c-43.7-11-81.7-36.3-108.7-70.7C22.6,96.9,1.9,50.9,0.1,0H0v202v6v13.1h1440V202H164.2z"
            fill="#FFFFFF"
          />
          <path
            class="st1"
            d="M55.5,131.3C92.1,178,149,208,213,208h1227v-15H200C143.2,193,91.9,169.3,55.5,131.3z"
            fill="#212529"
          />
        </svg>
      </div>
      <div className="part-2">
        <Container>
          <h1>FOKUS LAYANAN</h1>
          <h5>TAM CONSULT</h5>
          <Row xs={1} md={3} className="g-5 mt-4">
            <Col className="col-card">
              <Card>
                <Card.Img variant="top" src={Motivation} className="img-card" />
                <Card.Body>
                  <Card.Title>Motivasi</Card.Title>
                  <Card.Text>
                    Motivasi adalah keinginan kemauan seseorang untuk
                    mencurahkan segala upayanya dalam mencapai tujuan atau hasil
                    tertentu. Kami berupaya untuk memacu motivasi bagaimana agar
                    paradigma berfikir positif terus konsisten dan terus
                    berkarya sehinggan tujuan dan hasil tertentu mudah segera
                    tercapai.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-card">
              <Card>
                <Card.Img variant="top" src={HumanBrain} className="img-card" />
                <Card.Body>
                  <Card.Title>Hypnosis</Card.Title>
                  <Card.Text>
                    Hypnosis adalah seni komunikasi alam bawah sadar manusia
                    yang dapat dipelajari oleh semua orang. Fenomena hipnotisme
                    (Trance) tidak ada hubungannya dengan magic atau mistik,
                    melainkan suatu kondisi mental dimana perhatian seseorang
                    menjadi sangat terfokus ke dalam dan pikiran bawah sadar
                    (subconscious mind) yang bekerja lebih dominan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-card">
              <Card>
                <Card.Img variant="top" src={Bank} className="img-card" />
                <Card.Body>
                  <Card.Title>
                    Pengetahuan Produk , Jasa Perbankan & Prinsip Pengenalan
                    Nasabah terkait APU PPT
                  </Card.Title>
                  <Card.Text>
                    Pengetahuan tentang Giro tabungan deposito berjangka
                    sertifikat deposito SBI, obligasi alat pembayaran tunai
                    etika dalam operasional bank, Anti Pencucian Uang dan
                    Pencegahan Pendanaan Terorisme (APU PPT), produk dana bank,
                    produk jasa bank, produk kredit bank.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-card">
              <Card>
                <Card.Img variant="top" src={Competence} className="img-card" />
                <Card.Body>
                  <Card.Title>
                    Managerial Skills & Leadership Training
                  </Card.Title>
                  <Card.Text>
                    Posisi management, menuntut kemampuan memimpin yang lebih
                    besar dari seorang leader, karena posisi management dituntut
                    agar dapat mengembangkan tim mengembangkan para leader yang
                    memiliki supervisi. Kematangan diri kemampuan menjadi role
                    model, menjadi sangat vital untuk dapat menjalankan peran
                    ini dengan sangat baik
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-card">
              <Card>
                <Card.Img variant="top" src={Marketing} className="img-card" />
                <Card.Body>
                  <Card.Title>Marketing & Selling Strategy</Card.Title>
                  <Card.Text>
                    Untuk meningkatkan daya produksi suatu perusahaan tentunya
                    wajib memiliki strategi pemasaran agar memiliki daya tawar
                    serta dapat menarik perhatian konsumen. Pada dasarnya
                    strategi pemasaran yang baik bagi pelaku bisnis mampu
                    meningkatkan nilai tambah suatu produk Hal ini penting untuk
                    dilakukan mengingat persaingan bisnis pada era sekarang
                    semakin ketat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-card">
              <Card>
                <Card.Img variant="top" src={Service} className="img-card" />
                <Card.Body>
                  <Card.Title>Service Excellence</Card.Title>
                  <Card.Text>
                    (Layanan Prima) adalah suatu usaha yang dilakukan untuk
                    memenuhi keinginan atau hasrat manusia baik yang berhubungan
                    dengan sisi customer maupun sebagai pemberi layanan Layanan
                    Prima bukan hanya memberikan kepuasan kepada customer semata
                    namun usaha untuk menyenangkan yang memberikan layanan Baik
                    Customer External maupun Customer Internal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={3} className="g-5 mt-2">
            <Col className="col-card"></Col>
            <Col className="col-card">
              <Card>
                <Card.Img variant="top" src={Outbond} className="img-card" />
                <Card.Body>
                  <Card.Title>Outbond Activity</Card.Title>
                  <Card.Text>
                    Outbound bukan hanya bermakna kegiatan yang dilakukan diluar
                    ruang tetapi bermakna sebagai latihan out of bounderise
                    Keluar dari bingkai /frame kebiasaan. Disini peserta diajak
                    untuk berpikir luar biasa dan membuat terobosan
                    terobosanbaru dan membentuk SDM yang lebih berkualitas
                    konsisten dalam peningkatan pola fikir.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-card"></Col>
          </Row>
        </Container>
      </div>
      <div className="part-3">
        <Container>
          <Row>
            <Col md={{ span: 12 }}>
              <Card>
                <Container>
                  <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>
                      <h3>KEGIATAN KAMI</h3>
                    </Col>
                  </Row>
                </Container>
                <Row>
                  <Col>
                    <Carousel className="carousel">
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Slide1}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Slide2}
                          alt="Second slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Slide3}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <img src={Photo1} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Photo2} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Photo3} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Photo4} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Outbond2} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Photo5} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Photo6} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Photo7} className="img-fluid" alt="" />
                    </Col>
                    <Col xs={6} md={4}>
                      <img src={Slide1} className="img-fluid" alt="" />
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
