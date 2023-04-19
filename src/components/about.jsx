import styled from "styled-components";
import aboutImg from "../assets/about_M.png";
import aboutImg01 from "../assets/about.png";
import TwitterIcon from "../assets/tw.svg";
import TGIcon from "../assets/tg.svg";
import EmailIcon from "../assets/email.svg";
import useMediaQuery from "../hooks/useMediaQuery";

export default function About() {

  const sm = useMediaQuery("1280px");

  return (
    <SectionStyled>
      <SectionTitle>Join Us</SectionTitle>
      <JoinBox className={sm ? "small" : ""}>
        <div>
          <img src={sm ? aboutImg : aboutImg01} alt="" />
        </div>
        <JoinContent className={sm ? "small" : ""}>
          <p className="title">
            Join Us as a Content Curator or Community Contributor:{" "}
          </p>
          <p>
            Join the collaborative content creation for any of the four sections
            (DAO, DAO Tools, Crypto Nomad, and Creator Economy). Become a
            Speaker: We are seeking trailblazers, practitioners, and industry
            pioneers to join our conference, featuring four major topics on the
            exploration and future of DAOs and Network States. Contribute your
            insights by participating in speeches and panel discussions.
          </p>
          <p className="title">Lead a Workshop:</p>
          <p>
            If you are a curator, facilitator, or DAO tool entrepreneur eager to
            engage in deeper discussions and co-creation with attendees, we
            invite you to reserve a workshop session! We will provide designated
            workshop areas and a schedule, allowing leaders and participants the
            freedom to choose their preferred sessions. Commercial Value:
            Project Showcase, Story Telling, Branding, Partnership Embracing,
            and User Acquisition for DAO Tools, digital nomad service providers
            and tools, and AIGC projects. Aid investors in identifying
            entrepreneurs who are dedicated to paradigm shifts.
          </p>
          <p className="title">Join Us As a Sponsor &Strategic Partners</p>
          <p>
            We will offer various benefits in Event Engagement and Brand
            Exposure to our Sponsors & Strategic Partners, depending on the
            chosen sponsorship tier. Click here to learn more about the detailed
            offerings
          </p>
        </JoinContent>
      </JoinBox>
      <Footer>
        <Part>
          <Title>About</Title>
          <Text>
            <span>Registration (Coming soon)</span>
            <span className="symbol"> | </span>
            <span>Content Curator or Community Contributor Application</span>
            <span className="symbol"> | </span>
            <span>Speaker or Work shop Application</span>
            <span className="symbol"> | </span>
            <span>Sponsorship</span>
          </Text>
        </Part>
        <CotactPart>
          <LinePart>
            <Title>Contact</Title>
            <ContactText>dao.montenegro@seedao.info</ContactText>
          </LinePart>
          <LinePart>
            <Title>Social Media</Title>
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
          </LinePart>
        </CotactPart>
      </Footer>
    </SectionStyled>
  );
}

const SectionStyled = styled.section`
  padding-top: 6.4rem;
`;

const SectionTitle = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 100px;
  line-height: 121px;
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 40px;
    line-height: 48px;
  }
`;
const JoinBox = styled.div`
  display: flex;
  margin-top: 3.7rem;
  padding-bottom: 5.8rem;
  img {
    width: 44.9rem;
    margin-right: 4.8rem;
  }

  @media (max-width: 1280px) {
    display: block;
    padding-inline: 4rem;

    img {
      width: 100%;
    }
  }
`;
const JoinContent = styled.div`
  padding-right: 7rem;
  padding-top: 3rem;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 4rem;
    margin: 0;
  }

  p.title {
    font-weight: 700;
    color: #ff8072;
  }
  @media (max-width: 1280px) {
    padding-right: 0;
    p {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 780px) {
    padding-top: 20px;
    p {
      font-size: 14px;
      line-height: 19px;
    }
  };
`;

const Footer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 5.5rem;
  background: #f0e1d1;
  @media (max-width: 1280px) {
    padding-bottom: 0;
  }
`;

const Part = styled.div`
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const CotactPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5.9rem;
  @media (max-width: 1280px) {
    justify-content: center;
    flex-direction: column;
    margin-top: 35px
  }
`;

const LinePart = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1280px) {
    justify-content: center;
    flex-direction: column;
    margin-bottom: 35px;
  }
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 5rem;
  @media (max-width: 780px) {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

const Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 5rem;
  &.symbol {
    color: #296af1;
  }
  @media (max-width: 780px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const ContactText = styled(Text)`
  margin-left: 2rem;
`;

const SocialBox = styled.div`
  margin-left: 3.2rem;
  img {
    width: 6rem;
  }
  a {
    margin-right: 4.8rem;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 1280px) {
    margin-top: 25px;
    margin-left: 0;
  }
  @media (max-width: 780px) {
    img {
      width: 32px;
    }
    margin-top: 10px;
  }
`;
