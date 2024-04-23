import React from "react";
import yellowLeaf from "../../Assets/images/yellow-leaf.png";
import bgfade from "../../Assets/images/bg-fade.png";
import grleaf from "../../Assets/images/gradient-leaf.png";
import poe1 from "../../Assets/images/roburna-PoE-txval.jpg";
import poe2 from "../../Assets/images/roburna-PoE-blockval.jpg";
import poe3 from "../../Assets/images/roburna-PoE-blockver.jpg";
import baas1 from "../../Assets/images/baas1.jpg";
import baas2 from "../../Assets/images/baas2.jpg";
import { FooterBlog } from "../../Components/FooterBlog";
import chev from "../../Assets/images/chev-down.png";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";
import "../Blockchain/blockchain.css";
import "../Disclaimer/disclaimer.css";
import { Helmet } from "react-helmet";
import { useWhitePaper } from "utils/hooks";
import { isUndefined } from "lodash";
import { whitepaperbannerLAB } from "../../utils/api_Helper";
import { useRef } from "react";

export function Whitepaper() {
  const { WhitePaper, WhitePaperbanner } = useWhitePaper();
  const whitepaperRef = useRef<HTMLDivElement>(null);
  
  const scrollToWhitepaper = () => {
    whitepaperRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="blockchain disclaimer-page">
      <Helmet>
        <title>Roburna - Whitepaper</title>
        <meta
          name="description"
          content="Roburna is a frictionless blockchain project, deploying the first decentralized frictionless yield blockchain currency, through the novel consensus methodologies Proof-of-Earn and Delegated-Proof-of-Earn."
        />
        <meta
          property="og:image"
          content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png"
        />
      </Helmet>
      {!!WhitePaperbanner.length && (
        <section className="alt-banner d-flex align-items-center disclaimer-banner whitepaper-banner">
          <img className="bg-fade" src={bgfade} loading="lazy" />
          <img className="yellowleaf" src={yellowLeaf} loading="lazy" />

          <div className="flex flex-col justify-center items-center text-center lg:w-[40%] px-10">
            <div className="alt-box">
              <img src={grleaf} width="67px" loading="lazy" />
            </div>
            <h2 className="">{WhitePaperbanner[0].title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: WhitePaperbanner[0].description,
              }}
            />
            <a className="--btn-1" href="/roburna-whitepaper.pdf">
              Read Full Whitepaper
            </a>
          </div>
          {/* <a className='blockchain-scroll' href='#whitepaper'><img src={chev} loading="lazy" /></a> */}
        </section>
      )}
      <div
        id="whitepaper"
        className="faq-wrap whitepaper-faq-wrap"
        ref={whitepaperRef}
      >
        <Accordion alwaysOpen>
          {!!WhitePaper.length &&
            WhitePaper.map((faq) => {
              return (
                <Accordion.Item
                  eventKey={faq.id.toString()}
                  className="expand"
                  key={faq.id}
                >
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      className="expand-desc"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
        </Accordion>
        <FooterBlog />
        <br />
        <br />
      </div>
    </div>
  );
}
