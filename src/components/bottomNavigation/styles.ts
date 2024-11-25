import styled from "@emotion/styled";
import { NavItemProps } from "./types";

export const NavigationContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999; /* 가장 상단에 위치 */
`;

export const NavItemButton = styled.button<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  min-width: 64px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#BA6C25' : '#28292C')};
  transition: color 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconWrapper = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

