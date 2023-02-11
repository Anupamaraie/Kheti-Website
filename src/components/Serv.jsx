import React from "react";
import styled from "styled-components";
import Cardpic1 from "../assets/ecom.png";
import Cardpic2 from "../assets/ai.png";
import Cardpic3 from "../assets/news.png";
import Cardpic4 from "../assets/rg.png";
import Cardpic5 from "../assets/compost.png";
import Cardpic6 from "../assets/cs1.png";
// import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

import { Link} from 'react-router-dom'

const Serv = () => {
  const data = [
    {
      image: Cardpic1,
      title: "E-commerce",
      subTitle: "\n\nYour online market for buying any rooftop farming products. In this section, we help the interested people get the items they require to start rooftop farming",

    },
    {
      image: Cardpic2,
      title: "AI disease predictor",
      subTitle: "This model predicts the disease of the plant by taking their pictures as input. This model is for helping for people get info about the disease their plant is going through. ",

    },
    {
      image: Cardpic3,
      title: "News",
      subTitle: "This section lets the user know about the news of the upcoming events relating to terrace farming. This section is to let our users not miss out on any news.",
  
    },
    {
      image: Cardpic4,
      title: "Regional Guide",
      subTitle: "This section lets our user know about different suitable plants according to their region of residence.",
    },
    {
      image: Cardpic5,
      title: "Compost Manure",
      subTitle: "This section includes a chatbot that helps people determine the things they can use or not use while making organic fertilizers. ",
    },
  ];
  return (
    <Section id="destinations" className="max-w-[850px] mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl my-6 font-sans font-bold"> Use Our Services</h1> 
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination ">
              <img src={destination.image} alt="" />
              <b>{destination.title}</b>
              <p>{destination.subTitle}</p>
          
            </div>
          );
        })}
      </div>
      <div id='destinationsLast' className="h-0">{/* this is created so that navbar doesnot covers content of section following this div, which is explore section in this case  */}
      </div>
    </Section>
  );
};

export default Serv;
const Section = styled.section`
.destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #dbdaf8;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;