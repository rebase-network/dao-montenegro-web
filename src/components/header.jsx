import styled, { css } from "styled-components";
import LogoSvg from "../assets/logo_full.svg";

export default function Header({ sm }) {
  const jump = (anchorName) => {
    if (anchorName) {
      const anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
  return (
    <HeaderBox sm={sm}>
      <LogoBox>
        <img src={LogoSvg} alt="" />
      </LogoBox>
      {!sm && (
        <Nav sm={sm}>
          <li onClick={() => jump("agenda")}>Agenda</li>
          <li onClick={() => jump("speaker")}>Speakers</li>
          <li>
            <a
              href="https://drive.google.com/file/d/1cn8f5L8sh-BsSbca5FUdeWej7t3FGiWX/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsorship
            </a>
          </li>
          <li>Tickets</li>
        </Nav>
      )}
    </HeaderBox>
  );
}

const SmallHeaderStyle = css`
  justify-content: center;
  height: 50px;
`;

const HeaderBox = styled.header`
  position: absolute;
  width: 100%;
  height: 9rem;
  left: 0px;
  top: 0px;
  padding-inline: 6rem;
  box-sizing: border-box;
  background: rgba(131, 227, 219, 0.5);
  display: flex;
  justify-content: space-between;
  ${(props) => props.sm && SmallHeaderStyle}
`;

const LogoBox = styled.div`
  padding-top: 2.1rem;
  img {
    width: 23.6rem !important;
  }
  @media (max-width: 1280px) {
    padding-top: 12px;
    img {
      width: 130px !important;
    }
  }
`;
const Nav = styled.ul`
  display: flex;
  gap: 60px;
  margin: 0;
  line-height: 9rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  cursor: pointer;
  a {
    color: #000;
  }
`;
