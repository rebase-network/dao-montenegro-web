import styled from "styled-components";
import SpeakerImg from "../assets/speaker.png";

const List = [
  {
    name: "name name",
    title: "title",
  },
  {
    name: "name name",
    title: "title",
  },
  {
    name: "name name",
    title: "title",
  },
  {
    name: "name name",
    title: "title",
  },
  {
    name: "name name",
    title: "title",
  },
];

export default function Speaker() {
  return (
    <section id="speaker">
      <Header>
        <img src={SpeakerImg} alt="" />
        <div>
          <span>
            Proposed <br /> Guest Speakers
          </span>
        </div>
      </Header>
      <CardBox>
        {List.map((l, i) => (
          <li key={i}>
            <div className="name">{l.name}</div>
            <div className="title">{l.title}</div>
          </li>
        ))}
      </CardBox>
    </section>
  );
}

const Header = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
    display: block;
  }
  div {
    padding-inline: 60px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    line-height: 116px;
    text-transform: uppercase;
    -webkit-text-stroke: 3px #fff;
    justify-content: center;
  }
`;

const CardBox = styled.ul`
  width: 100%;
  padding: 50px 60px 85px;
  background: #f98845;
  display: flex;
  justify-content:  space-between;
  flex-wrap: wrap;

  box-sizing: border-box;
  li {
    height: 179px;
    margin-bottom: 30px;
    div {
      border: 2px solid #000000;
      &.title {
        border-top: none;
      }
      text-align: center;
    }
    .name {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      color: #ffffff;
      height: 109px;
    }
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 72px;
      height: 72px;
    }
    width: calc(25% - 20px);
  }
`;
