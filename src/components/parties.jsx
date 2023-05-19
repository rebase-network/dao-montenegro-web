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
import RebaseIcon from "../assets/logos/rebase.svg";

// sponsors
import MXCIcon from "../assets/logos/mxc.svg";
import GreenpillIcon from "../assets/logos/greenpill.png";
import BeosinIcon from "../assets/logos/Beosin.svg";
import ZlockIcon from "../assets/logos/zcloak.svg";
import KucoinLabsIcon from "../assets/logos/kucoin_labs.png";
import KCCIcon from "../assets/logos/kcc.png";
import SendingmeIcon from "../assets/logos/sendingme.svg";
import EthsignIcon from "../assets/logos/ethsign.svg";
import CycleLabIcon from "../assets/logos/cyclelab.svg";
import CoinWIcon from "../assets/logos/coinw.svg";
import SafeStakeIcon from "../assets/logos/safestake.svg";
import MetaStoneIcon from "../assets/logos/metastone.svg";
import LbankIcon from "../assets/logos/lbank.svg";

// content curators
import ThreeWW3Icon from "../assets/logos/3ww3.svg";
import MoledaoIcon from "../assets/logos/moledao.svg";


// medias
import ForesightIcon from "../assets/logos/foresight.png";
import OdailyIcon from "../assets/logos/odaily.png";
import PANewsIcon from "../assets/logos/panews.png";
import ChaincatcherIcon from "../assets/logos/chaincatcher.png";
import CointimeIcon from "../assets/logos/cointime.png";
import BlockTempoIcon from "../assets/logos/blocktempo.png";
import OrangePaperIcon from "../assets/logos/orangepaper.png";
import WushuoIcon from "../assets/logos/wulogo.png";
import CryptoSlateIcon from "../assets/logos/cryptoslate.png";
import MetaverseIcon from "../assets/logos/metaverse.png";


// communities
import DeSchoolIcon from "../assets/logos/deschool.svg";
import DAOLinkIcon from "../assets/logos/daolink.svg";
// import EnsoulIcon from "../assets/logos/ensoul.svg";
import ECNIcon from "../assets/logos/ecn.png";
import DenglianIcon from "../assets/logos/denglian.svg";
import BfrenzIcon from "../assets/logos/bfrenz.svg";
import KNN3Icon from "../assets/logos/KNN3.svg";
// import SocialLayerIcon from "../assets/logos/social_layer.png";
import Web3GoIcon from "../assets/logos/web3go.png";
import OdysseyIcon from "../assets/logos/odyssey.png";
import Seven06Icon from "../assets/logos/706.svg";
import Cryptovoyage from "../assets/logos/cryptovoyage.svg";
import DeboxIcon from "../assets/logos/debox.svg";
import NftscanIcon from "../assets/logos/nftscan.svg";
import PfpdaoIcon from "../assets/logos/pfpdao.svg";
import Web3mapIcon from "../assets/logos/web3map.svg";
import LxdaoIcon from "../assets/logos/lxdao.svg";
import EnsoulIcon from "../assets/logos/ensoul.svg";
import SocialLayerIcon from "../assets/logos/sociallayer.svg";
import Web3camp from "../assets/logos/web3camp.svg";

import CrytoTalksIcon from "../assets/logos/cryptotalks.png";
import DinoIcon from "../assets/logos/dino.jpg";
import CrossspaceIcon from "../assets/logos/crossspace.png";
import QuestNIcon from "../assets/logos/questn.png";
import RingsnetworkIcon from "../assets/logos/ringsnetwork.png";
import Web3eventIcon from "../assets/logos/web3event.svg";
import Wormhole3Icon from "../assets/logos/wormhole3.png";
import LegalDaoIcon from "../assets/logos/legal.png"
import ThreeDaoIcon from "../assets/logos/threedao.svg";
import SocityIcon from "../assets/logos/socity.svg";
import Zerox499Icon from "../assets/logos/0x499.png";

