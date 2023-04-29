import styled from "styled-components";
import EventImg01 from "../assets/event01.png";
import EventImg02 from "../assets/event02.png";
import LocationIcon from "../assets/location.svg";
import TimeIcon from "../assets/time.svg";

// hosts
import SeeDAOIcon from "../assets/logos/seedao.svg";
import BuilderDAOIcon from "../assets/logos/builder_dao.svg";
import MaskIcon from "../assets/logos/mask.svg";

// cohosts
import RebaseIcon from "../assets/logos/rebase.png";

// sponsors

// medias
import ForesightIcon from "../assets/logos/foresight.png";
import OdailyIcon from "../assets/logos/odaily.png";
import PANewsIcon from "../assets/logos/panews.png";
import ChaincatcherIcon from "../assets/logos/chaincatcher.png";
import CointimeIcon from "../assets/logos/cointime.png";
// import BlockTempoIcon from "../assets/logos/blocktempo.png";


// communities
import DenglianIcon from "../assets/logos/denglian.png";
import ECNIcon from "../assets/logos/ecn.png";
import BfrenzIcon from "../assets/logos/bfrenz.png";
import MoledaoIcon from "../assets/logos/moledao.png";
import KNN3Icon from "../assets/logos/KNN3.png";


const hosts = [
  {
    name: "SeeDAO",
    img: SeeDAOIcon,
    href: "https://seedao.xyz"
  },
  {
    name: "BuilderDAO",
    img: BuilderDAOIcon,
    href: "https://builderdao.io/",
  },
  {
    name: "Mask Network",
    img: MaskIcon,
    href: "https://mask.io/",
  }
];

const coorganizers = [
  {
    name: "Rebase",
    img: RebaseIcon,
    href: "https://rebase.network",
  }
];

const sponsors = [
];

const medias = [
  {
    name: "Foresight News",
    img: ForesightIcon,
    href: "",
    lv: 2,
  },
  {
    name: "Odaily",
    img: OdailyIcon,
    href: "",
    lv: 2,
  },
  {
    name: "PANews",
    img: PANewsIcon,
    href: "",
    lv: 2,
  },
  {
    name: "Chaincatcher",
    img: ChaincatcherIcon,
    href: "",
    lv: 2,
  },
  {
    name: "Cointime",
    img: CointimeIcon,
    href: "",
    lv: 2,
  },
  // {
  //   name: "BlockTempo",
  //   img: SeeDAOIcon,
  //   href: "",
  //   lv: 1,
  // },
]

const communities = [
  {
    name: "登链社区",
    img: DenglianIcon,
    href: "",
    lv: 2,
  },
  {
    name: "ECN以太坊中文社区",
    img: ECNIcon,
    href: "",
    lv: 1,
  },
  {
    name: "bfrenz",
    img: BfrenzIcon,
    href: "",
    lv: 2,
  },
  {
    name: "Moledao",
    img: MoledaoIcon,
    href: "",
    lv: 2,
  },
  {
    name: "KNN3",
    img: KNN3Icon,
    href: "",
    lv: 2,
  },
];


export default function PartiesDetail() {

  return (
    <PartiesBox>
      <IntroBox>
        <li>
          <p className="title"> Organizers </p>
          <LogoBox className="big">
            {hosts.map((g, i) => (
              <div key={i}>
                <a href={g.href} target="_blank" rel="noopener noreferrer">
                  <img src={g.img} alt="" />
                </a>
              </div>
            ))}
          </LogoBox>
          {/* <div className="introContent">
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
          </div> */}
        </li>

        {/* <li id="sponsor">
          <p className="title">Sponsors </p>
          <LogoBox>
            {communities.map((g, i) => (
              <div key={i}>
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer">
                    <img src={g.img} alt="" />
                  </a>
                ) : (
                  <img src={g.img} alt="" />
                )}
              </div>
            ))}
          </LogoBox>
        </li> */}

        <li>
          <p className="title">Co-organizers </p>
          <LogoBox className="medium">
            {coorganizers.map((g, i) => (
              <div key={i}>
                <a href={g.href} target="_blank" rel="noopener noreferrer">
                  <img src={g.img} alt="" />
                </a>
              </div>
            ))}
          </LogoBox>
        </li>

        <li>
          <p className="title">Medias </p>
          <SmallLogoBox>
            {medias.map((g, i) => (
              <div key={i}>
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer">
                    <img src={g.img} alt="" />
                  </a>
                ) : (
                  <img src={g.img} alt="" />
                )}
              </div>
            ))}
          </SmallLogoBox>
        </li>

        <li>
          <p className="title">Communities </p>
          <SmallLogoBox>
            {communities.map((g, i) => (
              <div key={i}>
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer">
                    <img src={g.img} alt="" />
                  </a>
                ) : (
                  <img src={g.img} alt="" />
                )}
              </div>
            ))}
          </SmallLogoBox>
        </li>
        {/* <li>
          <p className="title">Co-organizer: Rebase </p>
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
        </li> */}
      </IntroBox>
    </PartiesBox>
  );
}


const PartiesBox = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding-inline: 6rem;
  padding-bottom: 12rem;
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
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  p.title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 4.4rem;
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
    /* &:first-child {
      margin-bottom: 10rem;
    } */
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
    height: 13.2rem;
    margin-inline: 1rem;
    margin-bottom: 1.5rem;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }

    @media (max-width: 780px) {
      width: calc(25% - 2rem);
    }
  }
  &.big > div {
    width: 29.6rem;
    height: 13.6rem;
    margin-inline: 3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    @media (max-width: 780px) {
      border-radius: 6px;
    }
  }
  &.medium > div {
    width: calc(22% - 2rem);
  }
`;


const SmallLogoBox = styled(LogoBox)`
  justify-content: center;

  > div {
    width: calc(16% - 2rem);
    height: 8rem;
    margin-inline: 3rem;
    background-color: transparent;
  }
`;