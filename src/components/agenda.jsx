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
              DAO: A New Form of Organizational Structures
            </p>
            <p>
              The Meaning of Humans in DAOs, Can DAOs Solve the Problem of
              Massive Unemployment Caused by AGI? The Application of DAOs in
              Different Social Organizations, Effective Governance Structures,
              DAO Business Models, Digital Cooperatives, and Community Based
              Learning
            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 2</span>
              <span className="shape"></span>
            </Title>
            <p className="title">A Philosophical Perspective to DAO Tools</p>
            <p>
              DAO Management Tools, AI’s Impact on DAO Tools, New World Maps,
              and Vertical DAO Tools
            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 3</span>
              <span className="shape"></span>
            </Title>
            <p className="title">Crypto Nomads and Network States</p>
            <p>
              Global Geopolitical Crisis; the Emergence of Crypto Nomads; A
              Neutral Web; Network States; Localization and Globalization
            </p>
          </Part>
          <Part>
            <Title>
              <span className="text">Part 4</span>
              <span className="shape"></span>
            </Title>
            <p className="title">Creator Economy in the Post-GPT Era</p>
            <p>
              AIGC’s Impact on Creator Economy; Creator Cooperatives; What kind
              of content will we subscribe to in 10 years? Machine Production
              and Machine Reading; Universal Basic Income
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