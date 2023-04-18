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
`

const HeaderBox = styled.header`
  position: absolute;
  width: 100%;
  height: 90px;
  left: 0px;
  top: 0px;
  padding-inline: 60px;
  box-sizing: border-box;
  background: rgba(131, 227, 219, 0.5);
  display: flex;
  justify-content: space-between;
  ${(props) => props.sm && SmallHeaderStyle}
`;

const LogoBox = styled.div`
  padding-top: 21px;
  img {
    width: 236px;
  }
`
const Nav = styled.ul`
  display: flex;
  gap: 60px;
  margin: 0;
  line-height: 90px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  cursor: pointer;
  a {
    color: #000;
  }
`;