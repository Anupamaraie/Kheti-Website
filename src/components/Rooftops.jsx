import React from "react";
import styled from "styled-components";
import Cardpic1 from "../assets/rt1.png";
import Cardpic2 from "../assets/rf2.png";
import Cardpic3 from "../assets/rf3.png";
import Cardpic4 from "../assets/rf4.png";
import Cardpic5 from "../assets/rf5.png";
import Cardpic6 from "../assets/rf6.png";
// import { Link} from 'react-router-dom';

const Rooftops = () => {
  const data = [
    {
      image: Cardpic1,
    },
    {
      image: Cardpic2,
    },
    {
      image: Cardpic3,
    },
    {
        image: Cardpic4,
      },
      {
        image: Cardpic5,
      },
      {
        image: Cardpic6,

      },
  ];
  return (
    <Section id="destinations" className="max-w-[900px] mx-auto py-24 px-2 text-center">
      <h1 className="text-4xl font-bold"> Types of Rooftops</h1>
      <p className="py-5 pb-10">
        Identify your type and click on the pictures to know more.
      </p>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <a href="https://drive.google.com/file/d/1mAK0F2gDQA3b8lEAaQgeyPViGQXs-M1F/view?usp=sharing"><img src={destination.image} alt="" /></a>
            </div>
          );
        })}
      </div>
      <div id='destinationsLast' className="h-0">{/* this is created so that navbar doesnot covers content of section following this div, which is explore section in this case  */}
      </div>
    </Section>
  );
};

export default Rooftops;
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