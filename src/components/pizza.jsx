import styled from "styled-components";
import EventOne from "../assets/pizza/one.svg";
import EventTwo from "../assets/pizza/two.svg";
import PizzaColIcon from "../assets/pizza/pizza-col.svg";
import PizzaRowIcon from "../assets/pizza/pizza-row.svg";
import QRcodeIcon from "../assets/pizza/qrcode.svg";
import WorkshopText from "../assets/pizza/workshop.svg";

export default function PizzaBox({ sm }) {
  return (
    <div>
      <EventsBox>
        <div>
          <img src={EventOne} alt="" />
        </div>
        <div>
          <img src={EventTwo} alt="" />
        </div>
      </EventsBox>
      <PizzaImg src={sm ? PizzaColIcon : PizzaRowIcon} alt="" />
      <QRcodeBox>
        <img className="left" src={QRcodeIcon} alt="" />
        <img className="right" src={WorkshopText} alt="" />
      </QRcodeBox>
    </div>
  );
}

const EventsBox = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  > div {
    flex: 1;
    img {
        width: 100%;
    }
  }
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const PizzaImg = styled.img`
  margin-block: 5rem;
  width: 100%;
  @media (max-width: 780px) {
    margin-block: 20px;
  }
`;

const QRcodeBox = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 5.8rem;
  @media (max-width: 780px) {
    .left {
      width: 138px;
    }
    .right {
      width: 50%;
    }
  }
  /* @media (max-width: 500px) {
    .right {
      width: 50%;
    }
  } */
`;
