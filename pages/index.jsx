import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const NavItems = styled.ul`
  display:flex;
`;

const NavItem = styled.li`
 padding:0 16px;
 list-style :none;
`;

const NavLink = styled.a`
text-decoration: none;
color: 667085

`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <nav>
          <NavItems>
            <NavItem>
              <Link href="/">
              Home
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/products">
              Products
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/documentation">
              Documentation
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/pricing">
              Pricing 
              </Link>
            </NavItem>
            </NavItems>
        </nav>
        <a href={Routes.projects}>Dashboard</a>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
