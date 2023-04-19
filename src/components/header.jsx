import styled, { css } from "styled-components";
import LogoSvg from "../assets/logo_full.svg";
import MenuIcon from "../assets/menu.svg";
import { useState } from "react";

export default function Header({ sm }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const jump = (anchorName) => {
    
    if (anchorName) {
      const anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
  const closeMenu = (e) => {
      setMenuVisible(false);
  }
  return (
    <HeaderBox sm={sm} menuVisible={menuVisible}>
      <LogoBox>
        <img src={LogoSvg} alt="" />
      </LogoBox>
      {sm && (
        <Menu src={MenuIcon} alt="" onClick={() => setMenuVisible(true)} />
      )}
      {menuVisible && (
        <NavM onClick={closeMenu}>
          <NavMContent>
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
          </NavMContent>
        </NavM>
      )}
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
  background: ${({ menuVisible }) =>
    menuVisible ? "rgba(131, 227, 219, 0.8)" : "rgba(131, 227, 219, 0.5)"};
  display: flex;
  justify-content: space-between;
  ${(props) => props.sm && SmallHeaderStyle}
  a {
    color: #000;
  }
`;

const LogoBox = styled.div`
  padding-top: 2.1rem;
  img {
    width: 23.6rem !important;
  }
  @media (max-width: 780px) {
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
  li {
    cursor: pointer;
  }
`;

const NavM = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  height: calc(100vh - 50px);
  width: 100%;
  background-color: rgba(0, 0 ,0, .2);
`;

const NavMContent = styled.ul`
  width: 100%;
  line-height: 44px;
  background: rgba(131, 227, 219, 0.8);
  width: 100%;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  padding: 0;
  li {
    cursor: pointer;
    text-align: center;
  }
`;
const Menu = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  height: 17px;
  cursor: pointer;
`;