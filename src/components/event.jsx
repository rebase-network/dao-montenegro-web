import styled from "styled-components";
import EventImg01 from "../assets/event01.png";
import EventImg02 from "../assets/event02.png";
import LocationIcon from "../assets/location.svg";
import TimeIcon from "../assets/time.svg";

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

          <span>May 21-22</span>
        </div>
      </Content>
      <ImgBox>
        <img src={EventImg01} alt="" />
        <img src={EventImg02} alt="" className="circle" />
      </ImgBox>
    </EventBox>
  );
}


const EventBox = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 12rem 6rem;
  p {
    margin: 0;
  }
`;

const Content = styled.div`
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7.7rem;
    margin-bottom: 4.4rem;
  }
  .info {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.1rem;
    mix-blend-mode: normal;
    display: flex;
    align-items: center;
    margin-bottom: 2.6rem;
    .icon {
      display: inline-block;
      width: 5.5rem;
      height: 5.5rem;
      margin-right: 2.9rem;
      img {
        height: 5.5rem;
      }
      &.loc img {
        height: 6.2rem;
        margin-left: .8rem;
      }
    }
  }
`;

const ImgBox = styled.div`
  width: 100%;
  position: relative;
  margin-top: 9.4rem;
  img {
    width: 100%;
  }
  .circle {
    position: absolute;
    right: 1.2rem;
    bottom: 12.3rem;
    width: unset;
    height: 56.9rem;
  }
`;

const IntroBox = styled.ul`
  margin-top: 11rem;
  padding: 0;
  p.title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7.7rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }
  li {
    .introContent {
      img {
        width: 26rem;
      }
      display: flex;
      p {
        margin-left: 5rem;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 3.2rem;
        line-height: 4.5rem;
      }
    }
    &:first-child {
      margin-bottom: 10rem;
    }
    @media (max-width: 780px) {
      .introContent p {
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
`;
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
  > div {
    width: calc(20% - 2rem);
    margin-inline: 1rem;
    margin-bottom: 1.5rem;

    img {
      width: 100%;
    }
    @media (max-width: 780px) {
      width: calc(25% - 2rem);
    }
  }
`;