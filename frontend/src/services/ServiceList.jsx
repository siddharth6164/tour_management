import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipis",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function ServiceList() {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
