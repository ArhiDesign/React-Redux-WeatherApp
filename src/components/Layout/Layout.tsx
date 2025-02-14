import React from "react"
import { NavLink } from "react-router-dom"
import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  Header,
  HeaderTitle,
  NavContainer,
  NavItem,
  MainContent,
} from "./styles"

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <HeaderTitle>Weather App</HeaderTitle>
        <NavContainer>
          <NavItem>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: "white",
              })}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/history"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: "white",
              })}
            >
              History
            </NavLink>
          </NavItem>
        </NavContainer>
      </Header>
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  )
}

export default Layout
