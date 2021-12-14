import React from "react";
import styled from "styled-components";
import logo from "./Images/tam-logo.png";
import instagram from "./Images/instagram.png";
import whatsapp from "./Images/whatsapp.png";
import youtube from "./Images/youtube.png";
import { Row, Col } from "react-bootstrap";

export default function FooterComp() {
  return (
    <FooterContainer className="main-footer mt-5">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4 className="mb-3 text-center"> PT. Tunas Amanah Mandiri</h4>
              <ul className="list-unstyled">
                <li className="mb-2 mt-2 text-center">
                  <img src={logo} alt="logo-footer" className="logo-footer" />
                </li>
                <li className="text-justify mb-2">
                  <i class="fa fa-map-marker me-2"></i>
                  Jl Bintara IX, Bekasi, Jawa Barat 60178
                </li>
                <li className="mb-2">
                  <i class="fa fa-whatsapp me-2"></i>
                  Whatsapp. (0813) 11134200
                </li>
                <li className="mb-2">
                  <i class="fa fa-phone me-2"></i>
                  Telp. (0813) 11134200
                </li>
                <li className="mb-2">
                  <i class="fa fa-envelope me-2"></i>
                  tamconsultl@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="mb-3">Layanan Kami</h4>
              <ul className="ml-4">
                <li className="mb-1">
                  <a href="/">
                    Pengetahuan Produk , Jasa Perbankan & Prinsip Pengenalan
                    Nasabah terkait APU PPT
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/">Motivasi</a>
                </li>
                <li className="mb-1">
                  <a href="/">Hypnosis</a>
                </li>
                <li className="mb-1">
                  <a href="/">Managerial Skills & Leadership Training</a>
                </li>
                <li className="mb-1">
                  <a href="/">Marketing & Selling Strategy</a>
                </li>
                <li className="mb-1">
                  <a href="/">Service Excellence</a>
                </li>
                <li className="mb-1">
                  <a href="/">Outbond Activity</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="mb-3">Tentang Kami</h4>
              <ul className="ml-4">
                <li className="mb-2">
                  <a href="/about">CEO</a>
                </li>
                <li className="mb-2">
                  <a href="/visi">Visi & Misi</a>
                </li>
                <li className="mb-2">
                  <a href="/motto">Motto</a>
                </li>
                <li className="mb-2">
                  <a href="/motto">Nilai Perusahaan</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="mb-3">Sosial Media</h4>
              <Row>
                <Col lg={2} md={3} sm={2} xs={2}>
                  <a href="https://www.instagram.com/tamconsultl/">
                    <img
                      src={instagram}
                      alt="instagram"
                      className="sosmed-footer"
                    />
                  </a>
                </Col>
                <Col lg={2} md={3} sm={2} xs={2}>
                  <a href="https://wa.me/6281311134200">
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      className="sosmed-footer"
                    />
                  </a>
                </Col>
                <Col lg={2} md={3} sm={2} xs={2}>
                  <a href="/">
                    <img
                      src={youtube}
                      alt="youtube"
                      className="sosmed-footer"
                    />
                  </a>
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} PT. Tunas Amanah Mandiri - All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }

  #txtbox {
    font-size: 11pt;
    height: 120px;
    width: 255px;
  }
`;
