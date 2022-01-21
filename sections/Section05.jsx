import React from "react";
import { Card, CardContent } from "../components/Cards/Card";
import Axon from "../images/axon.png";
import Alitalia from "../images/alitalia.png";
import JetStar from "../images/jetstar.png";
import Expedia from "../images/expedia.png";
import Qanta from "../images/qantas.png";
import Image from "next/image";
import TopArrow from "../images/arrow.png";
function Section05() {
  return (
    <section className="section-05 partners">
      <div className="container">
        <div className="row">
          <Card>
            <CardContent>
              <Image alt="partner brand" src={Axon} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image alt="partner brand" src={JetStar} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image alt="partner brand" src={Alitalia} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image alt="partner brand" src={Expedia} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image alt="partner brand" src={Qanta} />
            </CardContent>
          </Card>
        </div>

        {/* subscribe box */}

        <div className="subscription " data-aos="fade-up">
          <article className="subscribe-cta">
            <h1>
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h1>

            <form>
              <input type="text" placeholder="Your email address" />
              <button type="button" className="btn btn-custom">
                Subscribe
              </button>
            </form>
            <div className="top-arrow">
              <Image alt="arrow" src={TopArrow} width={50} height={50} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Section05;
