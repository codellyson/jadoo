import React from "react";
import Car from "../images/vehicle.png";
import Swimming from "../images/swimming.png";
import Box from "../images/connected-box.png";
import HandyWoman from "../images/hands-out-woman.jpg";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../components/Cards/Card";
import { FaBuilding, FaLeaf, FaMap, FaRegHeart } from "react-icons/fa";
import { IoIosNavigate } from "react-icons/io";
function Section03() {
  return (
    <section className="section-03">
      <div className="container">
        <div className="bookings-brief">
          <div className="side-one" data-aos="fade-up">
            <p>Easy and Fast</p>
            <h1>Book your next trip in 3 easy steps</h1>
            <article className="booking-info">
              <Image src={Box} alt="icon" />
              <div className="booking-info-detail">
                <h5> Choose Destination</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </article>
            <article className="booking-info">
              <Image src={Swimming} alt="icon" />
              <div className="booking-info-detail">
                <h5>Make Payment </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </article>
            <article className="booking-info">
              <Image src={Car} alt="icon" />
              <div className="booking-info-detail">
                <h5>Reach Airport on selected Date </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </article>
          </div>
          <div className="side-two" data-aos="fade-up">
            <Card data-aos="zoom-up">
              <CardHeader>
                <Image
                  src={HandyWoman}
                  alt="woman with hands spread out in joy"
                />
              </CardHeader>
              <CardContent>
                <h4>Trip to Greece</h4>
                <p>14-29 June | by Robbin Joseph</p>
                <div className="icons">
                  <span>
                    <FaLeaf />
                  </span>
                  <span>
                    <FaMap />
                  </span>
                  <span>
                    <IoIosNavigate />
                  </span>
                </div>
                <div className="text-block">
                  <p>
                    {" "}
                    <FaBuilding /> <p>24 people going</p>
                  </p>
                  <FaRegHeart />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section03;
