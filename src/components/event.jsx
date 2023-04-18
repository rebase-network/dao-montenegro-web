import styled from "styled-components";
import EventImg01 from "../assets/event01.png";
import EventImg02 from "../assets/event02.png";
import LocationIcon from "../assets/location.svg";
import TimeIcon from "../assets/time.svg";
import RebaseIcon from "../assets/rebase_logo.svg";
import SeeDAOIcon from "../assets/seedao_logo.svg";

export default function EventDetail() {
  return (
    <EventBox>
      <Content>
        <div className="title">Event Details</div>
        <div className="info">
          <span className="icon loc">
            <img src={LocationIcon} alt="" />
          </span>
          <span>Hilton Hotel in Montenegro</span>
        </div>
        <div className="info">
          <span className="icon">
            <img src={TimeIcon} alt="" />
          </span>

          <span>May 20</span>
        </div>
      </Content>
      <ImgBox>
        <img src={EventImg01} alt="" />
        <img src={EventImg02} alt="" className="circle" />
      </ImgBox>
      <IntroBox>
        <li>
          <p className="title"> Initiating Organization:SeeDAO </p>
          <div className="introContent">
            <span>
              <img src={SeeDAOIcon} alt="" />
            </span>
            <p>
              SeeDAO is a network polis based on blockchain. Its mission is to
              connect 1 million crypto nomads and help build “connection, flow,
              exchange, and freedom” among community members. To this end,
              SeeDAO keeps launching Web3 public goods for the Chinese-speaking
              world, incubating the basic tools of DAO, building IRL network and
              helping more people live in DAO.
            </p>
          </div>
        </li>
        <li>
          <p className="title">Co-organizer:Rebase </p>
          <div className="introContent">
            <span>
              <img src={RebaseIcon} alt="" />
            </span>
            <p>
              SeeDAO is a network polis based on blockchain. Its mission is to
              connect 1 million crypto nomads and help build “connection, flow,
              exchange, and freedom” among community members. To this end,
              SeeDAO keeps launching Web3 public goods for the Chinese-speaking
              world, incubating the basic tools of DAO, building IRL network and
              helping more people live in DAO.
            </p>
          </div>
        </li>
      </IntroBox>
    </EventBox>
  );
}


const EventBox = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding-inline: 60px;
  padding-block: 90px 120px;
  p {
    margin: 0;
  }
`

const Content = styled.div`
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    margin-bottom: 44px;
  }
  .info {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 51px;
    mix-blend-mode: normal;
    display: flex;
    align-items: center;
    margin-bottom: 26px;
    .icon {
      display: inline-block;
      width: 55px;
      height: 55px;
      margin-right: 29px;
      img {
        height: 55px;
      }
      &.loc img {
        height: 62px;
        margin-left: 8px;
      }
    }
  }
`;

const ImgBox = styled.div`
  width: 100%;
  position: relative;
  margin-top: 94px;
  img {
    width: 100%;
  }
  .circle {
    position: absolute;
    right: 12px;
    bottom: 120px;
    height: 569px;
    width: auto;
  }
`;

const IntroBox = styled.ul`
  margin-top: 110px;
  p.title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    margin-bottom: 25px;
  }
  li {
    .introContent {
      img {
        width: 260px;
      }
      display: flex;
      p {
        margin-left: 50px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 45px;
      }
    }
    &:first-child {
      margin-bottom: 100px;
    }
  }
`;