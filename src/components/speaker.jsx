import styled from "styled-components";
import SpeakerImg from "../assets/speaker.png";
import SpeakerTitle from "../assets/speaker_title.png";

const List = [
  {
    name: "Shrey Jain",
    title: "Applied Scientist @Micro Soft Research",
    line: 2,
  },
  {
    name: "Sheen Hu",
    title: "CEO of MXC DAO",
  },
  {
    name: "黄孙权",
    title: "台湾大学建筑学博士 </br> 策展人，艺术行动者",
    line: 2,
  },
  {
    name: "刘果",
    title: "Cofounder of Matters",
  },
  {
    name: "Cat-thru",
    title: "Core member of VitaDAO",
    line: 2,
  },
  {
    name: "Michael",
    title: "Humanity-Cofounder",
  },
  {
    name: "Audrey Tang",
    title: "Founder of DRK Lab",
  },
  {
    name: "Han Tang",
    title: "Founder of SeeDAO",
  },
  {
    name: "Dr.Sun",
    title: "Sociologist, comupage initiator",
    line: 2,
  },
  {
    name: "Aman",
    title: "Community leader of DAOStar",
  },
  {
    name: "Jake Hartnell",
    title: "DAO DAO Founder",
  },
  {
    name: "Suji Yan",
    title: "Founder of Mask Network",
  },
  {
    name: "Chika",
    title: "Afropolitan",
  }
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
            <div className={l.line === 2 ? "multi title" : "title"}>
              <span dangerouslySetInnerHTML={{ __html: l.title }}></span>
            </div>
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
  justify-content: start;
  flex-wrap: wrap;
  align-items: stretch;

  box-sizing: border-box;
  li {
    width: calc(25% - 2rem);
    margin-inline: 1rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
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
      font-size: 2.2rem;
      min-height: 7.2rem;
      flex: 1;
      justify-content: center;
      /* span {
        line-height: 7.2rem;
      }
      &.multi span {
        line-height: 3.4rem;
      } */
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-block: 5px;
    }
    @media (max-width: 780px) {
      width: calc(50% - 2rem);
      margin-bottom: 20px;
      @media (max-width: 780px) {
        .name {
          font-size: 16px;
        }
        .title {
          font-size: 14px;
        }
      }
    }
  }
`;
