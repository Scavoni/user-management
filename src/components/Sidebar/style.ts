import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #f8f9fa;
  height: 200vh;
  width: 230px;
`;

export const SidebarHeader = styled.div`
  background-color: #343a40;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 16px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SidebarMenuItem = styled.li`
  border-bottom: 1px solid #dee2e6;
`;

export const SidebarMenuLink = styled.a`
  color: #212529;
  display: block;
  padding: 16px;
  text-decoration: none;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background: #f8f9fa;
  color: black;
  text-align: left;
`;
