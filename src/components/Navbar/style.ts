import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;

export const SearchField = styled.input`
  margin-top: 5px;
  padding-left: 35px;
  background-color: #ffffff;
  color: black;
  border-radius: 50px;
  width: 1000px;
  height: 30px;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 15px;
  color: #bbc741;
`;

export const UserIcon = styled.div`
  /* top: 50%;
  left: 10px;
  transform: translateY(-50%); */
  font-size: 35px;
  /* color: #bbc741; */
`;
