import React from "react";
import styled from "styled-components";
import Cardpic1 from "../assets/tomato.png";
import Cardpic2 from "../assets/potato.jpg";
import Cardpic3 from "../assets/strawberry.jpg";




const Aihelper = () => {
  const data = [
    {
      image: Cardpic1,
      title: "AI Tomato Disease Predictor ",
      subTitle: "This is an AI tomato disease predictor model based on a neural network. It takes an image as an input from the user of the leaves of the plant and gives user the possibility of having any specific disease based on what the picture looks like.",
    },
    {
      image: Cardpic2,
      title: "AI Potato Disease Predictor ",
      subTitle: "This is an AI potato disease predictor model based on a neural network. It takes an image as an input from the user of the leaves of the plant and gives user the possibility of having any specific disease based on what the picture looks like.",
    },
    {
        image: Cardpic3,
        title: "AI Strawberry Disease Predictor ",
      subTitle: "This is an AI strawberry disease predictor model based on a neural network. It takes an image as an input from the user of the leaves of the plant and gives user the possibility of having any specific disease based on what the picture looks like.",
      },
  ];
  return (
    <Section id="destinations" className="w-[1280px] mx-auto py-24 px-2 text-center">
      <h1 className="text-4xl font-bold">AI-based disease predictors</h1>
      <p className="py-5 pb-10">
        Try our AI based models.
      </p>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3 className="font-bold text-xl">{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="priceandcart flex flex-col items-center justify-center">
                {/* <h1>{destination.cost}</h1> */}
                <button className="py-3 px-6 w-full sm:w-[60%] my-3 rounded-lg">Use Model</button>
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

export default Aihelper;
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
          font-size: 0vh;
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