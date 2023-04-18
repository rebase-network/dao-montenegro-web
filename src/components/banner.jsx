import styled from "styled-components";
import BannerImg from "../assets/banner.png";
import BannerImgM from "../assets/banner_M.png";
import Header from "./header";

import TwitterIcon from "../assets/tw.svg";
import TGIcon from "../assets/tg.svg";
import EmailIcon from "../assets/email.svg";

export default function Banner({ sm }) {
  return (
    <BannerBox sm={sm}>
      <Header sm={sm} />
      <Content>
        <p className="title">DAO Montenegro</p>
        <p className="subtitle">new organization, new world</p>
        <CallButton>call to action</CallButton>
        <SocialBox>
          <a href="">
            <img src={TwitterIcon} alt="" />
          </a>
          <a href="">
            <img src={TGIcon} alt="" />
          </a>
          <a href="">
            <img src={EmailIcon} alt="" />
          </a>
        </SocialBox>
      </Content>
    </BannerBox>
  );
}

const BannerBox = styled.section`
position: relative;
  height: ${({ sm }) => (sm ? "500px" : "734px")};
  img {
    width: 100%;
    object-fit: fill;
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
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 62px;
    line-height: 75px;
    text-shadow: 0px 0px 40px rgba(255, 255, 255, 0.9);
  }
  p.title {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 96px;
    line-height: 116px;
    -webkit-text-stroke: 2px #fbf5ef;
    text-shadow: 0px 0px 40px rgba(255, 255, 255, 0.8);
  }
`;

const CallButton = styled.span`
  margin-block: 66px;
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
`;

const SocialBox = styled.div`
  img {
    width: 60px;
  }
  a {
    margin-right: 35px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
