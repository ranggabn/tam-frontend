import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ceo from "./Images/CEO.PNG";
import bismillah from "./Images/bismillah.png";

export default function About() {
  return (
    <Container>
      <Row className="row-tentang-kami">
        <Col md={{ span: 6, offset: 3 }} className="col-tentang-kami motto">
          <h1>TENTANG KAMI</h1>
        </Col>
      </Row>
      <Card className="padding-card">
        <Row className="col-tentang-kami mb-5 mt-5">
          <Col lg={10}>
            <p className="tentang-kami-texth5">
              <b>Tunas Amanah Mandiri (TAM Consult)</b> adalah lembaga training
              yang handal dan professional dibidang pendidikan, pengembangan
              potensi diri, Workshop, bimbingan teknis, In House training,
              Seminar, dan outbond activity yang didukung oleh para professional
              dari berbagai latar belakang disiplin ilmu serta pengalaman
              dibidangnya masing-masing. Kami telah menangani dan mengadakan
              berbagai pelatihan dengan beragam tema terutama menyangkut
              pendidikan, jasa dan produk perbankan, motivasi, pemasaran,
              service excellent, dan hypnosis. Di dalam pelaksanaan kegiatan,
              kami bekerja sama dengan berbagai instansi pemerintah dan swasta
              baik secara kelembagaan maupun non kelembagaan dalam arti didukung
              materi dan narasumber.
            </p>
          </Col>
        </Row>
        <Row className="col-tentang-kami">
          <Col lg={3} sm={12} className="col-tentang-kami mb-5">
            <img src={ceo} alt="ceo-png" className="ceo-img" />
          </Col>
          <Col lg={6} sm={12} className="mb-5">
            <Row>
              <Col md={12}>
                <h3>SAMBUTAN CEO</h3>
                <h4>
                  <b>PT TUNAS AMANAH MANDIRI</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <img
                  src={bismillah}
                  alt="bismillah"
                  className="bismillah-img"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="tentang-kami-textp">
                <p>Assalamu'alaikum warahmatullahi wabarakatuh</p>
                <p>
                  Alhamdulillahi rabbil'alamiin. Puji syukur kehadirat Allah
                  yang maha suci dan maha agung yang senantiasa memberikan
                  kesehatan keberkahan dan kesejahteraan untuk kita semua.
                  Senantiasa berterima kasih dan berdoa kepada kedua orangtua
                  kita yang telah mendidik, membesarkan kita semoga beliau
                  diberikan kesenangan ibadah dan kesejahteraan dunia dan
                  akherat Salam istimewa untuk semua sahabat kami yang tercinta
                  “luar biasa“ keajaiban datang setiap detik dalam diri dan
                  hidup kita, Kami hadir berusaha membantu menemukan permata
                  istimewa yang ada pada setiap diri kita dan selalu berfikir
                  positif dan kreatif sehingga menjadi hamba Tuhan yang amanah,
                  istiqomah berguna dan berbagi untuk sesama. Semoga Allah SWT
                  meridhoi dan memberikan kekuatan kepada kita semua untuk tetap
                  semangat dalam menjalankan amanah ini dan diberkahi dari
                  setiap hasil usaha yang kita lakukan. Aamiin.
                </p>
                <p>Wassalamu'alaiku warahmatullahi wabarakatuh</p>
                <p>Salam berkah, bahagia, sukses, sejahtera, dan mulia</p>
                <p>H.M HERU</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
