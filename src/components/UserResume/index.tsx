import { useEffect, useState } from "react";
import { Item, DivContainer, Name } from "./style";
import axios from "axios";

import { BsTrash, BsCheckLg } from "react-icons/bs";

import { MdOutlineSelectAll } from "react-icons/md";

interface User {
  atended: boolean;
  cell: string;
  deleted: boolean;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    street: string;
    city: string;
    country: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

export const UserResume = (props: { users: User[] }) => {
  return (
    <DivContainer>
      {props.users.map((user) => {
        return (
          <Item key={user.email}>
            <img src={user.picture.thumbnail} alt="" />
            <Name
              onClick={() => {
                console.log(user);
              }}
            >
              {user?.name?.first}
            </Name>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.location.city}</p>
            <BsTrash />
            <MdOutlineSelectAll />
            <BsCheckLg />
          </Item>
        );
      })}
    </DivContainer>
  );
};
