import styled from "styled-components";
import SpeakerImg from "../assets/speaker.png";
import SpeakerTitle from "../assets/speaker_title.png";
import Audrey from "../assets/speakers/AudreyTang.png";
import Chika from "../assets/speakers/Chika.png";
import DrSun from "../assets/speakers/DrSun.png";
import GuoLiu from "../assets/speakers/GuoLiu.png";
import HanTang from "../assets/speakers/HanTang.png";
import JakeHartnell from "../assets/speakers/JakeHartnell.png";
import Suji from "../assets/speakers/Suji.png";
import SunquanHuang from "../assets/speakers/SunquanHuang.png";
import Michael from "../assets/speakers/Michael.png";
import ShreyJain from "../assets/speakers/ShreyJain.png";
import SheenHu from "../assets/speakers/SheenHu.png";
import Catthu from "../assets/speakers/Catthu.png";


const List = [
  {
    name: "Shrey Jain",
    title: "Applied Scientist at Microsoft Research",
    avatar: ShreyJain,
    intro:
      "Shrey is an applied scientist at Microsoft Research and an expert in decentralized social technology. He is the first author of “Plural Publics” and also a confirmed speaker at EDCON 2023.",
  },
  {
    name: "Sheen Hu",
    title: "CEO of MXC DAO",
    avatar: SheenHu,
    intro:
      "Sheen is the CEO of MXC DAO. Meta x Connect is a public network where anyone can create value by bringing real-world assets into Web3. Since launch, MXC has become one of the world's largest LPWAN IoT networks and a successful case in the Web3 ecosystem.",
  },
  {
    name: "Catthu",
    title: "Core at VitaDAO",
    avatar: Catthu,
    intro:
      "Catthu is core at VitaDAO, in charge of Longevity Prize, Chairman of UWC Vietnam, organizing community and longevity activities in Zuzalu.",
  },
  {
    name: "Michael",
    title: "Co-founder of Humanity",
    avatar: Michael,
    intro:
      "Michael is a Co-founder of Humanity. Humanity is committed to building a network platform covering one billion people for healthy and longevity life, helping all human beings to delay aging and maximize healthy life expectancy.",
  },
  {
    name: "Audrey Tang",
    title: "Founder of DRK Lab",
    avatar: Audrey,
    intro:
      "Audrey is Founder of DRK Lab, which aims to invest in and support long-term projects, sustain the Web3 Youth Scholars Program, and build a community of builders who are focused on long-term innovation and creativity.",
  },
  {
    name: "Han Tang",
    title: "Co-Founder of SeeDAO",
    avatar: HanTang,
    intro:
      "Han is Co-Founder of SeeDAO. SeeDAO is the most influential DAO in the Chinese-speaking world, with the goal of building a digital city-state that connects one million people.",
  },
  {
    name: "Sunquan Huang",
    avatar: SunquanHuang,
    title: "Art activist",
    intro:
      "Sunquan is PhD in Architecture from National Taiwan University, curator, art activist, visiting professor at the School of Intermedia Art of China Academy of Art, and director of the Institute of Network Society.",
  },
  {
    name: "Guo Liu",
    avatar: GuoLiu,
    title: "Co-Founder of Mattters",
    intro: "Guo is Co-Founder of Mattters.",
  },
  {
    name: "Dr. Sun",
    title: "Sociologist",
    avatar: DrSun,
    intro: "Dr. Sun is a sociologist, also initiator of Comupage.",
  },
  {
    name: "Jake Hartnell",
    avatar: JakeHartnell,
    title: "Founder of DAO DAO",
    intro:
      "Jake is Founder of DAO DAO, which is a DAO that builds DAOs. It aims to build powerful open-source tools for DAOs.",
  },
  {
    name: "Suji",
    title: "Founder of Mask Network",
    avatar: Suji,
    intro:
      "Suji is Founder of Mask Network, which is committed to becoming a portal that helps users seamlessly transition from Web 2.0 to Web 3.0 and building a bridge to the new open network on the current network.",
  },
  {
    name: "Chika",
    title: "Founder of Afropolitan",
    avatar: Chika,
    intro:
      "Chika is Founder of Afropolitan, which is a curation for black and African people, dedicated to providing the best services in art, finance, technology, health, energy, sports, and media for African people.",
  },
  {
    name: "Aman",
    title: "Community leader of DAOStar",
    intro:
      "Aman is the Community leader of DAOStar, which is an organization that develops shared metadata standards for DAOs.",
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
            <div className="avatar">
              <img src={l.avatar} alt="" />
            </div>
            <div className="intro">
              <div className="user">
                <span className="name">{l.name}</span>
                <span className="title">{l.title}</span>
              </div>
              <div className="sintro">{l.intro}</div>
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
  background: #f98845;
  box-sizing: border-box;
  padding: 6rem;
  box-sizing: border-box;
  li {
    padding: 19px 24px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    gap: 24px;
    border: 2px solid #000;
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
    .avatar {
      width: 130px;
      height: 130px;
      img {
        width: 100%;
      }
    }
    .user {
      font-family: "Inter";
      font-style: normal;
      margin-bottom: 8px;
      color: #ffffff;
      .name {
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        margin-right: 40px;
      }
      .title {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
      }
    }
    .intro {
      flex: 1;
      .sintro {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
      }
    }
    @media (max-width: 780px) {
      .name {
        font-size: 20px;
      }
      .title {
        font-size: 18px;
      }
      .sintro {
        font-size: 14px;
        line-height: 18px;
      }
      .user {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;