const hosts = [
  {
    name: "SeeDAO",
    img: SeeDAOIcon,
    href: "https://seedao.xyz"
  },
  {
    name: "BuilderDAO",
    img: BuilderDAOIcon,
    href: "https://buidlerdao.xyz/",
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
  {
    name: "MXC",
    img: MXCIcon,
    href: "https://www.mxc.com/",
    style: { transform: "scale(0.9)" },
  },
  {
    name: "zCloak",
    img: ZlockIcon,
    href: "https://zcloak.network/",
    style: { transform: "scale(0.9)" },
  },
  {
    name: "Beosin",
    img: BeosinIcon,
    href: "https://beosin.com/",
  },
  {
    name: "Greenpill",
    img: GreenpillIcon,
    href: "https://greenpill.io/",
    class: "greenpill",
  },
  {
    name: "Sendingme",
    img: SendingmeIcon,
    href: "https://sending.me/",
    style: { transform: "scale(0.8)" },
  },
  // {
  //   name: "Kucoin Venture",
  //   img: KucoinIcon,
  //   href: "https://www.kucoin.com/kucoin-ventures",
  //   style: { transform: "scale(0.8)" },
  // },
  {
    name: "Kucoin Labs",
    img: KucoinLabsIcon,
    href: "https://www.kucoin.com/land/kucoinlabs",
    style: { transform: "scale(0.62)" },
  },
  {
    name: "KCC",
    img: KCCIcon,
    href: "https://www.kcc.io/",
    style: { transform: "scale(0.62)" },
  },
  {
    name: "CoinW",
    img: CoinWIcon,
    style: { transform: "scale(0.8)" },
  },
  {
    name: "EthSign",
    img: EthsignIcon,
    href: "https://www.ethsign.xyz/",
    style: { transform: "scale(0.62)" },
  },
  {
    name: "Cycle Lab",
    img: CycleLabIcon,
    style: { transform: "scale(0.8)" },
  },

  {
    name: "Safe Stake",
    img: SafeStakeIcon,
  },
  {
    name: "Meta Stone",
    img: MetaStoneIcon,
    style: { transform: "scale(0.8)" },
  },
  {
    name: "LBank",
    img: LbankIcon,
    // style: { transform: "scale(0.8)" },
  },
];

const content_curators = [
  {
    name: "亚非拉 Web3 研究院",
    img: ThreeWW3Icon,
    href: ""
  },
  {
    name: "Moledao",
    img: MoledaoIcon,
    href: "",
    lv: 2,
  },
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
  {
    name: "BlockTempo",
    img: BlockTempoIcon,
    href: "",
    style: { transform: "scale(1.3)" },
  },
  {
    name: "橙皮书",
    img: OrangePaperIcon,
    href: "",
    class: "scale",
  },
  {
    name: "吴说区块链",
    img: WushuoIcon,
    href: "",
    class: "scale",
    style: { transform: "scale(1.3)" },
  },
  {
    name: "Crypto Slate",
    img: CryptoSlateIcon,
    href: "",
  },
  {
    name: "Metaverse Post",
    img: MetaverseIcon,
    href: "",
    class: "scale",
    style: { transform: "scale(1.5)" },
  },
];

const communities = [
  {
    name: "Deschool&Booth",
    img: DeSchoolIcon,
    href: "",
    lv: 2,
  },
  {
    name: "DAOlink",
    img: DAOLinkIcon,
    href: "",
    lv: 2,
  },
  // {
  //   name: "Ensoul",
  //   img: SeeDAOIcon,
  //   href: "",
  //   lv: 2,
  // },
  {
    name: "ECN以太坊中文社区",
    img: ECNIcon,
    href: "",
    class: "scale",
  },
  {
    name: "登链社区",
    img: DenglianIcon,
    href: "",
    lv: 2,
  },
  {
    name: "bfrenz",
    img: BfrenzIcon,
    href: "",
    lv: 2,
  },
  {
    name: "KNN3",
    img: KNN3Icon,
    href: "",
    lv: 2,
  },
  // {
  //   name: "Social layer",
  //   img: SeeDAOIcon,
  //   href: "",
  //   lv: 2,
  // },
  {
    name: "Web3GO",
    img: Web3GoIcon,
    href: "",
    class: "scale",
  },
  {
    name: "Odyssey DAO",
    img: OdysseyIcon,
    href: "",
    class: "scale",
  },
  {
    name: "706",
    img: Seven06Icon,
    href: "",
    class: "scale",
  },
  {
    name: "Crypto Voyage",
    img: Cryptovoyage,
    href: "",
    lv: 2,
  },
  {
    name: "Debox",
    img: DeboxIcon,
    href: "",
    lv: 2,
  },
  {
    name: "NFTscan",
    img: NftscanIcon,
    href: "",
    lv: 2,
  },
  {
    name: "PFP DAO",
    img: PfpdaoIcon,
    href: "",
    style: { transform: "scale(1.3)" },
  },
  {
    name: "Web3 Map",
    img: Web3mapIcon,
    href: "",
    lv: 2,
  },
  {
    name: "LXDAO",
    img: LxdaoIcon,
    href: "",
    lv: 2,
  },
  {
    name: "Ensoul",
    img: EnsoulIcon,
    href: "",
    lv: 2,
  },
  {
    name: "Social Layer",
    img: SocialLayerIcon,
    href: "",
    lv: 2,
  },
  {
    name: "Web3Camp",
    img: Web3camp,
    href: "",
    lv: 2,
  },
  {
    name: "Cryto Talks",
    img: CrytoTalksIcon,
    href: "",
    class: "scale",
  },
  {
    name: "Dino",
    img: DinoIcon,
    href: "",
    class: "scale",
  },
  {
    name: "Crossspace",
    img: CrossspaceIcon,
    href: "",
  },
  {
    name: "Legal DAO",
    img: LegalDaoIcon,
    href: "",
  },
  {
    name: "Quest N",
    img: QuestNIcon,
    href: "",
    style: { transform: "scale(0.8)" },
  },
  {
    name: "Rings network",
    img: RingsnetworkIcon,
    href: "",
  },
  {
    name: "Web3Event",
    img: Web3eventIcon,
    href: "",
  },
  {
    name: "Wormhole3",
    img: Wormhole3Icon,
    href: "",
  },
  {
    name: "Three DAO",
    img: ThreeDaoIcon,
    href: "",
    class: "three",
  },
  {
    name: "SoCity",
    img: SocityIcon,
    style: { transform: "scale(1.1)" },
  },
  {
    name: "0x499",
    img: Zerox499Icon,
    style: { transform: "scale(0.7)" },
    class: "zerox499"
  },
];


export default function PartiesDetail() {

  return (
    <PartiesBox>
      <IntroBox>
        <li>
          <p className="title">ORGANIZERS</p>
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

        <li>
          <p className="title">CO-ORGANIZERS</p>
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

        <li id="sponsor">
          <p className="title">SPONSORS</p>
          <LogoBox className="medium">
            {sponsors.map((g, i) => (
              <div key={i} className={g.class || ""}>
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer">
                    <img src={g.img} alt="" style={g.style} />
                  </a>
                ) : (
                  <img src={g.img} alt="" style={g.style} />
                )}
              </div>
            ))}
          </LogoBox>
        </li>

        <li>
          <p className="title">CONTENT CURATORS</p>
          <SmallLogoBox>
            {content_curators.map((g, i) => (
              <div key={i} className="curator">
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer">
                    <img src={g.img} alt="" style={g.style} />
                  </a>
                ) : (
                  <img src={g.img} alt="" style={g.style} />
                )}
              </div>
            ))}
          </SmallLogoBox>
        </li>

        <li>
          <p className="title">MEDIA PARTNERS</p>
          <SmallLogoBox>
            {medias.map((g, i) => (
              <div key={i} className={g.class || ""}>
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer">
                    <img src={g.img} alt="" style={g.style} />
                  </a>
                ) : (
                  <img src={g.img} alt="" style={g.style} />
                )}
              </div>
            ))}
          </SmallLogoBox>
        </li>

        <li>
          <p className="title">COMMUNITY SUPPORTERS</p>
          <SmallLogoBox>
            {communities.map((g, i) => (
              <div key={i} className={g.class || ""}>
                {g.href ? (
                  <a href={g.href} target="_blank" rel="noopener noreferrer">
                    <img src={g.img} alt="" style={g.style} />
                  </a>
                ) : (
                  <img src={g.img} alt="" style={g.style} />
                )}
              </div>
            ))}
          </SmallLogoBox>
        </li>
      </IntroBox>
    </PartiesBox>
  );
}


