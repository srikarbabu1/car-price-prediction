import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Car Rent Service</h2>
              <p className="section__description">
                At our Car Rent Service, we aim to provide you with a
                hassle-free and convenient way to rent a car for your
                transportation needs. Whether you're traveling for business or
                leisure, our service is designed to cater to your specific
                requirements.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Wide Range of
                  Vehicles: We offer a diverse fleet of vehicles to choose from.
                  Our extensive selection ensures that you can find the perfect
                  vehicle that suits your preferences, group size, and budget.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Flexible Rental
                  Options: We understand that every customer has unique needs
                  when it comes to car rentals. That's why we provide flexible
                  rental options, including short-term and long-term rentals.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Convenient Pick-up and
                  Drop-off: We offer convenient pick-up and drop-off locations,
                  including major airports, city centers, and other popular
                  destinations.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Competitive Pricing:
                  We offer competitive rental rates that provide excellent value
                  for money.We believe in providing affordable options without
                  compromising on the quality and reliability of our vehicles.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
