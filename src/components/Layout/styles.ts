import styled from "@emotion/styled"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const Header = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d2d2d2;
  padding: 10px;
  gap: 10px;
  background:
    linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(8.8px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
`

export const NavContainer = styled.nav`
  display: flex;
  background:
    linear-gradient(0deg, rgba(179, 186, 195, 0.5), rgba(45, 75, 111, 0.5)),
    linear-gradient(0deg, rgba(245, 243, 243, 0.1), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(8px);
  padding: 0.5rem;
  position: absolute;
  right: 50px;
  top: 28px;
`

export const NavItem = styled.div`
  margin-right: 1rem;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
`
