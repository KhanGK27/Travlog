import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroImg03 from '../assets/images/hero-img03.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png'
import experienceImg from "../assets/images/experience.png";

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';


const Home = () => {
  return (<>
    {/*section start*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center ">
                <Subtitle subtitle={'Explore the world!'} alt=""/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Đi đến {" "}<span
                className="highlight"> Những điểm đến hàng dầu </span>
                trên thế giới</h1>
              <p>
              Chúng tôi luôn mong muốn cho khách hàng sự hài lòng khi mang đến
              nhiều sự lựa chọn tốt
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <img src={heroImg03} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle"> Dịch vụ </h5>
            <h2 className="services__title">Cung cấp những dịch vụ tốt nhất</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/*featured tour*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h5 className="services__subtitle"> Những điểm đến hàng đầu</h5>
            <h2 className="featured__tour-title"> Khám phá điểm đến hàng đầu</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    {/*trải nghiệm*/}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <h5 className="services__subtitle"> Địa điểm du lịch</h5>

              <h2>
                Chúng tôi sẽ giúp bạn tìm <br /> những địa điểm tuyệt vời nhất.
              </h2>
              <p>
                Hàng ngàn chuyến đi đang chờ đợi bạn.
                <br />
                Hãy để chúng tôi đưa bạn đến những nơi đẹp nhất thế giới.
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>500+</span>
                <h6>Gói kỳ nghỉ</h6>
              </div>
              <div className="counter__box">
                <span>100</span>
                <h6>Khách sạn sang trọng</h6>
              </div>
              <div className="counter__box">
                <span>7</span>
                <h6>Hãng hàng không cao cấp</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Sự hài lòng của khách hàng</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
  );
};

export default Home