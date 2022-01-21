import React from "react";
import { Card, CardContent, CardHeader } from "../components/Cards/Card";
import Rome from "../images/rome.jpg";
import London from "../images/london.jpg";
import Europe from "../images/europe.jpg";
import Image from "next/image";
import { IoMdNavigate } from "react-icons/io";
function Section02() {
  return (
    <section className="section-02 destinations">
      <div className="container">
        <p>TOP SELLING</p>
        <h1 className="section-heading"> Top Destinations</h1>

        <div className="grid">
          <Card data-aos="fade-up">
            <CardHeader>
              <div className="destination-image">
                {" "}
                <Image alt="card image 01" src={Rome} />
              </div>
            </CardHeader>
            <CardContent>
              <h5>
                <span>Rome, Italy</span> <span>$5,42k</span>{" "}
              </h5>
              <p>
                <span>
                  <IoMdNavigate />
                </span>
                <span>10 Days Trip</span>
              </p>
            </CardContent>
          </Card>
          <Card data-aos="fade-up">
            <CardHeader>
              <div className="destination-image">
                {" "}
                <Image alt="card image 01" src={London} />
              </div>
            </CardHeader>
            <CardContent>
              <h5>
                <span>London, UK</span> <span>$4.2k</span>
              </h5>
              <p>
                <span>
                  <IoMdNavigate />
                </span>
                <span>12 Days Trip</span>
              </p>
            </CardContent>
          </Card>
          <Card data-aos="fade-up">
            <CardHeader>
              <div className="destination-image">
                {" "}
                <Image alt="card image 01" src={Europe} />
              </div>
            </CardHeader>
            <CardContent>
              <h5>
                <span>Full Europe</span> <span>$15k</span>
              </h5>
              <p>
                <span>
                  <IoMdNavigate />
                </span>
                <span>14 Days Trip</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Section02;
