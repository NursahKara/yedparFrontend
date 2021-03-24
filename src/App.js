/* eslint-disable */
import agno from './images/agco.png';
import car from './images/car.png';
import eng from './images/eng.png';
import ara from './images/ara.png';
import frendiski1 from './images/frendiski1.png';
import frendiski2 from './images/frendiski2.png';
import frendiski3 from './images/frendiski3.png';
import frendiski4 from './images/frendiski4.png';
import frendiski5 from './images/frendiski5.png';
import frendiski6 from './images/frendiski6.png';
import frendiski7 from './images/frendiski7.png';
import frendiski8 from './images/frendiski8.png';
import frendiski9 from './images/frendiski9.png';
import frendiski10 from './images/frendiski10.png';
import frendiski11 from './images/frendiski11.png';
import frendiski12 from './images/frendiski12.png';
import frendiski13 from './images/frendiski13.png';
import kilit from './images/kilit.png';
import sol from './images/sol.png';
import sag from './images/saf.png';
import a from './images/1.png';
import b from './images/2.png';
import c from './images/3.png';
import d from './images/4.png';
import e from './images/5.png';
import f from './images/6.png';
import g from './images/7.png';
import h from './images/8.png';
import j from './images/9.png';
import k from './images/10.png';
import l from './images/11.png';
import m from './images/12.png';
import n from './images/13.png';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.png';
import map from './images/map.png';
import ok from './images/ok.png';
import right from './images/right.png';
import sagok from './images/sag-ok.png';
import solok from './images/sol-ok.png';
import tractor from './images/traktor.png';
import tractor2 from './images/traktor2.png';
import tractor2_ from './images/traktor2_.png';
import unlem from './images/unlem.png';
import valeo from './images/valeo.png';
import yedparlogo from './images/yedpar-logo.png';
import yedpar2 from './images/yedpar2.png';
import visa from './images/visa.png';
import google from './images/google.png';
import guvenlialisveris from './images/guvenlialisveris.png';
import appstore from './images/appstore.png';
import yuvarlak from './images/yuvarlak.png';
import yuzde from './images/yuzde.png';
import yeni from './images/yeni.png';
import facebook from './images/facebook.jpg';
import insta from './images/insta.jpg';
import twitter from './images/twitter.jpg';
import facebook2 from './images/facebook2.png';
import insta2 from './images/insta2.png';
import twitter2 from './images/twitter2.png';
import styles from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Navbar, Nav, FormControl, Container, Col, Row, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div class="row" style={{ backgroundColor: '#df0023' }}>
        <div class="container col-8"  >
          <div style={{ color: 'white', marginTop: 10 }} >
            <Row style={{ justifyContent: 'center' }}>
              <Col><p> EVERYTHING THAT MAKES A TRACTOR MOVE'</p></Col>
              <Col lg={2}></Col>
              <Col>
                <Row>
                  <div class="col-2">
                    <Row>
                      <img src={eng} width="30" height="15" style={{ marginRight: 5, marginTop: 5 }} />
                      <p style={{}}>ENG</p>
                    </Row>
                  </div>
                  <div class="col-2">
                    <p>$7,3705</p>
                  </div>
                  <div class="col-2">
                    <p>$7,3705</p>
                  </div>
                  <div class="col-4 " style={{ paddingLeft: 80, paddingTop: 5 }}>
                    <Row>
                      <div style={{ borderLeft: '1px solid white', height: 55, marginRight: 20, marginTop: -20 }}></div>
                      <img class="mx-2" src={insta2} width="15" height="15" />
                      <img class="mx-2" src={facebook2} width="15" height="15" />
                      <img class="mx-1" src={twitter2} width="15" height="15" />
                    </Row>
                  </div>
                </Row>
              </Col>
            </Row>
            <div style={{ border: '0.5px solid white' }}></div>
            <div class="row mt-4 mb-3">
              <div class="col-2">
                <img src={yedparlogo} class="navbar-brand" width="150" height="50" />
              </div>
              <div class="col-7">
                <form class="form-inline">
                  <div class="input-group">
                    <div class="form-group has-search" >
                      <input type="text" class="form-control" placeholder="ürün, marka, model, oem  ara..." style={{ borderRadius: 50, width: 700, height: 45 }} />
                      <span class="form-control-feedback">
                        <Row>
                          <img src={ara} height="45" style={{ marginLeft: -40, borderLeft: '1px solid gray' }} />
                        </Row>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div style={{}}>
                <form class="form-inline">
                  <button style={{ height: 45, width: 200, backgroundColor: 'white', borderRadius: 50, marginLeft: -20 }} class="form-control mr-sm-2">
                    <Row>
                      <Col >
                        <p>Giriş Yap</p>
                      </Col>
                      <Col>
                        <img src={kilit} height="35" style={{ borderLeft: '1px solid gray', paddingLeft: 15 }} />
                      </Col>
                    </Row>
                  </button>
                </form>
              </div>
              <div style={{}}>
                <form class="form-inline">
                  <button style={{ height: 45, width: 100, backgroundColor: 'white', borderRadius: 50, marginLeft: 20 }} class="form-control mr-sm-2">
                    <Row>
                      <Col md={4} >
                        <span style={{ height: 35, paddingTop: 10 }} class="badge badge-pill badge-danger">125</span>
                      </Col>
                      <Col md={2}>
                        <img src={tractor} height="25" style={{ borderLeft: '1px solid gray', paddingLeft: 10, marginLeft: 10 }} />
                      </Col>
                    </Row>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid black', fontSize: '8pt', fontWeight: 'bold' }}>
        <ul class="nav justify-content-center">
          <li class="nav-item px-3">
            <Row>
              <img src={tractor2} width="50" height="30" style={{ marginTop: 8 }} />
              <Nav.Link class="nav-link" style={{ color: 'black', marginTop: 8 }} href="#">
                Anasayfa
            </Nav.Link>
              <div style={{ borderRight: '1px solid black', height: 30, marginTop: 8, marginBottom: 8 }}></div>
            </Row>
          </li>
          <li class="nav-item px-3">
            <Row>
              <Nav.Link class="nav-link" style={{ color: 'black', marginTop: 8 }} href="#">
                Ürün Arama
            </Nav.Link>
              <div style={{ borderRight: '1px solid black', height: 30, marginTop: 8, marginBottom: 8 }}></div>
            </Row>
          </li>
          <li class="nav-item px-3">
            <Row>
              <Nav.Link class="nav-link" style={{ color: 'black', marginTop: 8 }} href="#">
                Hakkımızda
            </Nav.Link>
              <div style={{ borderRight: '1px solid black', height: 30, marginTop: 8, marginBottom: 8 }}></div>
            </Row>
          </li>
          <li class="nav-item px-3">
            <Row>
              <img src={yeni} width="25" height="25" style={{ marginTop: 8, marginLeft: -2 }} />
              <Nav.Link class="nav-link" style={{ color: 'black', marginTop: 8 }} href="#">
                Yeni Ürünler
            </Nav.Link>
              <div style={{ borderRight: '1px solid black', height: 30, marginTop: 8, marginBottom: 8 }}></div>
            </Row>
          </li>
          <li class="nav-item px-3">

            <Row>
              <img src={yuzde} width="25" height="25" style={{ marginTop: 8, marginLeft: -2 }} />
              <Nav.Link class="nav-link" style={{ color: 'black', marginTop: 8 }} href="#">
                İndirim
            </Nav.Link>
              <div style={{ borderRight: '1px solid black', height: 30, marginTop: 8, marginBottom: 8 }}></div>
            </Row>
          </li>
          <li class="nav-item px-3">
            <Row>
              <img src={unlem} width="25" height="25" style={{ marginTop: 8, marginLeft: -2 }} />
              <Nav.Link class="nav-link" style={{ color: 'black', marginTop: 8 }} href="#">
                Fırsat Ürünleri
            </Nav.Link>
              <div style={{ borderRight: '1px solid black', height: 30, marginTop: 8, marginBottom: 8 }}></div>
            </Row>
          </li>
          <li class="nav-item px-3">
            <Row>
              <Nav.Link class="nav-link" style={{ color: 'black', marginTop: 8 }} href="#">
                İletişim
            </Nav.Link>
            </Row>
          </li>
        </ul>
      </div>
      <div class="container" style={{ marginTop: 5 }}>
        <div style={{ backgroundColor: '#ebebeb', borderRadius: 10 }}>
          <Row>
            <div class="col-md-3" style={{ padding: 10 }}>
              <div class="col-md-12" style={{ backgroundColor: 'white', borderRadius: 10, marginLeft: 10, paddingBottom: 10 }}>
                <p style={{ textAlign: 'center', paddingTop: 15, fontSize: 20, fontWeight: 500 }}>Markalar</p>
                <p style={{ border: '0.5px solid black' }}></p>
                <Row >
                  <div class="col-md-3">
                    <img alt="" src={logo1} width="25" height="25" />
                  </div>
                  <div class="col-md-7 text-nowrap">
                    Massey Ferguson
                </div>
                  <div class="col-md-2 px-3" style={{ paddingBottom: 5 }}>
                    <img alt="" src={ok} width="15" height="15" />
                  </div>
                </Row>
                <p style={{ border: '0.5px solid gray' }}></p>
                <Row >
                  <div class="col-md-3">
                    <img alt="" src={logo2} width="25" height="25" />
                  </div>
                  <div class="col-md-7 text-nowrap">
                    New Holland
                </div>
                  <div class="col-md-2">
                    <img alt="" src={ok} width="15" height="15" />
                  </div>
                </Row>
                <p style={{ border: '0.5px solid gray' }}></p>
                <Row >
                  <div class="col-md-3">
                    <img alt="" src={logo3} width="25" height="25" />
                  </div>
                  <div class="col-md-7 text-nowrap">
                    Fiat
                </div>
                  <div class="col-md-2">
                    <img alt="" src={ok} width="15" height="15" />
                  </div>
                </Row>
                <p style={{ border: '0.5px solid gray' }}></p>
                <Row >
                  <div class="col-md-3">
                    <img alt="" src={logo4} width="25" height="25" />
                  </div>
                  <div class="col-md-7 text-nowrap">
                    Ford
                </div>
                  <div class="col-md-2">
                    <img alt="" src={ok} width="15" height="15" />
                  </div>
                </Row>
                <p style={{ border: '0.5px solid gray' }}></p>
                <Row >
                  <div class="col-md-3">
                    <img alt="" src={logo5} width="25" height="25" />
                  </div>
                  <div class="col-md-7 text-nowrap">
                    Same
                </div>
                  <div class="col-md-2">
                    <img alt="" src={ok} width="15" height="15" />
                  </div>
                </Row>
                <p style={{ border: '0.5px solid gray' }}></p>
                <Row >
                  <div class="col-md-3">
                    <img alt="" src={logo6} width="25" height="25" />
                  </div>
                  <div class="col-md-7 text-nowrap">
                    John Deere
                </div>
                  <div class="col-md-2">
                    <img alt="" src={ok} width="15" height="15" />
                  </div>
                </Row>
                <p style={{ border: '0.5px solid gray' }}></p>
                <Row >
                  <div class="col-md-3">
                    <img alt="" src={logo7} width="25" height="25" />
                  </div>
                  <div class="col-md-7 text-nowrap">
                    Tümosan
                </div>
                  <div class="col-md-2">
                    <img alt="" src={ok} width="15" height="15" />
                  </div>
                </Row>
                <p style={{ border: '0.5px solid gray' }}></p>
              </div>
            </div>
            <div class="col-md-6" style={{ padding: 10 }} >
              <div class="col-md-12" style={{ backgroundColor: 'white', borderRadius: 10, height: 400, }}>
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src={car}
                      alt="First slide"
                      height="380"
                      style={{ marginTop: 10 }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src={car}
                      alt="Second slide"
                      height="380"
                      style={{ marginTop: 10 }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={car}
                      alt="Third slide"
                      height="380"
                      style={{ marginTop: 10 }}
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src={car}
                      alt="Second slide"
                      height="380"
                      style={{ marginTop: 10 }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={car}
                      alt="Third slide"
                      height="380"
                      style={{ marginTop: 10 }}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div class="col-md-3" style={{ padding: 10 }} >
              <div class="col-md-12" style={{ backgroundColor: 'white', borderRadius: 10, marginLeft: -10 }}>
                <div style={{ backgroundColor: '#fff', borderRadius: 5 }}>
                  <div>
                    <Row>
                      <img src={unlem} width="60" height="60" style={{ marginLeft: 5, marginTop: 5 }} />
                      <div style={{ marginTop: 30, marginLeft: -10 }}><p style={{ fontSize: 22, fontWeight: 500 }}> Günün Fırsatları</p></div>
                    </Row>
                  </div>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                    <img src={yuvarlak} width="80%" style={{ marginLeft: 15, marginTop: 15 }} />
                  </div>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                    <p style={{ fontWeight: 700, fontSize: 18 }}>MF 240 Fren Diski</p>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -15 }}>
                      <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                      <p style={{ fontSize: 16 }}>3578965 </p>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -15 }}>
                      <p style={{ fontWeight: 500, fontSize: 24, color: 'red' }}>2,750 TL &nbsp; </p>
                      <del style={{ fontSize: 16, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                        <img src={tractor} width="30" height="30" />
                      </div>
                      <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 20, marginLeft: -5, marginBottom: 20 }}>
                        <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 16, fontWeight: 500 }}>Sepete Ekle</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
      <div class="container">
        <Row>
          <div class="col-md-6 text-nowrap " style={{ color: 'gray', fontWeight: 'bold', fontSize: 19, paddingTop: 10 }}>
            <p>THE MAJOR SUPPLIER OF TRACTOR SPARE PARTS IN TURKEY</p>
          </div>
          <div class="col-md-6 text-nowrap" style={{ color: 'gray', fontWeight: 500, fontSize: 19, paddingTop: 10 }}>
            TÜRKİYE’NİN EN BÜYÜK TRAK TÖR YEDEK PARÇA TEDARİKÇİSİ
        </div>
        </Row>
      </div>
      <div class="container">
        <Row>
          <div class="col-md-3" >
            <div style={{ backgroundColor: '#f5f5f5', height: 100, borderRadius: 5 }}>
              <img alt="" src={agno} height="90" />
            </div>
          </div>
          <div class="col-md-3" style={{ borderLeft: '1px solid black', height: 100 }} >
            <div style={{ backgroundColor: '#f5f5f5', height: 100, borderRadius: 5 }}>
              <img alt="" src={valeo} height="90" />
            </div>
          </div>
          <div class="col-md-3" >
            <div style={{ backgroundColor: '#f5f5f5', height: 100, borderRadius: 5 }}>
              <Row>
                <div style={{ borderRight: '1px solid black', height: 100 }}></div>
              </Row>
            </div>
          </div>
          <div class="col-md-3" >
            <div style={{ backgroundColor: '#f5f5f5', height: 100, borderRadius: 5 }}>
              <Row>
                <div style={{ borderRight: '1px solid black', height: 100 }}></div>
              </Row>
            </div>
          </div>
        </Row>
      </div>
      <div class="container">
        <div class="col-md-12 my-3" style={{ backgroundColor: '#f5f5f5', height: 420 }}>
          <Row>
            <img src={yuzde} height="30" style={{ marginTop: 3 }} />
            <p style={{ marginTop: 8, fontSize: 18, fontWeight: 500, marginLeft: 10 }}>İndirimli Ürünler</p>
            <div style={{ border: '0.5px solid gray', width: 900, height: 0.1, marginTop: 28 }}></div>
          </Row>
          <Row style={{ marginRight: 8 }}>
            <div style={{ flex: 0.4, marginTop: 145 }} >
              <img src={solok} width="30" height="30" />
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }}>
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>

                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski1} width="70%" style={{ marginLeft: 25, marginTop: 5 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }} >
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski2} width="70%" style={{ marginLeft: 25, marginTop: 20 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }} >
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski3} width="70%" style={{ marginLeft: 25, marginTop: 5 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }} >
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski4} width="70%" style={{ marginLeft: 25, marginTop: 30 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 0.4, marginRight: -30, marginTop: 145 }}>
              <img src={sagok} width="30" height="30" />
            </div>
          </Row>
        </div>
      </div>
      <div class="col-md-12" style={{ backgroundColor: '#ebebeb', paddingTop: 3, paddingBottom: 3, }}>
        <div class="container">
          <div class="col-md-12 my-3" style={{ backgroundColor: '#f5f5f5', marginBottom: 10 }}>
            <Row>
              <img src={unlem} height="30" style={{ marginTop: 3 }} />
              <p style={{ marginTop: 8, fontSize: 18, fontWeight: 500, marginLeft: 10 }}>Fırsat Ürünleri</p>
              <div style={{ border: '0.5px solid gray', width: 910, height: 0.1, marginTop: 28 }}></div>
            </Row>
            <Row style={{ marginRight: 8 }}>
              <div style={{ flex: 0.4, marginTop: 340 }} >
                <img src={solok} width="30" height="30" />
              </div>
              <div style={{ flex: 5, marginRight: 10 }}>
                <div style={{ backgroundColor: '#fff', borderRadius: 5, paddingTop: 20 }}>

                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 373, paddingBottom: 10 }}>
                    <img src={frendiski5} width="80%" style={{ marginLeft: 40, marginTop: 20 }} />
                  </div>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                    <p style={{ fontWeight: 500, fontSize: 40 }}>MF 240 Fren Diski</p>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                      <p style={{ fontWeight: 500, fontSize: 28 }}>OEM &nbsp; </p>
                      <p style={{ fontSize: 28 }}>3578965 </p>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                      <p style={{ fontWeight: 500, fontSize: 52, color: 'red' }}>2,750 TL &nbsp; </p>
                      <del style={{ fontSize: 34, marginTop: 20, marginLeft: 50 }}>3,000 TL </del>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                      <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 40, paddingRight: 40 }}>
                        <img src={tractor} width="50" height="50" />
                      </div>
                      <div style={{ borderRadius: 15, backgroundColor: 'orange', color: "white", paddingLeft: 55, paddingRight: 55, marginLeft: -10 }}>
                        <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 30, fontWeight: 500 }}>Sepete Ekle</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div style={{ flex: 2.5, marginRight: 10, marginBottom: 20 }} >
                <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                    <img src={frendiski10} width="60%" style={{ marginLeft: 35, marginTop: 5 }} />
                  </div>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                    <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                      <p style={{ fontSize: 16 }}>3578965 </p>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                      <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10, marginBottom: 10 }}>
                      <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                        <img src={tractor} width="30" height="30" />
                      </div>
                      <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5, }}>
                        <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                      </div>
                    </Row>
                  </div>
                </div>
                <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20, marginTop: 10 }}>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                    <img src={frendiski11} width="60%" style={{ marginLeft: 35, marginTop: 7 }} />
                  </div>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                    <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                      <p style={{ fontSize: 16 }}>3578965 </p>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                      <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                        <img src={tractor} width="30" height="30" />
                      </div>
                      <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                        <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div style={{ flex: 2.5, marginRight: 10 }} >
                <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                    <img src={frendiski12} width="70%" style={{ marginLeft: 25, marginTop: 10 }} />
                  </div>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                    <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                      <p style={{ fontSize: 16 }}>3578965 </p>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                      <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                        <img src={tractor} width="30" height="30" />
                      </div>
                      <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                        <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                      </div>
                    </Row>
                  </div>
                </div>
                <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20, marginTop: 10 }}>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                    <img src={frendiski13} width="80%" style={{ marginLeft: 15, marginTop: 15 }} />
                  </div>
                  <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                    <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                      <p style={{ fontSize: 16 }}>3578965 </p>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                      <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                    </Row>
                  </div>
                  <div>
                    <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                      <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                        <img src={tractor} width="30" height="30" />
                      </div>
                      <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                        <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
              <div style={{ flex: 0.4, marginRight: -30, marginTop: 340 }}>
                <img src={sagok} width="30" height="30" />
              </div>
            </Row>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col-md-12 my-3" style={{ backgroundColor: '#f5f5f5', height: 420 }}>
          <Row>
            <img src={yeni} height="30" style={{ marginTop: 3 }} />
            <p style={{ marginTop: 8, fontSize: 18, fontWeight: 500, marginLeft: 10 }}>Yeni Ürünler</p>
            <div style={{ border: '0.5px solid gray', width: 925, height: 0.1, marginTop: 28 }}></div>
          </Row>
          <Row style={{ marginRight: 8 }}>
            <div style={{ flex: 0.4, marginTop: 145 }} >
              <img src={solok} width="30" height="30" />
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }}>
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>

                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski6} width="70%" style={{ marginLeft: 25, marginTop: 5 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }} >
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski7} width="70%" style={{ marginLeft: 25, marginTop: 20 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }} >
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski8} width="70%" style={{ marginLeft: 25, marginTop: 5 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 2.5, marginRight: 10 }} >
              <div style={{ backgroundColor: '#fff', height: 350, borderRadius: 5, paddingTop: 20 }}>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid gray', borderRadius: 10, height: 150 }}>
                  <img src={frendiski9} width="70%" style={{ marginLeft: 25, marginTop: 10 }} />
                </div>
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>MF 240 Fren Diski</p>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 16 }}>OEM &nbsp; </p>
                    <p style={{ fontSize: 16 }}>3578965 </p>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <p style={{ fontWeight: 500, fontSize: 26, color: 'red' }}>2,750 TL &nbsp; </p>
                    <del style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>3,000 TL </del>
                  </Row>
                </div>
                <div>
                  <Row style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                    <div style={{ border: '0.1px solid gray', borderRadius: 5, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}>
                      <img src={tractor} width="30" height="30" />
                    </div>
                    <div style={{ borderRadius: 5, backgroundColor: 'orange', color: "white", paddingLeft: 15, paddingRight: 15, marginLeft: -5 }}>
                      <p style={{ textAlign: 'center', paddingTop: 5, fontSize: 18, fontWeight: 500 }}>Sepete Ekle</p>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <div style={{ flex: 0.4, marginRight: -30, marginTop: 145 }}>
              <img src={sagok} width="30" height="30" />
            </div>
          </Row>
        </div>
      </div>
      <div class="container">
        <Row>
          <div class="col-md-6 text-nowrap " style={{ color: 'gray', fontWeight: 'bold', fontSize: 19, paddingTop: 10 }}>
            <p>THE MAJOR SUPPLIER OF TRACTOR SPARE PARTS IN TURKEY</p>
          </div>
          <div class="col-md-6 text-nowrap" style={{ color: 'gray', fontWeight: 500, fontSize: 19, paddingTop: 10 }}>
            TÜRKİYE’NİN EN BÜYÜK TRAKTÖR YEDEK PARÇA TEDARİKÇİSİ
        </div>
        </Row>
        <div style={{ border: '0.5px solid gray' }}></div>
        <Row>
          <div>
            <img src={sol} width="20" style={{ marginLeft: 10, marginRight: 5 }} />
            <img src={a} width="5%" />
            <img src={b} width="10%" />
            <img src={c} width="10%"/>
            <img src={d} />
            <img src={e} />
            <img src={f} width="7%"/>
            <img src={g} />
            <img src={h} />
            <img src={j} width="7%"/>
            <img src={k} />
            <img src={l} />
            <img src={m} width="7%"/>
            <img src={n} width="7%" />
            <img src={sag} width="20" style={{ marginRight: 10, marginLeft: 5 }} />
          </div>
        </Row>
        <div style={{ border: '0.5px solid gray' }}></div>
      </div>
      <div class="col-md-12" style={{ backgroundColor: '#959595', paddingTop: 3, paddingBottom: 3, marginTop: 10 }}>
        <div class="container">
          <Row style={{ color: 'white' }}>
            <Col><p style={{ marginTop: 10 }}> EVERYTHING THAT MAKES A TRACTOR MOVE'</p></Col>
            <Col lg={1}></Col>
            <Col>
              <Row>
                <div class="col-2">
                  <Row>
                    <img src={eng} width="30" height="15" style={{ marginRight: 5, marginTop: 15 }} />
                    <p style={{ marginTop: 10 }}>ENG</p>
                  </Row>
                </div>
                <div class="col-2">
                  <p style={{ marginTop: 10 }}>$7,3705</p>
                </div>
                <div class="col-2">
                  <p style={{ marginTop: 10 }}>$7,3705</p>
                </div>
                <div class="col-4 " style={{ paddingLeft: 80, paddingTop: 15 }}>
                  <Row>
                    <div style={{ borderLeft: '1px solid white', height: 55, marginRight: 20, marginTop: -20 }}></div>
                    <img class="mx-2" src={insta} width="15" height="15" />
                    <img class="mx-2" src={facebook} width="15" height="15" />
                    <img class="mx-1" src={twitter} width="15" height="15" />
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
          <div style={{ border: '0.5px solid white' }}></div>
          <Row style={{ color: 'white' }}>
            <Col>
              <img src={yedpar2} width="300" height="100" style={{ marginTop: 30, marginBottom: 25 }} />
              <p>
                FERHATPAŞA MAH. G13 SOK. NO 72 KAT 4 <br />
                ATAŞEHİR - İSTANBUL - TÜRKİYE
            </p>
              <p>
                +90 216 471 31 40 PBX <br />
                info@yedpar.com.tr
            </p>
            </Col>
            <Col lg={1}></Col>
            <Col>
              <Row>
                <div class="col-6">
                </div>
                <div class="col-6" style={{ textAlign: 'end' }}>
                  <img alt="" src={guvenlialisveris} width="150" height="40" style={{ marginTop: 10 }} />
                  <img alt="" src={visa} width="150" height="40" style={{ marginTop: 5 }} />
                  <img alt="" src={google} width="150" height="40" style={{ marginTop: 100 }} />
                  <img alt="" src={appstore} width="150" height="40" style={{ marginTop: 5, marginBottom: 10 }} />
                </div>
              </Row>
            </Col>
          </Row>
          <div style={{ border: '0.5px solid white' }}></div>
          <Row style={{ color: 'white' }}>
            <Col lg={3}><p style={{ marginTop: 10 }}>www.yedpar.com.tr</p></Col>
            <Col lg={1}></Col>
            <Col>
              <Row>
                <div class="col-2">
                  <Row>
                    <img src={tractor2_} width="50" height="30" style={{ marginRight: 0, marginTop: 5 }} />
                    <a><p style={{ marginTop: 10, fontSize: 14 }}>Anasayfa</p></a>
                    <div style={{ borderLeft: '1px solid white', height: 50, marginLeft: 20 }}></div>
                  </Row>
                </div>
                <div class="col-2">
                  <Row>
                    <a> <p style={{ marginTop: 10, fontSize: 14 }}>Ürün Arama</p></a>
                    <div style={{ borderLeft: '1px solid white', height: 50, marginLeft: 20 }}></div>
                  </Row>
                </div>
                <div class="col-2">
                  <Row>
                    <a><p style={{ marginTop: 10, fontSize: 14 }}>Hakkımızda</p></a>
                    <div style={{ borderLeft: '1px solid white', height: 50, marginLeft: 20 }}></div>
                  </Row>
                </div>
                <div class="col-2">
                  <Row>
                    <img alt="" src={yeni} width="25" height="25" style={{ marginLeft: -35 }} />
                    <a><p style={{ marginTop: 10, fontSize: 14 }}>Yeni Ürünler</p></a>
                    <div style={{ borderLeft: '1px solid white', height: 50, marginLeft: 30 }}></div>
                  </Row>
                </div>
                <div class="col-2">
                  <Row>
                    <img alt="" src={yuzde} width="25" height="25" style={{ marginLeft: -30 }} />
                    <a><p style={{ marginTop: 10, fontSize: 14 }}>İndirim</p></a>
                    <div style={{ borderLeft: '1px solid white', height: 50, marginLeft: 50 }}></div>
                  </Row>
                </div>
                <div class="col-2">
                  <Row>
                    <img alt="" src={unlem} width="25" height="25" style={{ marginLeft: -35 }} />
                    <a><p style={{ marginTop: 10, fontSize: 14 }}>Fırsat Ürünleri</p></a>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
          <div style={{ border: '0.5px solid white', marginBottom: 40 }}></div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;
