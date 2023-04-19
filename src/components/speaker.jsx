import styled from "styled-components";
import SpeakerImg from "../assets/speaker.png";
import SpeakerTitle from "../assets/speaker_title.png";

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
          <img className="title" src={SpeakerTitle} alt="" />
        </div>
      </Header>
      <CardBox>
        {List.map((l, i) => (
          <li key={i}>
            <div className="name">
              <span>{l.name}</span>
            </div>
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
    font-size: 9.6rem;
    line-height: 11.6rem;
    text-transform: uppercase;
    -webkit-text-stroke: 3px #fff;
    justify-content: center;
  }
  .title {
    height: 23.2rem;
  }
`;

const CardBox = styled.ul`
  position: relative;
  top: -1px;
  width: 100%;
  padding: 5rem 6rem 8.5rem;
  background: #f98845;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  box-sizing: border-box;
  li {
    height: 17.9rem;
    margin-bottom: 3rem;
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
      font-size: 4rem;
      color: #ffffff;
      height: 10.9rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 7.2rem;
      height: 7.2rem;
    }
    width: calc(25% - 20px);
    @media (max-width: 780px) {
      margin-bottom: 20px;
      width: 24%;
    }
  }
`;
