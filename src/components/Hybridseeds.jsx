import React from "react";
import styled from "styled-components";
import Cardpic1 from "../assets/meds1.png";
import Cardpic2 from "../assets/meds1.png";
import Cardpic3 from "../assets/meds1.png";


import { Link} from 'react-router-dom'

const Hybridseeds = () => {
  const data = [
    {
      image: Cardpic1,
      title: "Hybrid apple",
      cost: "Rs.450",
    },
    {
      image: Cardpic2,
      title: "Ladyfinger seeds",
      cost: "Rs. 250",
    },
    {
      image: Cardpic3,
      title: "Bean seeds",
      cost: "Rs.50 per pack",
    },
    {
      image: Cardpic1,
      title: "Brinjal plant",
      cost: "Rs.250",
    },
    {
      image: Cardpic2,
      title: "Coriander seeds",
      cost: "Rs.50",
    },
    {
      image: Cardpic3,
      title: "Gourd seeds",
      cost: "Rs.150 per pack",
    },
  ];
  return (
    <Section id="destinations" className="max-w-[900px] mx-auto py-24 px-4 text-center">
      <h1 className="text-6xl font-bold"> Hybrid Seeds</h1>
      <p className="py-5 pb-10">
        Choose the required seeds from categories below.
      </p>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3 className="font-bold text-xl">{destination.title}</h3>
              <div className="priceandcart flex flex-col items-center justify-center">
              <h4>{destination.cost}</h4>
                <button className="py-3 px-6 w-full sm:w-[70%] my-3 rounded-lg">Add to cart</button>
              </div>
              </div>
          );
        })}
      </div>
      <div id='destinationsLast' className="h-0">{/* this is created so that navbar doesnot covers content of section following this div, which is explore section in this case  */}
      </div>
    </Section>
  );
};

export default Hybridseeds;
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