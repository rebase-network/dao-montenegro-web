import styled from "styled-components";
import AgendaImg from "../assets/agenda.png";
import AgendaBg from "../assets/agenda_bg.png";
import AgendaTitle from "../assets/agenda_title.png";

export default function Agenda() {
  return (
    <AgendaBox id="agenda">
      <Header>
        <img src={AgendaImg} alt="" />
        <div>
          <img className="title" src={AgendaTitle} alt="" />
        </div>
      </Header>
      <Content>
        <Container>
          <Part>
            <Title>
              <span className="text">Part 1</span>
              <span className="shape"></span>
            </Title>
            <p className="title">
              Transhumanism
            </p>
            <p>
              Is the human body a machine that can be controlled and repaired by technology?

              Is it possible for us to "live up to 1,000 years" and possess computing power that is close to god-like through constant leaps in scientific and technological advancements?

              Can we use increasingly advanced science and technology to enhance our mental, physical, and cognitive abilities, overcome disabilities, diseases, pain, aging, and death?

              Let's discuss the future of transhumanism by exploring the paths pointed to by AGI, Longevity, Network States, and Crypto.

            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 2</span>
              <span className="shape"></span>
            </Title>
            <p className="title">
              Public Goods and DeSci
            </p>
            <p>
              What is the current status of public goods in the Ethereum ecosystem? What changes have occurred in its fundraising methods?

              Why has DeSci (decentralized scientific network) made rapid progress in the field of biology? Could a new global academic network be formed based on blockchain technology in the future? Could the emergence of AGI accelerate the organization and rapid development of academic networks?

              We will invite core KOLs from Gitcoin, NounsDAO, and the DeSci field to introduce the latest developments in the fields of Public Goods and DeSci.

            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 3</span>
              <span className="shape"></span>
            </Title>
            <p className="title">
              DAO: A New Form of Organizational Structure
            </p>
            <p>
              Can DAOs solve the problem of mass unemployment caused by AI and help people find new value in social coordinates?

              How can we connect different DAOs to achieve cross-border and cross-domain resource integration and optimization, to facilitate the realization of common visions and provide more differentiated services?

              What are the development trends of DAOs in different public chain ecosystems such as Ethereum, Bitcoin, and Cosmos?

              Let's explore new organizational schemes under geopolitical crises and the productivity revolution brought about by AI, and discuss the application of DAOs in different social organizations, effective governance structures, and DAO business models.

            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 4</span>
              <span className="shape"></span>
            </Title>
            <p className="title">
              Philosophical Perspectives on DAO Tools
            </p>
            <p>
              The development of DAO has called forth new DAO tools, and these new DAO tools have also shaped people's imaginations of DAO.

              In this section, we will discuss the DAO toolset, the influence of AI on DAO tools, and how Web3 applications can achieve mass adoption through DAOs. We will focus on the philosophical perspectives of the products built by these DAO tools: what kind of organization do we hope to create with these tools?
            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 5</span>
              <span className="shape"></span>
            </Title>
            <p className="title">
              Digital Nomads and Network States
            </p>
            <p>
              How can we create a new order through network states and protect ordinary people from the adverse effects of geopolitical conflicts by providing more choices?

              How can we promote communication and cooperation among people from different cultures, languages, and backgrounds in digital city-states and achieve a truly global village?

              What is the progress of the vibrant network state practices in Africa?
            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 6</span>
              <span className="shape"></span>
            </Title>
            <p className="title">
              Creator Economy in the Post-GPT Era
            </p>
            <p>
              In this section, we will discuss the impact of AIGC on the creator economy, creator cooperatives, what kind of content we will subscribe to in 10 years, machine production and machine reading, and the survival difficulties and coping strategies that GPT has brought to creators.
            </p>
          </Part>
        </Container>
      </Content>
    </AgendaBox>
  );
}

const AgendaBox = styled.section`
  box-sizing: border-box;
`;

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
    height: 11.6rem;
    width: auto;
  }
`;


const Content = styled.div`
  background-color: #b087e2;
  padding: 5rem 7rem 0;
`;

const Container = styled.div`
  background-image: url(${AgendaBg});
  background-position: bottom;
  background-repeat: no-repeat;
  padding-bottom: 5rem;
  background-size: contain;
`;

const Part = styled.div`
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.5rem;
    margin-top: 0;
  }
  p.title {
    margin-bottom: 0;
  }
  @media (max-width: 780px) {
    p {
      font-size: 14px;
      line-height: 19px;
    }
  }
`;


const Title = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7.7rem;

    color: #ffffff;
  }
  .shape {
    display: inline-block;
    width: 113px;
    height: 9px;
    background: #03ffa4;
  }
  @media (max-width: 780px) {
    .shape {
      width: 50px;
      height: 4px;
    }
  }
`;