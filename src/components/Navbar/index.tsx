import {
  Nav,
  SearchContainer,
  SearchField,
  SearchIcon,
  UserIcon,
} from "./style";
import zup from "../../assets/zup.png";

import { FaSearch } from "react-icons/fa";

import { BiUserCircle } from "react-icons/bi";

export const Navbar = (props: { changeUsers: (filter: string) => {} }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeUsers(event.target.value);
  };
  return (
    <Nav>
      <img src={zup} alt="" />
      <SearchContainer>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <SearchField type="text" placeholder="Buscar" onChange={handleChange} />
      </SearchContainer>
      <UserIcon>
        <BiUserCircle />
      </UserIcon>
    </Nav>
  );
};