const PartiesBox = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding-inline: 6rem;
  padding-bottom: 2rem;
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
    margin-block: 3.8rem;
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
  @media (max-width: 780px) {
    p.title {
      margin-block: 36px;
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
    /* background-color: white; */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
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
      width: calc(28%);
      height: unset;
    }
  }
  &.medium > div {
    margin: 8px 16px;
    width: calc(22% - 2rem);
    &.greenpill img {
      transform: scale(0.9) !important;
      @media (max-width: 900px) {
        transform: scale(1.1) !important;
      }
    }

    @media (max-width: 500px) {
      width: calc(25%);
      height: 60px;
      img {
        transform: scale(1) !important;
      }
    }
  }
`;


const SmallLogoBox = styled(LogoBox)`
  justify-content: center;

  > div {
    width: calc(16% - 2rem);
    height: 8rem;
    margin-inline: 3rem;
    background-color: transparent;
    margin-block: 10px;
    &.three img {
      transform: scale(1.1) !important;
    }

    @media (max-width: 780px) {
      width: calc(30% - 2rem);
      margin-block: 12px;
      height: 30px;

      &.curator {
        height: 50px;
      }

      &.scale img {
        transform: scale(2) !important;
      }

      &.three img {
        transform: scale(1.3) !important;
      }
      &.zerox499 img {
        transform: scale(1.1) !important;
      }
    }
  }
`;