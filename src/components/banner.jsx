import styled from "styled-components";
import BannerImg from "../assets/banner.png";
import BannerImgM from "../assets/banner_M.png";
import Header from "./header";

import TwitterIcon from "../assets/tw.svg";
import TGIcon from "../assets/tg.svg";
import EmailIcon from "../assets/email.svg";
import TitleSvg from "../assets/montenegro.png";

export default function Banner({ sm }) {
  return (
    <BannerBox sm={sm}>
      <Header sm={sm} />
      <Content>
        <p className="title">
          <img src={TitleSvg} alt="" />
        </p>
        <p className="subtitle">new organization, new world</p>
        <CallButton
          href="https://www.eventbrite.hk/e/dao-montenegro-tickets-626996241637"
          target="_blank"
          rel="noopener noreferrer"
        >
          call to action
        </CallButton>
        {!sm && (
          <SocialBox>
            <a
              href="https://t.me/theseedao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TGIcon} alt="" />
            </a>
            <a
              href="https://twitter.com/see_dao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="" />
            </a>
            <a
              href="mailto:dao.montenegro@seedao.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} alt="" />
            </a>
          </SocialBox>
        )}
      </Content>
    </BannerBox>
  );
}

const BannerBox = styled.section`
position: relative;
  height: ${({ sm }) => (sm ? "500px" : "73.4rem")};
  img {
    /* width: 100%; */
    /* object-fit: fill; */
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 60%;
  background-image: ${({ sm }) =>
    sm ? `url(${BannerImgM})` : `url(${BannerImg})`};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 100%;
  p {
    margin: 0;
  }
  p.subtitle {
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 6.2rem;
    line-height: 7.5rem;
    text-shadow: 0px 0px 40px rgba(255, 255, 255, 0.9);
    margin-top: -4.2rem;
  }
  p.title {
    img {
      width: 102rem;
    }
  }

  @media (max-width: 780px) {
    p.title {
      margin-top: 26rem;
      img {
        width: 130rem;
      }
    }
    p.subtitle {
      margin-top: -3rem;
    }
    justify-content: center;
  }
`;

const CallButton = styled.a`
  margin-block: 6.6rem;
  cursor: pointer;
  width: 323px;
  height: 50px;
  line-height: 50px;
  background: #000000;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #39ffb8;
  display: inline-block;
  text-align: center;
  &:hover {
    color: #39ffb8;
  }
  @media (max-width: 780px) {
    margin-bottom: 14rem;
    margin-top: 12rem;
  }
`;

const SocialBox = styled.div`
  margin-bottom: 10px;
  img {
    width: 6rem;
  }
  a {
    margin-right: 35px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
