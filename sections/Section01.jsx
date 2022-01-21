import React from "react";
import { Card, CardContent, CardHeader } from "../components/Cards/Card";
import Satellite from "../images/satellite.png";
import Plane from "../images/aero.png";
import Mic from "../images/mic.png";
import Cog from "../images/cog.png";
import Image from "next/image";
function Section01() {
  return (
    <section className="section-01 category">
      <div className="container">
        <p>CATEGORY</p>
        <h1 className="section-heading"> We Offer Best Services</h1>

        <div className="grid">
          <Card data-aos="fade-up">
            <CardHeader>
              <div className="category-image">
                {" "}
                <Image alt="card image 01" src={Satellite} />
              </div>
            </CardHeader>
            <CardContent>
              <h4>Calculated Weather</h4>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </CardContent>
          </Card>
          <Card data-aos="fade-up">
            <CardHeader>
              <div className="category-image">
                {" "}
                <Image alt="card image 01" src={Plane} />
              </div>
            </CardHeader>
            <CardContent>
              <h4>Best Flights</h4>
              <p>Engrossed listening. Park gate sell they west hard for the.</p>
            </CardContent>
          </Card>
          <Card data-aos="fade-up">
            <CardHeader>
              <div className="category-image">
                {" "}
                <Image alt="card image 01" src={Mic} />
              </div>
            </CardHeader>
            <CardContent>
              <h4>Local Events</h4>
              <p>
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.{" "}
              </p>
            </CardContent>
          </Card>
          <Card data-aos="fade-up">
            <CardHeader>
              <div className="category-image">
                {" "}
                <Image alt="card image 01" src={Cog} />
              </div>
            </CardHeader>
            <CardContent>
              <h4>Customization</h4>
              <p>
                We deliver outsourced aviation services for military customers
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Section01;
