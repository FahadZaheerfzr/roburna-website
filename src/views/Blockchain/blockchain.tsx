import blockchain from "../../Assets/images/blockchain.png";
import yellowLeaf from "../../Assets/images/yellow-leaf.png";
import infoplant from "../../Assets/images/blockchain-infoplant.png";
import treebg from "../../Assets/images/bg-tree.png";
import phase1 from "../../Assets/images/1.png";
import phase2 from "../../Assets/images/2.png";
import phase3 from "../../Assets/images/3.png";
import phase4 from "../../Assets/images/4.png";
import grleaf from "../../Assets/images/gradient-leaf.png";
import planthand from "../../Assets/images/plant-hand.png";
import flinkedin from "../../Assets/images/founder-linkedin.png";
import founder from "../../Assets/images/founder.png";
import chev from "../../Assets/images/chev-down.png";
import { NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import { fetchRoadmapData } from "utils/api_Helper";
import "./blockchain.css";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";

type Roadmap = {
  id: number;
  title: string;
  content: string;
  completed: string;
};

export function Blockchain() {
  const [roadmapContent, setRoadmapContent] = useState<Roadmap[]>([]);

  useEffect(() => {
    const loadRoadmap = async () => {
      try {
        const { data } = await fetchRoadmapData();
        setRoadmapContent(data);
        console.log(data, "roadmap");
      } catch (err) {
        console.log(err);
      }
    };

    loadRoadmap();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="blockchain">
      <Helmet>
        <title>Roburna - Blockchain</title>
        <meta
          name="description"
          content="Roburna uses frictionless earning and elastic validation to introduce the Proof-of-Earn (PoE) and Delegated-Proof-of-Earn (DPoE) consensus mechanisms."
        />
        <meta
          property="og:image"
          content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png"
        />
      </Helmet>
      <div className="blockchain-tophalf">
        <section className="alt-banner d-flex align-items-center">
          <img src={treebg} alt={treebg} className="treebg" />
          <img className="yellowleaf" src={yellowLeaf} />
          <img className="planthand" src={planthand} />

          <div className="flex flex-col justify-center items-center text-center lg:w-[45%] px-10">
            <img className="w-[30%]" src={blockchain} alt={blockchain} />
            <h2 className="px-md-5 xl:text-[32px] lg:text-[28px]">
              The Proof-of-Earn consensus mechanism: the fair way of running a
              blockchain
            </h2>
            <p className="xl:text-[16px] lg:text-[12px]">
              Roburna uses frictionless earning and elastic validation to
              introduce the Proof-of-Earn (PoE) and Delegated-Proof-of-Earn
              (DPoE) consensus mechanisms. Everyone holding RBA will earn
              dividends on blockchain transactions and stands a fair chance of
              becoming a validator. This principle organically positions
              long-term holders to earn rewards, simply by holding and
              interacting with the RBA tokens.
              <br />
              <br />
              Through DpoE, holders can pool resources to become Roburna
              blockchain validators and share validation rewards, thus opening
              up the network even more towards smaller participants. To prevent
              abuse from large numbers of participants, contribution limits will
              be imposed.
            </p>
            <NavLink to="/whitepaper" className="--btn-1" style={{ zIndex: 1 }}>
              ROBURNA Whitepaper
            </NavLink>
            <a className="blockchain-scroll" href="#blockchain">
              <img src={chev} />
            </a>
          </div>
        </section>
        <section className="gitbook-link">
          <div className="text-center">
            <h2 className="mb-5">
              Check out the technical specifications of the <br /> network and
              related protocols.
            </h2>
            <a href="https://roburna-dev-document.gitbook.io/roburna-dev-docs/">
              <button className="--btn-1">READ MORE</button>
            </a>
          </div>
        </section>
        <section id="blockchain" className="home-info-sec p-md-5 pb-md-0 p-4 ">
          <img src={treebg} alt={treebg} className="treebg" />
          <div className="row p-lg-5 pb-lg-0">
            <div className="col-md-6 col-12">
              <div className="info-card ">
                <div className="row">
                  <div className="col-lg-4">
                    <img className="infoplant" src={infoplant} />
                  </div>
                  <div className="col-lg-8 col-12  d-flex flex-column justify-content-center align-items-center text-center gap-30">
                    <span>ROBURNA BLOCKCHAIN</span>
                    <h2>
                      Become a<br />
                      Roburna Validator
                    </h2>
                    <p>
                      Validators are actors on the network that validate
                      transactions from our Blockchain and sub-chains. They have
                      a specific role in the consensus protocol, which is to
                      ensure that all nodes agree on which blocks get added to
                      the chain. Validators make sure that no malicious actors
                      try to manipulate any of the data being written to our
                      Blockchain or sub-chains by using malicious actions such
                      as double-spending.
                      <br />
                      <br />
                      The more validators and long-term holders there are, the
                      stronger our system becomes.
                    </p>
                    <button className="--btn-1 mt-auto " disabled>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="info-card card2">
                <div className="row h-full ">
                  <div className="col-lg-8 col-12  flex flex-col justify-content-center align-items-center text-center gap-30 relative">
                    <span>ROBURNA BLOCKCHAIN</span>
                    <h2>
                      Blockchain
                      <br />
                      as a Service
                    </h2>
                    <p>
                      Our methodology of doing business also incorporates the
                      construction of sub-chains for third parties, which can be
                      businesses operating in a variety of industries, including
                      e-commerce, agriculture, healthcare, manufacturing, and so
                      on. You just need to have an idea in order for us to bring
                      blockchain technology to your company and assist your
                      operations with our cutting-edge technology.
                      <br />
                      <br />
                      All you need is an idea. Get creative with your processes,
                      we do the heavy-lifting!
                    </p>
                    <button className="--btn-1 mt-auto" disabled>
                      Learn More
                    </button>
                    <img className="infoplant2" src={infoplant} />
                  </div>
                  <div className="col-lg-4 mobile-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="blockchain-bothalf">
        <section className="phases-sec flex-column justify-content-center align-items-center">
          <div className="">
            <h1 className="special-heading">Roburna Ecosystem Roadmap</h1>
            <Carousel responsive={responsive} infinite arrows={true} autoPlay>
              {roadmapContent.map((phase, index) => (
                <div
                  key={phase.id}
                  className="items-center justify-center flex"
                >
                  <div className="phase-card relative flex lg:flex-row flex-col justify-start py-14  border-4 border-[#6d7a41] w-full h-max lg:h-auto lg:w-1/2 rounded">
                    <img src={grleaf} className="absolute top-[-10px] z-10" />
                    {/* image according to index dynamically */}
                    {index === 0 && (
                      <img
                        src={phase1}
                        className="lg:w-auto w-[100px] md:w-[200px] h-[200px] lg:mt-10"
                      />
                    )}
                    {index === 1 && (
                      <img
                        src={phase2}
                        className="lg:w-auto w-[100px] md:w-[200px] h-[200px] lg:mt-10"
                      />
                    )}
                    {index === 2 && (
                      <img
                        src={phase3}
                        className="lg:w-auto w-[100px] md:w-[200px] h-[200px] lg:mt-10"
                      />
                    )}
                    {index === 3 && (
                      <img
                        src={phase4}
                        className="lg:w-auto w-[100px] md:w-[200px] h-[200px] lg:mt-10"
                      />
                    )}
                    <span className="flex flex-col  lg:mt-10 w-full text-center ">
                      <h2>{phase.title}</h2>
                      <div
                        className="text-[12px] xl:text-[20px]"
                        dangerouslySetInnerHTML={{ __html: phase.content }}
                      />
                      <h5
                        className={
                          phase.completed === "1"
                            ? "gradient-color completed"
                            : "gradient-color in-progress"
                        }
                      >
                        {/* {phase.completed === "1" ? "Completed" : "In Progress"} */}
                      </h5>
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="founder-wrap">
            <h1 className="special-heading">Founder</h1>
            <div className="founder-row row">
              <div className="col-md-8 d-flex flex-column justify-content-center align-items-center gap-30 text-center px-15 order1 pb-5">
                <span>FOUNDER</span>
                <h2>Lars Fabricius</h2>
                <p>
                  Lars has been an IT developer and entrepreneur for over 15
                  years, working with many well known American and European
                  companies. He has been involved with blockchain technology for
                  a decade, with 5 years experience in Solidity development.
                  Blockchain is groundbreaking technology with almost endless
                  applications, and Lars aspires to bring about lasting change
                  through his projects.
                </p>
                <div className="flex-row justify-content-center align-items-center gap-30 ">
                  <a
                    href="https://www.linkedin.com/in/lars-fabricius/"
                    target="_blank"
                  >
                    <img src={flinkedin} width="54px" height="54px" />
                  </a>
                  <a
                    href="https://twitter.com/Lars_Roburna"
                    target="_blank"
                    className="text-success"
                  >
                    <FaXTwitter size={54} />
                  </a>
                </div>
              </div>
              <div className="col-md-4 p-0 order2">
                <img className="founder-image" src={founder} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
