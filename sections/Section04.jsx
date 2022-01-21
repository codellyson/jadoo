import React from "react";
import Car from "../images/vehicle.png";
import Swimming from "../images/swimming.png";
import Box from "../images/connected-box.png";
import HandyWoman from "../images/hands-out-woman.jpg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/Cards/Card";
import {
  FaBuilding,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaLeaf,
  FaMap,
  FaRegHeart,
} from "react-icons/fa";
import { IoIosNavigate } from "react-icons/io";
import LOL from "../images/lol.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Section04() {
  return (
    <section className="section-04">
      <div className="container">
        <div className="testimonials">
          <div className="side-one">
            <p>TESTIMONIALS</p>
            <h1>What people say about Us.</h1>
          </div>
          <div className="side-two">
            <CarouselProvider
              naturalSlideWidth={300}
              naturalSlideHeight={"100%"}
              totalSlides={4}
              visibleSlides={1}
              step={1}
              infinite={true}
              playDirection="backward"
              isIntrinsicHeight={true}
              isPlaying
            >
              {" "}
              <Slider>
                {[1, 2, 3, 4].map((data) => (
                  <Slide index={data} key={data}>
                    <Card>
                      <CardHeader>
                        <Image src={LOL} alt="testimonies image" />
                      </CardHeader>
                      <CardContent>
                        <p>
                          “On the Windows talking painted pasture yet its
                          express parties use. Sure last upon he same as knew
                          next. Of believed or diverted no.”
                        </p>
                      </CardContent>
                      <CardFooter>
                        <p className="is-bold">Mike taylor</p>
                        <small>Lahore, Pakistan</small>
                      </CardFooter>
                    </Card>
                  </Slide>
                ))}
              </Slider>{" "}
              <ButtonBack className="carousel-btn-back">
                <FaChevronCircleLeft />
              </ButtonBack>
              <ButtonNext className="carousel-btn-forward">
                <FaChevronCircleRight />
              </ButtonNext>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section04;
